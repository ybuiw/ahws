import { Outlet } from 'umi';
import { Fragment } from 'react';
import Header from '../components/Header';
import styles from './index.css';

export default function Layout() {
  return (
    <Fragment>
      <Header />
      <div className={styles.wrapper}>
        <Outlet />
      </div>
    </Fragment>
  );
}
