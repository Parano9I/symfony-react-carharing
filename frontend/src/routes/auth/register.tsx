import { FC } from 'react';
import Container from '../../components/container/container.component';
import Header from '../../components/header/header.component';
import Input from '../../components/ui/input/input.component';
import { UserCreateRequestInterface } from '../../services/axios/user/interfaces';
import { createUser } from '../../services/axios/user/api';
import Form from '../../components/form/form.component';

interface RegisterPageProps {}

interface RegisterFormFields {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  password: string;
  confirm_password: string;
}

const Register: FC<RegisterPageProps> = ({}) => {
  const onSubmit = (formFields: RegisterFormFields) => {
    console.log(formFields);
  };

  return (
    <div className="h-screen bg-auth bg-contain bg-no-repeat">
      <Header />
      <main className="">
        <Container className="flex grow shrink flex-col pt-10">
          <div className="w-2/5 self-end bg-white p-4 rounded-xl shadow-2xl">
            <Form className="grid grid-cols-2 gap-2" onSubmit={onSubmit}>
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
            </Form>
          </div>
        </Container>
      </main>
    </div>
  );
};

export default Register;
