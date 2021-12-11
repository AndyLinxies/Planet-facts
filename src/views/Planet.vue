<template>
  <div class="planet">
    <div class="grid grid-cols-2">
      <!-- Left. The parent -->
      <div class="mr-32">
        <img width="300px" :src="require(`@/assets/${planet.images.planet}`)" alt="">
      </div>
      
      <div>
        <div class="right">
          <p class="text-6xl">{{planet.name}}</p>
          <!-- Right the child -->
        <router-view :detailArr='planetInfo' />
        <div class="mt-5">
        <router-link
        class="block mt-2 border border-1 pt-2 pb-2"
        :to="{name: 'PlanetInfo',
        params:{
          slug2: detail.name
        }
        }"
       v-for="detail in planetInfo" :key="detail.name"
        >{{detail.name}}</router-link>
          </div>
        
        </div>
      </div>
    </div>
    <!-- Extra  -->
    <div class="grid grid-cols-4 mt-20 gap-4">
      <div class="border border-b-1">
        <p class="text-gray-500 pt-2">ROTATION TIME</p>
        <p class="text-3xl mt-2 pb-2">{{planet.rotation}}</p>
      </div>
      <div class="border border-b-1">
        <p class="text-gray-500 pt-2">REVOLUTION TIME</p>
        <p class="text-3xl mt-2 pb-2">{{planet.revolution}}</p>
      </div>
      <div class="border border-b-1">
        <p class="text-gray-500 pt-2">RADIUS</p>
        <p class="text-3xl mt-2 pb-2">{{planet.radius}}</p>
      </div>
      <div class="border border-b-1">
        <p class="text-gray-500 pt-2">TEMPERATURE</p>
        <p class="text-3xl mt-2 pb-2">{{planet.temperature}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../../store'

export default {
  name: 'Planet',
  data() {
    return {
      planetsArr: store.planets,
      planetSlug: this.$route.params.slug,      
    }
  },
  computed: {
    planet(){
      //Il fait deja la boucle sur le planet array donc on l'utiliser pour acceder à no données
      return this.planetsArr.find(planet=>planet.slug==this.planetSlug)
    },

    //Infos de la planete selectionée. On utilise le computed précédent
    planetInfo(){
      return  this.planet.infos
    }
  },
}
</script>

<style scoped>
.right{
  margin-left: 40%;
}
.planet{
  width: 80%
}
</style>