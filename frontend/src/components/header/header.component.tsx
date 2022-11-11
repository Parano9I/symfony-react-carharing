import { FC } from 'react';
import Container from '../container/container.component';
import { Link as RouterLink } from 'react-router-dom';
import { useAppSelector } from '../../hooks/reduxHooks';
import { UserInterface } from '../../interfaces/user';
import DropDown from '../dropDown/dropDown.component';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const user: UserInterface | null = useAppSelector((state) => state.user.user);

  const handleLogout = () => {};

  return (
    <header className="bg-slate-900 py-4 text-white">
      <Container>
        <div className="flex justify-between items-center">
          <RouterLink
            className="italic font-bold text-orange-700 text-2xl"
            to="/"
          >
            CarSharing
          </RouterLink>
          <div className="flex items-center">
            {user ? (
              <div className="">
                <RouterLink
                  to="/auth/register"
                  className="hover:text-orange-700 mr-2"
                >
                  Dashboard
                </RouterLink>
                <button
                  onClick={handleLogout}
                  className="hover:text-orange-700"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <RouterLink
                  to="/auth/register"
                  className="hover:text-orange-700"
                >
                  Register
                </RouterLink>
                /
                <RouterLink to="/auth/login" className="hover:text-orange-700">
                  Login
                </RouterLink>
              </>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
