
import BasicLayout, { LayoutProps, SiderRouterProps } from '../../components/BasicLayout';

const route: SiderRouterProps = {
  routes: [
    {
      path: '/',
      redirect: '/welcome',
    },
    {
      path: '/welcome',
      isHideMenu: true,
    },
    {
      path: '/home3',
      name: '管理页',
      icon: 'home',
    },
    {
      path: '/home',
      name: '管理页',
      icon: 'home',
      routes: [
        {
          path: '/home/1',
          name: '测试1',
        },
        {
          path: '/home/2',
          name: '测试2',
          icon: 'home',
        }
      ]
    },
    {
      path: '/list',
      name: '列表页',
      icon: 'home',
      routes: [
        {
          path: '/list/1',
          name: '测试1',
          icon: 'home',
        },
        {
          path: '/list/2',
          name: '测试2',
          icon: 'home',
        }
      ]
    },
  ]
}

const Base = () => {
  return (
    <BasicLayout
      route={route}
      headerConfig={{
        title: "后台管理系统",
        logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
      }}
    ></BasicLayout>
  )
}

export default Base;