<template>
  <div class="nav absolute top-0 w-full">
    <div class="flex justify-around pt-6 pb-6 text-white">
      <!-- left -->
      <div>
        <p class="text-2xl">THE PLANETS</p>
      </div>
      <!-- right -->
      <div>
        <router-link 
        v-for="planet in planets" :key="planet.name"
        :to="{name: 'Planet',
        params:{slug: planet.slug}
        }"
        class="ml-6"
        >{{planet.name}}</router-link>
      </div>
      <router-view  class="absolute top-80" :key="$route.path"/>
    </div>
  </div>
</template>

<script>
import store from '../../store'
export default {
  name:'NavBar',
  data() {
    return {
      planets: store.planets,
    }
  },
}
</script>

<style scoped>
.nav{
  background-color: #070625;
  border-bottom: solid 1px white;
}
</style>