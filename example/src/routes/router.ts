import { lazy } from 'react';


export const routeData = [
  {
    path: '/home',
    component: lazy(() => import('../pages/home')),
  },
  {
    path: '/docs/getting-started',
    component: lazy(() => import('../pages/docs/getting-started')),
  },
  {
    path: '/components/pro-search',
    component: lazy(() => import('../pages/components/pro-search')),
  }
]