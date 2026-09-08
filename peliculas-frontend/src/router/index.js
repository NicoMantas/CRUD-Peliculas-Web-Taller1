import { createRouter, createWebHistory } from 'vue-router';

import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import HomeView from '../views/HomeView.vue';

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', name: 'login', component: LoginView },
  { path: '/register', name: 'register', component: RegisterView },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('jwt_token');

  if (to.meta.requiresAuth && !token) {
    next({ name: 'login' });
    return;
  }

  if ((to.name === 'login' || to.name === 'register') && token) {
    next({ name: 'home' });
    return;
  }

  next();
});

export default router;
