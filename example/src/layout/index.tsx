import { Fragment } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import SubMenus, { MenuData } from '../components/SubMenus';
import { docsMenus, componentsMenus } from '../routes/menus'
import styles from './index.module.less';

const Layout = () => {
  const { pathname } = useLocation();
  let data: MenuData[] = [];
  if (/^\/components/.test(pathname)) {
    data = componentsMenus;
  }
  if (/^\/docs/.test(pathname)) {
    data = docsMenus;
  }
  return (
    <Fragment>
      {data && data.length > 0 && <SubMenus data={data} />}
      <div className={styles.wrapper} style={{ paddingLeft: pathname === '/home' ? 0 : 300 }}>
        <Outlet />
      </div>
    </Fragment>
  )
}

export default Layout;