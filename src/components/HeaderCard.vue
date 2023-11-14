<template>
    <div class="news-card">
            <h5>{{ title }}</h5>
             <img class="news-image" :src="item.urlToImage" alt="News Image">
             <div class="news-details">
               <p class="news-title">{{ item.title }}</p>
               <p class="news-description">{{ item.description}}</p>
               <!-- <p class="news-description">{{ item.description }}</p> -->
             
             </div>
           </div>
       
      
   
 
</template>

<script>

export default {
   props:['item','title']
}
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

 /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
 transition: transform 0.3s ease-in-out;
 
}

.news-image {
 width: 100%;
 height: 400px;
 object-fit: cover;
 
}

.news-details {
 padding-bottom: 2px;
 padding: 5px;
 text-align: left;
}

.news-title {
 font-size: 2em;
 overflow: hidden;
 text-overflow: ellipsis;
 font-weight: 600;
 
 

}

.news-description {
 font-size: 15px;
 color: #555;
 margin-bottom: 12px;
 justify-content: start;
}


.no-articles {
 text-align: center;
 color: #555;
}
</style>