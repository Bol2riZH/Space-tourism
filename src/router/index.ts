import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/:name',
      name: 'destination',
      component: () => import('../views/DestinationView.vue'),
    },
    {
      path: '/:name',
      name: 'crew',
      component: () => import('../views/CrewView.vue'),
    },
    {
      path: '/:name',
      name: 'technology',
      component: () => import('../views/TechnologyView.vue'),
    },
  ],
});

export default router;
