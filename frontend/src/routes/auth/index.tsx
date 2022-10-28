import {
  BrowserRouterProps,
  createBrowserRouter,
  RouteObject
} from 'react-router-dom';
import Register from './register';
import Login from './login';

const authRoutes: RouteObject[] = [
  {
    path: '/auth',
    children: [
      {
        path: '/auth/register',
        element: <Register />
      },
      {
        path: '/auth/login',
        element: <Login />
      }
    ]
  }
];

export default authRoutes;
