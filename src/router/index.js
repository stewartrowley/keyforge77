import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import DecksView from '../views/DecksView.vue';
import PodsView from '../views/PodsView.vue';
import HouseView from '../views/HouseView.vue';
import CardsView from '../views/CardsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/decks',
      name: 'decks',
      component: DecksView
    },
    {
      path: '/pods',
      name: 'pods',
      component: PodsView
    },
    {
      path: '/cards',
      name: 'cards',
      component: CardsView
    },
    { 
      path: '/:id', 
      name: ':id',
      component: HouseView 
    }
  ]
})

export default router
