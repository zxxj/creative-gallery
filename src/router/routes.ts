import type { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  /**
   * 首页
   * Home page
   */
  {
    path: '/',
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/Home/index.vue'),
      },
    ],
  },
];
