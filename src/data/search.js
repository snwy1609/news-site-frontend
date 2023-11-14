// api.js
import axios from 'axios';

const apiKey = 'c8ce4ea87613248674b960959d5ce1c5';

export const searchBooks = async (query) => {
  try {
    const response = await axios.get('https://gnews.io/api/v4/search', {
      params: {
        q: query,
        lang: 'en',
        country: 'us',
        max: 30,
        apikey: apiKey, // Use apikey instead of key
      },
    });

    return response.data.items;
  } catch (error) {
    console.error('Error fetching data from Google Books API', error);
    throw error;
  }
};
