import { NavLink, useLocation } from 'umi';
import { NavMenus } from '@/utils/menus'
import styles from './index.less';

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        logo
      </div>
      <div className={styles.menus}>
        {NavMenus.map((item, index) => (
          <NavLink
            to={item.path || ''}
            key={index}
            className={pathname.includes(item.param || '') ? styles.active : ''}
          >{ item.name }</NavLink>
        ))}
        <a target="__blank" href="https://github.com/uiwjs/react-native-uiw/issues">
          问题反馈
        </a>
      </div>
    </header>
  )
}

export default Header;