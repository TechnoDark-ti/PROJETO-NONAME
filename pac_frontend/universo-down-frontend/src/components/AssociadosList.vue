<!-- src/components/Associados.vue -->
<template>
	<div>
	  <h2>Lista de Associados</h2>
	  <ul>
		<li v-for="associado in associados" :key="associado.id_associado">
		  {{ associado.nome_associado }}
		</li>
	  </ul>
	</div>
  </template>
  
  <script>
  export default {
	data() {
	  return {
		associados: []  // Aqui você pode carregar os dados dos associados do backend
	  }
	},
	mounted() {
	  // Lógica para carregar os associados (pode usar axios ou fetch)
	  this.carregarAssociados();
	},
	methods: {
	  async carregarAssociados() {
		try {
		  // Exemplo: carregar dados dos associados usando axios
		  const response = await axios.get('/api/associados');
		  this.associados = response.data;
		} catch (error) {
		  console.error('Erro ao carregar associados:', error);
		}
	  }
	}
  }
  </script>
  
  <style scoped>
  /* Estilos específicos do componente Associados.vue */
  </style>
  