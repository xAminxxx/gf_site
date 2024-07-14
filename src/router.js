import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import DateIdeas from './components/DateIdeas.vue';


const routes = [
  { path: '/', component: HomePage },
  { path: '/date-ideas', component: DateIdeas },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
