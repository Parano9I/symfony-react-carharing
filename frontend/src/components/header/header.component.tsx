import { FC } from 'react';
import Container from '../container/container.component';
import { Link as RouterLink } from 'react-router-dom';
import { removeTokens, removeUser } from '../../store/slices/user';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { UserInterface } from '../../interfaces/user';

interface HeaderProps {
  className?: string;
}

const Header: FC<HeaderProps> = ({ className }) => {
  const dispatch = useAppDispatch();
  const user: UserInterface | null = useAppSelector((state) => state.user.user);
  const handleLogout = () => {
    dispatch(removeUser());
    dispatch(removeTokens());
  };

  return (
    <header className={`${className} bg-slate-900 py-2 text-white`}>
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
                  to="/dashboard"
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
