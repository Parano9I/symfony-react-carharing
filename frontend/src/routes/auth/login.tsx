import { FC } from 'react';
import Container from '../../components/container/container.component';
import Header from '../../components/header/header.component';
import Input from '../../components/ui/input/input.component';
import { InputType } from '../../components/ui/input/types';
import Form from '../../components/form/form.component';

interface LoginPageProps {}

interface LoginFormFields {
  email: string;
  password: string;
}

const Login: FC<LoginPageProps> = ({}) => {
  const onSubmit = (formFields: LoginFormFields) => {
    console.log(formFields);
  };

  return (
    <div className="h-screen bg-auth bg-contain bg-no-repeat">
      <Header />
      <main className="">
        <Container className="flex grow shrink flex-col pt-20">
          <div className="w-2/5 self-end bg-white p-4 rounded-xl shadow-2xl">
            <Form className="grid grid-cols-2 gap-2" onSubmit={onSubmit}>
              <Input
                name="email"
                type={InputType.Email}
                title="Email"
                required={true}
                error=""
                className="col-span-2"
              />
              <Input
                name="password"
                type={InputType.Pass}
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
            </Form>
          </div>
        </Container>
      </main>
    </div>
  );
};

export default Login;
