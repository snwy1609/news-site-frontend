<template>
    <div class="news-container">
      <div class="q-pa-md"> 
        <div v-if="responseData && responseData.articles && responseData.articles.length > 0">
          <div clickable v-for="item in responseData.articles" :key="item.url" class="news-item" @click="redirect(item.url)"  >
            <div class="news-card">
              <img class="news-image" :src="item.urlToImage" alt="News Image">
              <div class="news-details">
                <p class="news-title">{{ item.title }}</p>
                <!-- <p class="news-description">{{ item.description }}</p> -->
              
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <!-- Handle the case when no articles are available -->
          <p class="no-articles">No articles available. Please check back later.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        responseData: null,
      };
    },
    mounted() {
      this.fetchData();
    },
    methods: {
      async fetchData() {
        try {
          const apiKey = '7974c255b4f546b987e2b2c11ac33049';
          const path = `https://newsapi.org/v2/top-headlines?category=technology&language=en&from=2023-10-11&sortBy=publishedAt&apiKey=${apiKey}`;
          const response = await fetch(path);
          const data = await response.json();
          this.setResponseData(data); // Assuming setResponseData is a method in your component
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      },
      setResponseData(data) {
        console.log('API Response Data:', data);
        this.responseData = data;
      },
      redirect(url) {
      // Add your redirection logic here
      window.location.href = url;
    },
    },
  };
  </script>
  

  <style scoped>
  .news-container {
    display: flex;
    justify-content: center;
    align-items: center;
  
    
  }

  .news-item {
    margin: 10px;
  }

  .news-card {
    position: relative;
    max-width: 500px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
  }

  .news-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .news-details {
    padding-bottom: 2px;
    padding: 5px;
  }

  .news-title {
    font-size: 12px;
    font-weight: bold;
    overflow: hidden;
  text-overflow: ellipsis;
 
  }

  .news-description {
    font-size: 13px;
    color: #555;
    margin-bottom: 12px;
  }

 
  .no-articles {
    text-align: center;
    color: #555;
  }
</style>