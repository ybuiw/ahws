
import BasicLayout, { SiderRouterProps } from '../../components/BasicLayout';
import {
  HomeOutlined
} from '@ant-design/icons';

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
      icon: <HomeOutlined />,
    },
    {
      path: '/home',
      name: '管理页',
      icon: <HomeOutlined />,
      routes: [
        {
          path: '/home/1',
          name: '测试1',
        },
        {
          path: '/home/2',
          name: '测试2',
          icon: 'CopyOutlined',
        }
      ]
    },
    {
      path: '/list',
      name: '列表页',
      icon: <HomeOutlined />,
      routes: [
        {
          path: '/list/1',
          name: '测试1',
          icon: 'CopyOutlined',
        },
        {
          path: '/list/2',
          name: '测试2',
          icon: 'CopyOutlined',
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
    >aaaa</BasicLayout>
  )
}

export default Base;