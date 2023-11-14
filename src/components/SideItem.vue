<template>
    <!-- <div class="news-card">
      <div class="news-details">
        <p class="news-title">{{ item.title }}</p>
        <p class="news-description">{{ item.description }}</p>
      </div>
    </div> -->
    
    <q-list  class="q-ml-sm ">
      <q-item style="border-bottom: 1px solid #ddd;">
        <q-item-section class="section">
          <q-item-label class="text-bold">{{ item.title }}</q-item-label>
          
        </q-item-section>

        <q-item-section side top>         
          <q-item-label style="font-size: 8px;" caption>{{ formatDate(item.publishedAt) }}</q-item-label>
          <q-img :src="item.urlToImage" style="width:70px;"></q-img>
        </q-item-section>
      </q-item>
    </q-list>
  </template>
  
  <script>
export default {
  props: ['item'],
  methods: {
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
      return formattedDate;
    }
  }
}
</script>
  
  <style scoped>
.section{
    text-align: left;
}
.news-card {
    display: flex;
    
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    margin-bottom: 10px;
  }
  
  .news-details {
    color: rgb(61, 64, 65);
  }
  
  .news-title {
    font-size: 16px;
  
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .news-description {
    font-size: 13px;
    color: #555;
    margin-bottom: 1px;
  }
  
  .no-articles {
    text-align: center;
    color: #555;
  }
  </style>
  