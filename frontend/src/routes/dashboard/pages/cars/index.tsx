import { RouteObject } from 'react-router-dom';
import CarsAllDashboard from './all.dashboard';
import Register from '../../../auth/register';
import Login from '../../../auth/login';
import CarCreateDashboard from './create.dashboard';

const carsSubPagesDashboard: RouteObject[] = [
  {
    path: '/dashboard/cars/all',
    element: <CarsAllDashboard />
  },
  {
    path: '/dashboard/cars/create',
    element: <CarCreateDashboard />
  }
];

export default carsSubPagesDashboard;
