import { NavLink } from 'react-router';

import styles from './MainMenu.module.css';
import { routes } from '@/router/router';

function MainMenu() {
  const menuItems = routes[0].children;
  return (
    <nav className={styles.mainMenu}>
      <span className={styles.logo}>Posts App</span>
      <ul className={styles.menuItemSection}>
        {menuItems.map((route, index) => (
          <li key={index}>
            <NavLink to={route.path} className={styles.menuItem}>
              {route.meta.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MainMenu;
