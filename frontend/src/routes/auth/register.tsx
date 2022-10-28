import { FC } from 'react';
import Container from '../../components/container/container.component';
import Header from '../../components/header/header.component';
import Input from '../../components/ui/input/input.component';

interface RegisterPageProps {}

const Register: FC<RegisterPageProps> = ({}) => {
  return (
    <div className="h-screen bg-auth bg-contain bg-no-repeat">
      <Header />
      <main className="">
        <Container className="flex grow shrink flex-col pt-10">
          <div className="w-2/5 self-end bg-white p-4 rounded-xl shadow-2xl">
            <form
              action="src/routes/auth/register"
              className="grid grid-cols-2 gap-2"
            >
              <Input
                name="first_name"
                title="First name"
                required={true}
                error=""
              />
              <Input
                name="last_name"
                title="Last name"
                required={true}
                error=""
              />
              <Input name="email" title="Email" required={true} error="" />
              <Input
                type="number"
                name="phone"
                title="Phone"
                required={true}
                error=""
              />
              <Input
                name="password"
                type="password"
                title="Password"
                required={true}
                error=""
                className="col-span-2"
              />
              <Input
                name="confirm_password"
                type="password"
                title="Confirm password"
                required={true}
                error=""
                className="col-span-2"
              />
              <button
                type="submit"
                className="bg-orange-700 rounded-sm py-2 text-white hover:bg-orange-800"
              >
                Register
              </button>
            </form>
          </div>
        </Container>
      </main>
    </div>
  );
};

export default Register;
