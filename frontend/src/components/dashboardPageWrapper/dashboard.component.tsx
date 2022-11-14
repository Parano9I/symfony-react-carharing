import { FC, ReactNode } from 'react';
import Header from '../../components/header/header.component';
import { Link as RouterLink, RouterProvider } from 'react-router-dom';
import DropDown from '../../components/dropDown/dropDown.component';

interface DashboardProps {
  children: ReactNode | ReactNode[];
}

const Dashboard: FC<DashboardProps> = ({ children }) => {
  return (
    <div className="h-screen relative pt-12">
      <Header className="absolute inset-x-0 top-0" />
      <div className="flex flex-row h-full">
        <div className="bg-slate-900 w-1/6 p-2 pl-4 text-white">
          <ul>
            <li>
              <DropDown label="Cars">
                <nav className="pl-4 flex flex-col">
                  <RouterLink
                    to="/dashboard/cars/all"
                    className="hover:text-orange-700"
                  >
                    Show all cars
                  </RouterLink>
                  <RouterLink
                    to="/dashboard/cars/store"
                    className="hover:text-orange-700"
                  >
                    Add cars
                  </RouterLink>
                </nav>
              </DropDown>
            </li>
          </ul>
        </div>
        <div className="w-5/6 p-2 overflow-y-auto relative">{children}</div>
      </div>
    </div>
  );
};

export default Dashboard;
