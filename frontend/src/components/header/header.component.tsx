import { FC } from 'react';
import Container from '../container/container.component';
import { Link as RouterLink } from 'react-router-dom';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <header className="bg-slate-900 py-4 text-white">
      <Container>
        <div className="flex justify-between items-center">
          <RouterLink
            className="italic font-bold text-orange-700 text-2xl"
            to="/"
          >
            CarHaring
          </RouterLink>
          <div className="flex items-center">
            <RouterLink to="/auth/register" className="hover:text-orange-700">
              Register
            </RouterLink>
            /
            <RouterLink to="/auth/login" className="hover:text-orange-700">
              Login
            </RouterLink>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
