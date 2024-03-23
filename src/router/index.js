//  /devflex/src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/components/MainPage.vue';
import PortfolioPage from '@/components/PortfolioPage.vue';
import GrowthStoryPage from '@/components/careerPage.vue';
import SkillPage from '@/components/skill.vue';
import About from "@/components/About.vue";

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
  },
  {
    path: '/portfolio',
    name: 'PortfolioPage',
    component: PortfolioPage,
  },
  {
    path: '/career',
    name: 'GrowthStoryPage',
    component: GrowthStoryPage,
  },
  {
    path: '/skill',
    name: 'SkillPage',
    component: SkillPage,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
]

const router = createRouter({
  history: createWebHistory(),
  mode: 'history', // 이 부분을 추가합니다.
  routes,
  
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: 0};
    }
  },
})

export default router
