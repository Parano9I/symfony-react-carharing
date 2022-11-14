import { RouteObject } from 'react-router-dom';
import carsSubPagesDashboard from './pages/cars';
import DashboardComponent from '../../components/dashboardPageWrapper/dashboard.component';

const dashboardRoutes: RouteObject[] = [
  {
    path: '/dashboard',
    children: [
      {
        path: '/dashboard/cars',
        children: [...carsSubPagesDashboard]
      }
    ]
  }
];

export default dashboardRoutes;
