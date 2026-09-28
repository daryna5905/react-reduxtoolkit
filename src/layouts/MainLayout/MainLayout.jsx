import { Outlet } from 'react-router';
import styles from './MainLayout.module.css';
import MainMenu from '../../components/MainMenu';

function MainLayout() {
  return (
    <div>
      <MainMenu />
      <div className={styles.mainLayout}>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
