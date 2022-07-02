import { Link, Outlet } from 'umi';
import styles from './index.less';

export default function Layout() {
  return (
    <div className='bg-black'>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
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
