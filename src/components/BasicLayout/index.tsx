import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import { RouteComponentProps } from 'react-router-dom';
import { IconProvider } from '@ant-design/icons';
import Menus from './Menu';
import './index.less';
const { Header, Footer, Sider, Content } = Layout;

export interface HeaderConfigProps {
  /** 标题 */
  title?: string;
  logo?: string;
}

export interface SiderConfigProps extends RouteComponentProps {

}


export interface SiderRouterProps {
  name?: string;
  path?: string;
  routes?: SiderRouterProps[];
  /** 是否在menu上隐藏标签 */
  isHideMenu?: boolean;
  redirect?: string;
  icon?: React.ReactNode;
  component?: any;
}

export interface LayoutProps {
  /** 顶部导航配置项 */
  headerConfig?: HeaderConfigProps;
  siderConfig?: SiderConfigProps;
  children?: React.ReactNode;
  route: SiderRouterProps;
}

const BasicLayoutPage = (props: LayoutProps) => {
  const {
    headerConfig = {},
    children,
    route
  } = props;

  const [menuRoutes, setMenuRoutes] = useState<SiderRouterProps[]>([]);
  useEffect(() => {
    if (route && route.routes && route.routes.length > 0) {
      const newMenu:SiderRouterProps[] = [];
      route.routes.forEach((item: SiderRouterProps) => {
        if (!item.isHideMenu) {
          if (!item.redirect) {
            newMenu.push(item);
          }
        }
      })
      setMenuRoutes(newMenu);
    }
  }, [route])

  return <Layout className="ahw-basic-layout">
    <Header className="ahw-basic-heaher">
      <a className="ahw-basic-log">
        <img style={{ height: 30 }} src={headerConfig.logo} alt="" />
        {headerConfig.title &&<span>{headerConfig.title }</span>}
      </a>
    </Header>
    <Layout>
      <Sider className="ahw-basic-sider">
        <Menus MenuRoutes={menuRoutes}  />
      </Sider>
      <Content>{children}</Content>
    </Layout>
    
  </Layout>
}

export default BasicLayoutPage;