import { createBrowserRouter } from 'react-router-dom';
import authRoutes from './auth';
import Home from './home';
import dashboardRoutes from './dashboard';

const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  ...dashboardRoutes,
  ...authRoutes
]);

export default browserRouter;
