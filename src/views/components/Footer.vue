<template>

  <div class="q-pa-md" style="height: 350px; border-top: 1px solid rgb(223, 220, 220); background-color: rgb(236, 243, 245)">

    <div class="row justify-center">
         <div class="col-lg-2 gt-sm"></div>
         <div class="col-lg-6 col-sm-12">
             <div class="row justify-start">
               <div class="col-lg-4 col-sm-6">
                    <h4 class="title text-semibold" style="color:rgb(4, 105, 136);">ENEWS.Net</h4>
                    <i class="fab fa-facebook icon" ></i>
                    <i class="fab fa-twitter icon" ></i>
                    <i class="fab fa-instagram icon"></i>
                    <i class="fab fa-pinterest icon" ></i>
                </div>

                <div class="col-lg-8 col-sm-6">
   
                  <div class="row q-pa-lg q-mt-sm">
                      <div  v-for="tab in tabs" :key="tab.name" class="col-md-6 col-sm-6">
                      <div class="flex">
                          <div class="col">
                              <!-- <router-link :to="tab.to"> -->
                                  <p style= "color: rgb(117, 114, 114);" class="text-h7 text-semibold">{{ tab.label }}</p>
                              <!-- </router-link> -->
                          
                          </div>
                      </div>
                      </div>
                  </div>
                </div>
              </div>
         </div>
        
        


          <div class="col-lg-2 gt-sm"></div>

          
     </div>

     <q-separator class="q-mt-lg"/>

     <div class="row justify-center q-pa-sm">
        <p style="color:rgb(141, 139, 139)">@2023 ENEWS.Net. All Rights Reserved.</p>
     </div>
            
   
    
</div>

   

  
</template>

<script>
export default {
    data() {
    return {
      columns: [1, 2],
      tabs: [
        { label: 'Trending Now', name: 'trending', to: '/trending' },
        { label: 'News', name: 'Home', to: '/home' },
        { label: 'Global', name: 'about', to: '/global' },
        { label: 'Technology', name: 'technology', to: '/technology' },
        { label: 'Business', name: 'business', to: '/business' },
        { label: 'Politics', name: 'about', to: '/about' },
        { label: 'Entertainment', name: 'about', to: '/about' },
        { label: 'Sports', name: 'about', to: '/about' },
        { label: 'Stocks', name: 'about', to: '/about' },
        { label: 'Health', name: 'about', to: '/about' },
      ],
    };
  },

}
</script>

<style>
.icon{
    font-size: 25px;
    color:rgb(4, 105, 136);
    padding: 2px;
}

</style>