import { createBrowserRouter } from 'react-router';
import Home from '../views/Home';
import PostsPage from '../views/PostsPage';
import About from '../views/About';
import MainLayout from '../layouts/MainLayout/MainLayout';

export const routes = [
  {
    Component: MainLayout,
    children: [
      {
        path: '/',
        Component: Home,
        meta: {
          title: 'Головна',
        },
      },
      {
        path: '/posts',
        Component: PostsPage,
        meta: {
          title: 'Пости',
        },
      },
      {
        path: '/about',
        Component: About,
        meta: {
          title: 'Про додаток',
        },
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
