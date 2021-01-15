import React, { useState } from 'react';
import { Layouts } from '../../components';
import logo from './logo.png';

// 模拟项目路由列表
/**
 *  @path   页面路由地址，一级菜单做为key使用
 *  @icon   菜单图标，一级菜单生效
 *  @isMenu 是否在导航菜单上显示
 *  @title  导航菜单标题
*/
const router: any = [
  {
    path: '/login',
    component: 'login page'
  },
  {
    component: 'layout page',
    isMenu: true,
    title: '首页',
    icon: 'icon-codepen',
    path: '/home',
    routes: [
      {
        path: '/home/index',
        isMenu: true,
        title: '我是首页',
        icon: 'icon-layout',
        component: 'index page',
      },
    ]
  },
  {
    component: 'layout page',
    isMenu: true,
    title: '页面1',
    icon: 'icon-share',
    path: '/a',
    routes: [
      {
        path: '/a/a1',
        isMenu: true,
        title: '页面1-1',
        icon: 'icon-layout',
        component: '页面1-1 page',
      },
      {
        path: '/a/a2',
        isMenu: true,
        title: '页面1-2',
        icon: 'icon-layout',
        component: '页面1-2 page',
      },
    ]
  },
  {
    component: 'layout page',
    isMenu: true,
    title: '页面2',
    icon: 'icon-control',
    path: '/b',
    routes: [
      {
        path: '/b/b1',
        isMenu: true,
        title: '页面2-1',
        icon: 'icon-layout',
        component: '页面1-1 page',
      },
      {
        path: '/b/b2',
        isMenu: false,
        title: '页面2-2',
        icon: 'icon-layout',
        component: '页面1-2 page',
      },
      {
        path: '/b/b3',
        isMenu: true,
        title: '页面2-3',
        icon: 'icon-layout',
        component: '页面1-3 page',
      },
    ]
  }
]

const LayoutsPage = (props: any) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onCollapsed = (v: boolean) => {
    setCollapsed(v)
  }

  return (
    <Layouts
      location={props.location}
      collapsed={collapsed}
      onCollapsed={onCollapsed}
      headerL={
        <>header left</>
      }
      headerR={
        <>header right</>
      }
      // title="后台管理系统"
      title={<img src={logo} alt="" />}
      router={router}
      footer="Copyright  2021">
        <div>
        12 <br/>
          12 <br/>
          12 <br/>
          12 <br/>
          12 <br/>
          12 <br/>
          12 <br/>
          12 <br/>
          12 <br/>
          12 <br/>
          12 <br/>12 <br/>
          12 <br/>
          12 <br/>
          12 <br/>
          12 <br/>
          12 <br/>
          12 <br/>
          12 <br/>
          12 <br/>
          12 <br/>
          12 <br/>12 <br/>
          12 <br/>
          12 <br/>
          12 <br/>
          12 <br/>
          12 <br/>
          12 <br/>
          12 <br/>
          12 <br/>
          12 <br/>
          12 <br/>12 <br/>
          12 <br/>
          12 <br/>
          12 <br/>
          12 <br/>
          12 <br/>
          12 <br/>
          12 <br/>
          12 <br/>
          12 <br/>
          12 <br/>12 <br/>
          12 <br/>
          12 <br/>
          12 <br/>
          12 <br/>
          12 <br/>
          12 <br/>
          12 <br/>
          12 <br/>
          12 <br/>
          12
        </div>
    </Layouts>
  )
}

export default LayoutsPage;