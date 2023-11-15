<template>
 <div class="row" >
  <!-- Item spanning two columns and two rows -->
  <div class="col-3 gt-sm col-md-1 col-lg-3"></div>
  <div class="col-6 col-lg-6 col-md-10 col-sm-12">
    <div class="row">
      <div class="col-lg-8 col-md-8 col-sm-12 col-6  q-px-md">
        <div v-if="products && products.articles">     
            <div v-for="(item, index) in products.articles" :key="item.url" class="col-md-12" @click="redirect(item.url)">
              <div v-if="index === 9" class="flex">
                <div class="col">
                  <header-card :item="item" />
                </div>
              </div>       
          </div>
        </div>
      </div>
      <div class="col-4 col-lg-4 col-md-4 col-sm-12 q-mt-lg q-pa-md">
        <div v-if="products && products.articles">
          <div class="row ">
            <!-- Only loop through the first two items -->
            <div v-for="(item, index) in products.articles.slice(14, 18)" :key="index" class="col-md-12 col-sm-6" @click="redirect(item.url)">
              <div class="col">
                <side-header :item="item" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
 </div> 
  <div class="col-3 gt-sm col-md-1 col-lg-3" ></div>
 </div>

 <div class="row">
  <div class="col-3 gt-sm col-lg-3 col-md-1 "></div>
  
  <div class="col-6 col-lg-6 col-md-10 col-sm-12">
    <div class="row">
      <div class="col-8">
         <div class="row text-bold q-pa-sm q-mr-md text-h5" style="background-color:  rgb(218, 218, 218);color:rgb(4, 105, 136);">
             Business
         </div>
         <div class="row">
            <div v-if="products && products.articles">
              <div class="row">
                <div v-for="item in products.articles" :key="item.url" class="col-md-4 col-sm-6" @click="redirect(item.url)">
                  <div class="flex">
                    <div class="col">
                      <item-card :item="item"/>
                    </div>
                  </div>
                </div>
              </div>
           </div>
        </div>     
      </div>

      <div class="col-4">
        <q-separator class="q-my-md"/>
        <div class="row q-mt-sm text-h5 text-bold"  >
            Trending News
        </div>
        <div class="row">
          <div v-if="products && products.articles">
            <div class="row">
              <div v-for="(item, index) in products.articles.slice(0, 10)" :key="index" class="col-md-12" @click="redirect(item.url)">
                    <div class="col">
                      <side-item-vue :item="item" :title="'Trending News'"/>
                    </div>
               </div>
            </div>
          </div>
        </div>     
      </div>  
     </div>
  </div>

  <div class="col-3 gt-sm col-lg-3 col-md-1"></div>
</div>


<div class="row">
    <div class="col-3 gt-sm col-lg-3 col-md-1"></div>
    <div class="col-6 col-lg-6 col-md-10 col-sm-12" >    
      <div class="row q-mt-sm text-h5 text-bold"  >
            Related News
        </div>
        <q-separator/>
      <div class="row q-px-sm">
        <div v-if="products && products.articles">
        <div class="row">
          <div v-for="(item, index) in products.articles.slice(0, 4)" :key="index" class="col-md-3 col-sm-6" @click="redirect(item.url)">
            <div class="flex">
              <div class="col">
                <third-row :item="item"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div class="col-3 gt-sm col-lg-3 col-md-1"></div>
</div>

<div class="row">
    <div class="col-3 gt-sm col-lg-3 col-md-1"></div>
    <div class="col-6 col-lg-6 col-md-10 col-sm-12" >    
      <div class="row q-mt-sm text-h5 text-bold"  >
            Other News
        </div>
        <q-separator/>
      <div class="row q-px-sm">
        <div v-if="products && products.articles">
        <div class="row">
          <div v-for="(item, index) in products.articles.slice(9, 13)" :key="index" class="col-md-3 col-sm-6" @click="redirect(item.url)">
            <div class="flex">
              <div class="col">
                <third-row :item="item"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div class="col-3 gt-sm col-lg-3 col-md-1"></div>
</div>


<div class="row">
<div class="col-3"></div>
<div class="col-6">
  <div class="row q-mt-sm text-h5 text-bold"  >
          Other News
      </div>
      <q-separator/>
  <div class="row"> 
    <div v-if="products && products.articles">
    <div class="row">
      <div v-for="(item, index) in products.articles.slice(5, 9)" :key="index" class="col-md-6" @click="redirect(item.url)">
        <div class="flex">
          <div class="col">
            <fourth-row-vue :item="item"/>
          </div>
        </div>
      </div>
    </div>
   </div>
  </div>
</div>
<div class="3"></div>
</div>

</template>

<script>
import {getData, apiKey }from '@/data/getData'
import ItemCard from '@/components/itemCard.vue'
import HeaderCard from '@/components/HeaderCard.vue'

import SideHeader from '@/components/SideHeader.vue'
import SideItemVue from '@/components/SideItem.vue'
import ThirdRow from '@/components/ThirdRow.vue'

import { onMounted, ref } from 'vue'
import FourthRowVue from '../components/FourthRow.vue'

export default {
  components: {
    ItemCard,
    HeaderCard,
    SideHeader,
    SideItemVue,
    ThirdRow,
    FourthRowVue
  },
  setup() {
    const products = ref(null);
    const localapiKey = apiKey;

    onMounted(async () => {
     
       //products.value = await getData(`https://newsapi.org/v2/top-headlines?category=business&language=en&country=us&apiKey=${localapiKey}`);
      //products.value = await getData('https://fakestoreapi.com/products')
      
    });

    return {
      products,
      
    };
  },
  methods:{
    redirect(url) {
      // Add your redirection logic here
      window.location.href = url;
    },
  }
}
</script>

<style>
/* Add any necessary styles */


</style>
