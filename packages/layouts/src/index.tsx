import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router';
import { Layout, Menu } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, createFromIconfontCN } from '@ant-design/icons';
import './index.css';
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2325869_zea4of8xtzk.js',
})

export interface LayoutsFace {
  /**
   * 左上角logo部分，可以是文字， 如果是图片建议高度32px
  */
  title?: React.ReactNode | string,
  /**
   * 菜单是否收起状态
  */
  collapsed?: boolean,
  /**
   * header 头部导航左侧侧自定义内容展示
  */
  headerL?: React.ReactNode,
  /**
   * header 头部导航右侧自定义内容展示
  */
  headerR?: React.ReactNode,
  /**
   * 底部布局
  */
  footer?: React.ReactNode | string,
  /**
   * 项目路由列表，需配置
  */
  router?: any,
  /**
   * 内容部分
  */
  children?: React.ReactNode,
  /**
   * 菜单收起展开状态回调
  */
  onCollapsed?: (values: boolean) => void,
  /**
   * 传递页面路由信息 props.location。menu菜单默认选中及展开需要
  */
  location: any
}

const LayoutHeader = (props: LayoutsFace) => {
  const onCollapsed = () => {
    if (props.onCollapsed) {
      props.onCollapsed?.(!props.collapsed);
    }
  }
  return (
    <Header className={`layout-header`}>
      {props.title && <div className={`layout-title`}>{props.title}</div>}
      {typeof props.collapsed === 'boolean' && props.onCollapsed &&
        <div className={`layout-outlined`} onClick={onCollapsed}>
          {props.collapsed ? <MenuUnfoldOutlined className="icon" /> : <MenuFoldOutlined className="icon" />}
        </div>
      }
      {props.headerL && <div className={`layout-right`}>{props.headerL}</div>}
      <div className={`layout-flex`}></div>
      {props.headerR && <div className={`layout-right`}>{props.headerR}</div>}
    </Header>
  )
}

const LayoutContent = (props: LayoutsFace) => {
  return (
    <Content className={`layout-content`}>
      <div className={`layout-children`}>
        {props.children}
        {props.footer &&
          <div className={`layout-footer`}>
            {props.footer}
          </div>
        }
      </div>
    </Content>
  )
}

const LayoutSider = (props: LayoutsFace) => {
  // console.log(props.location.pathname)
  const [menu, setMenu] = useState<any[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>(['']);
  const [openKeys, setOpenKeys] = useState<string[]>([''])
  const history = useHistory();

  useEffect(() => {
    const s = getOpenKeys(props.router, props.location.pathname);
    setOpenKeys(s);
    setSelectedKeys([props.location.pathname]);
  }, [props.location?.pathname])

  useEffect(() => {
    const newData: any = []
    props.router.forEach((item: any) => {
      if (item.isMenu) {
        item.routes = item.routes.filter((_item: any) => _item.isMenu == true);
        if(item.routes.length > 1) {
          newData.push(item);
        } else if (item.routes.length === 1) {
          newData.push(item.routes[0])
        }
      }
    })
    console.log(111)
    setMenu(newData)
  }, [props.router])

  const onSelect = (item: any) => {
    history.push(item.key);
  }

  const onOpenChange = (openKeys: any) => {
    if (openKeys.length === 0) {
      setOpenKeys([]);
    } else {
      const key = openKeys.length > 1 ? [openKeys[1]] : [openKeys[0]];
      setOpenKeys(key);
    }
  }

  return (
    <Sider collapsed={props.collapsed}>
      <Menu theme="dark" mode="inline"
        selectedKeys={selectedKeys}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        onSelect={onSelect}>
        {
          menu.map(item => {
            if (item.routes && item.routes.length > 0) {
              return (
                <SubMenu key={item.path} title={item.title} icon={item.icon && <IconFont type={item.icon} />}>
                  {
                    item.routes.map((item2: any) => {
                      return (
                        <Menu.Item key={item2.path}>{item2.title}</Menu.Item>
                      )
                    })
                  }
                </SubMenu>
              )
            } else {
              return (
                <Menu.Item key={item.path} icon={item.icon && <IconFont type={item.icon} />}>
                  {item.title}
                </Menu.Item>
              )
            }
          })
        }
      </Menu>
    </Sider>
  )
}

const Layouts = (props: LayoutsFace) => {
  return (
    <Layout className={`layout-pages`}>
      <LayoutHeader {...props} />
      <Layout>
        <LayoutSider {...props} />
        <LayoutContent {...props} />
      </Layout>
    </Layout>
  )
}

export default Layouts;

function getOpenKeys(arr: any, path: string) {
  let str = '';
  arr.forEach((item: any) => {
    if (item.routes && item.routes.length > 0) {
      item.routes.forEach((item2: any) => {
        if (path === item2.path) {
          str = item.path;
        }
      });
    }
  })
  return [str];
}