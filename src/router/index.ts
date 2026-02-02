import { createRouter, createWebHistory } from 'vue-router'

// @ts-ignore
import HomeView from '../HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {path: '/', component: HomeView}
  ],
})

export default router
