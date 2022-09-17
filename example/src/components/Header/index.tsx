import { NavLink } from 'react-router-dom';
import styles from './index.module.less';

const Header = () => {
  const navs = [
    { path: '/home', title: '首页' },
    { path: '/docs', title: '文档' },
    { path: '/components', title: '组件' }
  ]
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        logo
      </div>
      <div className={styles.menus}>
        {navs.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) => isActive ? styles.active : ''}
          >{item.title}</NavLink>
        ))}
        <a target="__blank" href="https://github.com/uiwjs/react-native-uiw/issues">
          问题反馈
        </a>
      </div>
    </header>
  )
}

export default Header;