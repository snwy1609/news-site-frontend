<template>
    <div class="news-card">
            
             <div class="news-details">
                <img class="news-image" :src="item.urlToImage" alt="News Image">
                 <p class="news-title">{{ item.title }}</p>
              
              
              
               <!-- <p class="news-description">{{ item.description }}</p> -->
             
             </div>
           </div>
       
      
   
 
</template>

<script>

export default {
   props:['item'],
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
 /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
 transition: transform 0.3s ease-in-out;
 padding: 10px;
 text-align: left;
}

.news-date{
 font-size:11px;
 color:rgb(4, 105, 136);
}
.news-image {
 width: 100%;
 height: 150px;
 object-fit: cover;
}

.news-details {
 padding-bottom: 2px;
 
}

.news-title {
 font-size: 14px;
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