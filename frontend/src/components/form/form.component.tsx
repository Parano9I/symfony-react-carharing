import {
  Children,
  FC,
  FormEventHandler,
  isValidElement,
  ReactNode
} from 'react';

interface FormProps {
  children: ReactNode[] | ReactNode;
  className?: string;
  onSubmit: (data: any) => void;
}

const Form: FC<FormProps> = ({ children, className = '', onSubmit }) => {
  const formFieldsName = Children?.map(children, (child) => {
    if (isValidElement(child)) {
      if (child.type !== 'button') {
        const name: string = child.props.name;
        return name;
      }
    }
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    const formFields = formFieldsName?.reduce((acc: any, name: string) => {
      return { ...acc, [name]: form[name].value };
    }, {});

    onSubmit(formFields);
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      {children}
    </form>
  );
};

export default Form;
