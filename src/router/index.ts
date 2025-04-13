import { createRouter, createWebHistory } from 'vue-router'
import PreviewCard from '../views/PreviewCard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'previewCard',
      component: PreviewCard,
    },
  ],
})

export default router
