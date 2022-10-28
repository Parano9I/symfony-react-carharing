import { FC } from 'react';
import Container from '../../components/container/container.component';
import Header from '../../components/header/header.component';
import Input from '../../components/ui/input/input.component';

interface LoginPageProps {}

const Login: FC<LoginPageProps> = ({}) => {
  return (
    <div className="h-screen bg-auth bg-contain bg-no-repeat">
      <Header />
      <main className="">
        <Container className="flex grow shrink flex-col pt-20">
          <div className="w-2/5 self-end bg-white p-4 rounded-xl shadow-2xl">
            <form
              action="src/routes/auth/login"
              className="grid grid-cols-2 gap-2"
            >
              <Input
                name="email"
                title="Email"
                required={true}
                error=""
                className="col-span-2"
              />
              <Input
                name="password"
                type="password"
                title="Password"
                required={true}
                error=""
                className="col-span-2"
              />
              <button
                type="submit"
                className="bg-orange-700 rounded-sm py-2 text-white hover:bg-orange-800"
              >
                Login
              </button>
            </form>
          </div>
        </Container>
      </main>
    </div>
  );
};

export default Login;
