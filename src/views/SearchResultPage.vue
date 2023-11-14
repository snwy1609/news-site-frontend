<template>
    <div>
      <h3>Search Results for "{{ query }}"</h3>
      <div v-if="searchResults && searchResults.articles && searchResults.articles.length > 0">
        <div v-for="result in searchResults.articles" :key="result.url">
          <!-- Display your result data here, adjust accordingly -->
          <div>
            <p>{{ result.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  

<script>
import { ref, onMounted } from 'vue';
import { searchBooks } from '@/data/search';

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
