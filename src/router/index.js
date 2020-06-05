import Vue from 'vue'
import VueRouter from 'vue-router'

import Landing from '../Landing/LandingPage';
import Menu from '../Menu/MenuPage';
import Events from '../Events/EventsPage';
import Auth from '../Auth/AuthPage';
import Reserve from '../Reservation/ReservePage'

Vue.use(VueRouter)

const routes = [

  { path: '/', name: 'Landing', component: Landing },
  { path: '/menu', name: 'Menu', component: Menu },
  { path: '/events', name: 'Events', component: Events },
  { path: '/user-auth', name: 'Auth', component: Auth },
  { path: '/reserve', name: 'Reserve', component: Reserve }
    
]
  
const router = new VueRouter({
  mode:'history',
  routes
})

export default router
