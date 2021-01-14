react后台layout页面封装
===
基于 `antd` layout页面封装。依赖 `antd`, `@ant-design/icons`。
基础layout页面，包含顶部，左侧，右侧模块。左侧菜单最多支持二级。

### 安装

```bash
npm install --save @ahws/layouts
```

### 引入

```jsx
import Layouts from '@ahws/layouts';
```

### Demo

<!--DemoStart,bgWhite,codePen,codeSandbox--> 
```js
import React, { useState } from 'react';
import Layouts from '@ahws/layouts';
import logo from './logo.png';

// 模拟项目路由列表
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
    path: '/index1',
    routes: [
      {
        path: '/index',
        isMenu: true,
        title: '我是首页',
        component: 'index page',
      },
    ]
  },
  {
    component: 'layout page',
    isMenu: true,
    title: '页面1',
    icon: 'icon-share',
    path: '/aa1',
    routes: [
      {
        path: '/a1',
        isMenu: true,
        title: '页面1-1',
        component: '页面1-1 page',
      },
      {
        path: '/a2',
        isMenu: true,
        title: '页面1-2',
        component: '页面1-2 page',
      },
    ]
  },
  ...
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
        内容 区域
    </Layouts>
  )
}

export default LayoutsPage;
```
<!--End-->

## Props

| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| location | 必填。传递页面路由信息 props.location。menu菜单默认选中及展开需要 | Object | props.location |
| title | 标题/logo | String/ReactNode | -- |
| collapsed | 菜单是否收起状态 | Boolean | -- |
| headerL | header 头部导航左侧侧自定义内容展示 | React.ReactNode | -- |
| headerR | header 头部导航右侧自定义内容展示 | React.ReactNode | -- |
| footer | 底部布局 | React.ReactNode / string | -- |
| router | 项目路由列表，需配置 | Array | [] |
| onCollapsed | 菜单收起展开状态回调，结合`collapsed`使用 | function(values: boolean) | -- |
| onCollapsed | 菜单收起展开状态回调，结合`collapsed`使用 | function(values: boolean) | -- |

## Props router

`router` 是用来左侧导航菜单展示，最多支持二级。结构与`react-router-config` 一致。具体实例用法参考上面demo。

- `path`   必要。页面路由地址，值是唯一的。一级菜单做为key使用，作为menu初始化展开的标记。

- `icon`   菜单图标，一级菜单生效，当前只能使用 [Ant Design 官方图标库](https://www.iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.d9df05512&cid=9402) 的资源。

- `isMenu` 必要。是否在导航菜单上显示

- `title`  必要。导航菜单标题

## 效果图
![calendar](https://github.com/ybuiw/ahws/blob/master/packages/layouts/1.png)

