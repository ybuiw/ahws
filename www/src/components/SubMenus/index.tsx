import { NavLink } from 'umi';
import styles from './index.less';

export interface MenuData {
  name: string;
  path?: string;
  param?: string;
  divider?: boolean;
}

interface SubmenuProps {
  data: MenuData[];
}

const SubMenus = ({ data = [] }: SubmenuProps) => {
  return (
    <div className={styles.menus}>
      {data.map((data, key) => {
        if (data.divider) {
          return (
            <div key={key} className={styles.divider}>
              {data.name}
            </div>
          );
        }
        if (data.path) {
          return (
            <NavLink to={data.path} key={key} {...data}>
              {data.name}
            </NavLink>
          );
        }
        return <div key={key}>data</div>;
      })}
    </div>
  )
}

export default SubMenus;