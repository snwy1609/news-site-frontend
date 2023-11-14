// components/SearchResultPage.vue
<template>
  <div>
    <h1>Search Results for "{{ query }}"</h1>
    <div v-for="result in searchResults" :key="result.id">
      <!-- Display your result data here, adjust accordingly -->
      <p>{{ result.title }}</p>
      <p>{{ result.description }}</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { searchBooks } from '@/path-to-your-api';

export default {
  props: ['query'],
  setup(props) {
    const searchResults = ref([]);

    onMounted(async () => {
      try {
        const results = await searchBooks(props.query);
        searchResults.value = results;
        console.log('Search Results:', searchResults.value);
      } catch (error) {
        console.error('Error searching books:', error);
      }
    });

    return {
      searchResults,
    };
  },
};
</script>
