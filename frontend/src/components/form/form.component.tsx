import {
  Children,
  FC,
  FormEvent,
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
  const handleSubmit: FormEventHandler = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const form: HTMLFormElement = event.currentTarget;
    let formFields: { [key: string]: string } = {};

    for (let i = 0; i < form.length; i++) {
      const field = form[i];

      if (
        field instanceof HTMLInputElement ||
        field instanceof HTMLSelectElement
      ) {
        const fieldName = field.name;
        const fieldValue = field.value;

        formFields[fieldName] = fieldValue;
      }
    }

    onSubmit(formFields);
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      {children}
    </form>
  );
};

export default Form;
