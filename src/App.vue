<template>
  <div id="app" >
    <img src="./assets/background-stars.svg" alt="">
    <div>
      <NavBar />
      
    </div>
    
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components:{
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #070625;
  position: relative  
;
}
/* html{
  background-image: url('./assets/background-stars.svg');
  height: 100vh;
} */


</style>
