import { MenuData } from '@/components/SubMenus';

/** header menus */
export const NavMenus: MenuData[] = [
  { path: '/index', name: '首页',  param: '/index' },
  { path: '/docs/getting-started',  name: '文档', param: '/docs' },
  { path: '/components/pro-search', name: '组件', param: '/components' }
]

/** docs menus */
export const docsMenus: MenuData[] = [
  { path: '/docs/getting-started', name: '快速上手' },
  { path: '/docs/changelog', name: '更新日志' }
]

/** components menus */
export const componentsMenus: MenuData[] = [
  { divider: true, name: '通用' },
  { path: '/components/pro-search', name: '搜索' },
]