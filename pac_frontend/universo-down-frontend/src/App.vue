<template>
  <div id="app">
    <NavbarComponent />
    <router-view/>
    <FooterComponent />
  </div>
</template>

<script>
import NavbarComponent from './components/Navbar.vue';
import FooterComponent from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    NavbarComponent,
    FooterComponent
  }
};
</script>

<style>
@import '~bootstrap/dist/css/bootstrap.css';
@import '~bootstrap-vue/dist/bootstrap-vue.css';

html, body, #app {
  height: 100%;
}
</style>
