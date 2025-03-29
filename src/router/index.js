import { createRouter, createWebHistory } from "vue-router";
import collection from '../components/ExploreFeatures.vue'
import allpet from '../components/AnimalCategory.vue'

const routes = [
  { path: "/", }, 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
