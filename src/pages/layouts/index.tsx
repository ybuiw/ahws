import React, { useState } from 'react';
import { Button, Table, Form, Input  } from 'antd';
import { Layouts, PageContinar } from '../../components';
import logo from './logo.png';

// 模拟项目路由列表
/**
 *  @path   页面路由地址，一级菜单做为key使用
 *  @icon   菜单图标，一级菜单生效
 *  @isMenu 是否在导航菜单上显示
 *  @title  导航菜单标题
*/
const router: any[] = [
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
      },
      {
        path: '/a/a2',
        isMenu: true,
        title: '页面1-2',
        icon: 'icon-layout',
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
      },
      {
        path: '/b/b2',
        isMenu: false,
        title: '页面2-2',
        icon: 'icon-layout',
      },
      {
        path: '/b/b3',
        isMenu: true,
        title: '页面2-3',
        icon: 'icon-layout',
      },
    ]
  }
]

const SearchDom = () => {
  return (
    <Form
      layout="inline"
    >
      <Form.Item label="姓名">
        <Input placeholder="姓名" />
      </Form.Item>
      <Form.Item label="电话号码">
        <Input placeholder="电话号码" />
      </Form.Item>
      <Form.Item >
        <Button type="primary">搜索</Button>
      </Form.Item>
    </Form>
  )
}

const LayoutsPage = (props: any) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const headTab: any = [
    {
      key: 'tab1',
      tab: '按接收凭证',
    },
    {
      key: 'tab2',
      tab: '按项目类型',
    },
  ]

  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: '3',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: '4',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: '5',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: '6',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ];
  
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  const onCollapsed = (v: boolean) => {
    setCollapsed(v)
  }

  const onHeadTab = (v: string) => {
    console.log(v)
  }

  const searchItem: any[] = [
    { title: '姓名', name: 'name', value: 'aa', type: 'input'},
    { title: '手机号', name: 'mobile', type: 'input'},
    { title: '类型', name: 'type', type: 'select', width: 160, child: [
      {name: '类型1', value: '1'},
      {name: '类型2', value: '2'}
    ]},
    { title: '多选', name: 'checkbox', type: 'checkbox', child: [
      {name: '多选1', value: '1'},
      {name: '多选2', value: '2'}
    ]},
    { title: '日期', name: 'date', type: 'datePicker'},
    { title: '时间范围', name: 'date2', type: 'rangePicker'},
  ]

  const onSearch = (value: any) => {
    console.log(value)
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
        <PageContinar
          title="我是标题"
          isBack={false}
          headExtra={
            <>
              <Button type="primary">下载附件</Button>
              <Button type="primary">+ 新增</Button>
            </>
          }
          headTab={headTab}
          onHeadTab={onHeadTab}
          searchDom={searchItem}
          // searchDom={<SearchDom />}
          onSearch={onSearch}
        >
          <>
            <Table dataSource={dataSource} columns={columns} />
          </>
        </PageContinar>
    </Layouts>
  )
}

export default LayoutsPage;