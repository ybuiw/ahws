import { Menu } from 'antd';
import { useHistory } from 'react-router-dom';
import { SiderRouterProps } from './index';
const { SubMenu } = Menu;

interface MenusProps {
  MenuRoutes?: SiderRouterProps[];
}

const Menus = (props: MenusProps) => {
  const {
    MenuRoutes = []
  } = props;
  const history = useHistory();

  const onSelect = (item: any) => {
    history.push(item.key);
  }

  console.log('MenuRoutes', MenuRoutes)

  return (
    <Menu
      theme="dark"
      mode="inline"
      style={{ height: '100%' }}
      onSelect={onSelect}
    >
      {MenuRoutes.map((item: SiderRouterProps, index: number) => {
        if (item.routes) {
          return <SubMenu icon={item.icon || null} key={item.path || index} title={item.name}>
            {item.routes?.map((item2: any, index2: number) => {
              if (!item2.isHideMenu) {
                return <Menu.Item key={item2.path || index2}>{item2.name}</Menu.Item>
              }
            })}
          </SubMenu>
        } else {
          return <Menu.Item icon={item.icon || null} key={item.path || index}>{item.name}</Menu.Item>
        }
      })}
    </Menu>
  )
}

export default Menus;