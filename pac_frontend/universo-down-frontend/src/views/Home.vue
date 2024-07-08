<template>
  <div>
    <h1>Home Page</h1>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from '../plugins/axios';

export default {
  name: 'HomePage', // Renomeando o componente para 'HomePage'
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.fetchItems();
  },
  methods: {
    async fetchItems() {
      try {
        const response = await axios.get('/items');
        this.items = response.data;
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    },
  },
};
</script>

<style scoped>
/* Estilos específicos para este componente */
</style>
