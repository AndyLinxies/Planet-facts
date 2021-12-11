import Vue from 'vue'
import VueRouter from 'vue-router'
import Planet from '../views/Planet.vue'
import store from '../../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/:slug',
    name: 'Planet',
    component: Planet,
    children:[
      {
				path: ':slug2',
        name: 'PlanetInfo',
        props: true,
        component: () => import(/* webpackChunkName: "destinationPlanet" */ '../views/PlanetInfo.vue'),
      }
    ],
    //404
    //On compare par rapport au slug du store et le slug passé en params
    beforeEnter: (to, from, next) => {
      let exist= store.planets.find(tech=>tech.slug==to.params.slug)
      if (exist) {
        next()
      } else {
        next({name: 'NotFound'})
      }
    }
  },
  //404
  {
    path: '/404',
    alias:'*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "destinationPlanet" */ '../views/404NotFound.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
