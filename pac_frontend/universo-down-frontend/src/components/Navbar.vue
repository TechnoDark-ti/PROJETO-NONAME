<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
	  <a class="navbar-brand" href="#">Universo Down</a>
	  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	  </button>
	  <div class="collapse navbar-collapse" id="navbarNav">
		<ul class="navbar-nav">
		  <li class="nav-item">
			<a class="nav-link" href="#">Home</a>
		  </li>
		  <li class="nav-item">
			<a class="nav-link" href="#">Associados</a>
		  </li>
		  <li class="nav-item">
			<a class="nav-link" href="#">Profissionais</a>
		  </li>
		  <li class="nav-item">
			<a class="nav-link" href="#">Atividades</a>
		  </li>
		</ul>
	  </div>
	</nav>
  </template>
  
  <script>
  export default {
	name: 'NavbarComponent'
  };
  </script>
  
  <style scoped>
  .navbar {
	margin-bottom: 20px;
  }
  </style>
  