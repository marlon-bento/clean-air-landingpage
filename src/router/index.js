import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Chatbot from '@/components/Chatbot.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chatbot,
    },
  ]
})

export default router
