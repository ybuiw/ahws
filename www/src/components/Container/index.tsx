import { Outlet } from 'umi';
import { Fragment } from 'react';
import SubMenus, { MenuData } from '@/components/SubMenus';
import styles from './index.less'

interface ContainerProps {
  data?: MenuData[];
}

const Container = ({ data }: ContainerProps) => {
  return (
    <Fragment>
      {data && data.length > 0 && <SubMenus data={data} />}
      <div className={styles.content}>
        <Outlet />
      </div>
    </Fragment>
  )
}

export default Container;