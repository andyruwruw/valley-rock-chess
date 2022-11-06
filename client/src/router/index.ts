import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import Login from '../views/login/login.vue';
import Home from '../views/home/home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'login',
    component: Login,
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/game/:id',
    name: 'game',
    component: () => import('../views/game/game.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
