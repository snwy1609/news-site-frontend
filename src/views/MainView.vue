<template>
    <div>
      <q-layout view="lHh lpr lFf" container style="height: 100vh" class="shadow-2 ">
        <q-header elevated>
          <q-toolbar class="first-tool q-pa-sm ">
            <div class="col">
                <div class="row">
                <div class="col-lg-1 gt-sm col-md-1"  ></div>
                <div class="col-lg-3 col-sm-2 col-md-3 col-3">
                    <div class="row justify-center">
                        <q-btn flat round dense icon="menu" class="q-mr-sm">
                          <q-menu
                            :offset="[-10, 10]"                         
                            style="width:200px"
                            class="q-pa-md shadow-sm"
                          >                         
                           
                              <div class="title text-h6 text-semibold" style="color:rgb(4, 105, 136);">ENEWS.net</div>
                               <q-separator class="q-mb-md"/>
                                <div  v-for="tab in tabs" :key="tab.name" class="col-md-12">
                                <div class="flex">
                                    <div class="col">
                                      <router-link :to="tab.to">
                                        <p style="color:rgb(94, 90, 90)" class="text-h7 text-bold text-uppercase">{{ tab.label }}</p>
                                      </router-link>
                                    </div>
                                </div>
                                </div>
                                
                          </q-menu>
                        </q-btn>
                        <q-avatar>
                        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
                        </q-avatar>
                    </div>
                   
                </div>
              
                <div class="col-lg-4 col-md-4 col-sm-8 col-4">
                  <div class="row justify-center">
                    <q-toolbar-title class="title text-h5 text-semibold">ENEWS.Net</q-toolbar-title>
                  </div>
                    
                </div>
                <div class="col-lg-3 col-md-3 col-sm-2 col-3">
                 <div class="row justify-center">
                   <q-btn flat round  icon="search" @click="search" />
                   <!-- <q-input v-model="searchQuery" dense placeholder="Search..." /> -->
                </div>
                </div>
                <div class="col-lg-1 gt-sm col-md-1"></div>
            
            </div>
          
            </div>
          </q-toolbar>
  
          <div class="">
                <q-toolbar class="second-tool  flex justify-center items-center " v-if="isDesktop">              
                    <q-tabs>
                        <q-route-tab label="Trending Now" name="trending" to="/trending"> </q-route-tab>
                        <q-route-tab label="News" name="news" to="/home"> </q-route-tab>
                        <q-route-tab label="Global" name="global" to="/global"> </q-route-tab>
                        <q-route-tab label="Technology" name="technology" to="/technology"> </q-route-tab>
                        <q-route-tab label="Business" name="business" to="/business"> </q-route-tab>
                        <q-route-tab label="Politics" name="politics" to="/politics"> </q-route-tab>
                        <q-route-tab label="Entertainment" name="entertainment" to="/entertainment"> </q-route-tab>
                        <q-route-tab label="Sports" name="sports" to="/sports"> </q-route-tab>
                        <q-route-tab label="Stocks" name="lifestyle" to="/lifestyle"> </q-route-tab>
                        <q-route-tab label="Health" name="health" to="/health"> </q-route-tab>
                        
                    </q-tabs>                  
                </q-toolbar>
            </div>
        </q-header>

         <q-page-container>
            <q-page>
                <router-view/>
                
            </q-page>    
            <FooterVue />
         </q-page-container>
       
      
    
    </q-layout>
    </div>
   
  </template>
  
  <script>
  import { ref } from 'vue'
  
  import { searchBooks } from '@/data/search.js' // Replace with the correct path to your API file
  import { useRouter } from 'vue-router';
  import FooterVue from '../views/components/Footer.vue'

  export default {
    components:{
         FooterVue
    },
    setup () {
      const searchQuery = ref('');
      const router = useRouter();

      const search = async () => {
        try {
          const results = await searchBooks(searchQuery.value);
          router.push({
          name: 'search-results',
          params: { query: searchQuery.value },
        });       
        } catch (error) {
          console.error('Error searching books:', error);
        }
      };
      return {
     
        searchQuery,
        search,     
      }
    },
    data() {
    return {
      isDesktop: true,
      tabs: [
        { label: "Trending Now", name: "trending", to: "/trending" },
        { label: "News", name: "news", to: "/home" },
        { label: "Global", name: "global", to: "/global" },
        { label: "Technology", name: "technology", to: "/technology" },
        { label: "Business", name: "business", to: "/business" },
        { label: "Politics", name: "politics", to: "/politics" },
        { label: "Entertainment", name: "entertainment", to: "/entertainment" },
        { label: "Sports", name: "sports", to: "/sports" },
        { label: "Stocks", name: "lifestyle", to: "/lifestyle" },
        { label: "Health", name: "health", to: "/health" }
      ], // To track if the screen is desktop-sized
    };
    },
    mounted() {
      // Check screen size on component mount and resize
      this.checkScreenSize();

      // Listen for window resize events
      window.addEventListener('resize', this.checkScreenSize);
    },
    beforeUnmount() {
      // Cleanup the event listener on component unmount
      window.removeEventListener('resize', this.checkScreenSize);
    },
    methods: {
      checkScreenSize() {
        // Update isDesktop based on window.innerWidth
        this.isDesktop = window.innerWidth >= 1024;
      },
    },
  }
  </script>



<style>

.first-tool{
    background-color: rgb(4, 105, 136);
}

.second-tool{
    background-color: rgb(236, 243, 245);
    color: rgb(99, 96, 96);
    font-size: 10px;
    font-weight: 800;
    
}

.title{
    font-family:Georgia, 'Times New Roman', Times, serif;
    
}
</style>
  