<template>
  <div class="home">
     <Recommendation />
  </div>
</template>

<script>
// @ is an alias to /src
import Recommendation from './components/Recommendation.vue'

export default {
  name: 'HomeView',
  components: {
       Recommendation
  }
}
</script>
