import { Link, Outlet } from 'umi';
import styles from './index.less';
import 'antd/dist/antd.less';

export default function Layout() {
  return (
    <div className='container mx-auto'>
      <div className={styles.navs}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/docs">Docs</Link>
          </li>
          <li>
            <a href="https://github.com/umijs/umi">Github</a>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
