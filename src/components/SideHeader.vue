<template>
    <div class="news-card">
      <img class="news-image" :src="item.urlToImage" alt="News Image">
      <div class="news-details">
        <p class="news-title">{{ item.title }}</p>
        <!-- <p class="news-description">{{ item.description }}</p> -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['item']
  }
  </script>
  
  <style scoped>
  .news-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  
  .news-card {
    position: relative;
    max-width: 500px;
    transition: transform 0.3s ease-in-out;
  }
  
  .news-image {
    width: 100%;
    height: 140px;
    object-fit: cover;
  }
  
  .news-details {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center; /* Center the title horizontally */
    color: aliceblue;
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
    margin-bottom: 1px;
  }
  
  .no-articles {
    text-align: center;
    color: #555;
  }
  </style>
  