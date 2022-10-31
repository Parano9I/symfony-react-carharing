import { createBrowserRouter } from 'react-router-dom';
import authRoutes from './auth';
import Home from './home';

const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  ...authRoutes
]);

export default browserRouter;
