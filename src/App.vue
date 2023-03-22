<style>
  @import './assets/css/style.css';
  @import './assets/css/swiper.css';
  @import '@coreui/coreui/dist/css/coreui.min.css'
  .swiper-button-prev, .swiper-container-rtl .swiper-button-next{
    background-image: inherit !important;
  }
</style>

<template>
  <div class="main_page">
    <MainPage />
  </div>
</template>

<script>
import MainPage from './pages/index.vue';

export default {
  name: 'App',
  components: {
      MainPage
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
