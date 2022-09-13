
import Docs from './routes/docs';
import Components from './routes/components';

export default {
  history: { type: 'hash' },
  routes: [
    { 
      path: '/',
      component: '@/layouts/Base',
      routes: [
        {
          path: '/',
          redirect: '/index'
        },
        {
          path: '/index',
          name: '首页',
          component: '@/pages/Home'
        },
        {
          path: '/docs',
          name: '文档',
          component: '@/pages/Docs/index',
          routes: Docs
        },
        {
          path: '/components',
          name: '组件',
          component: '@/pages/Components/index',
          routes: Components
        }
      ]
    }
  ]
};
