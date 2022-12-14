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
    // const formData = new FormData();

    for (let i = 0; i < form.length; i++) {
      const field = form[i];

      if (
        field instanceof HTMLInputElement ||
        field instanceof HTMLSelectElement
      ) {
        const fieldName = field.name;
        let fieldValue;

        // if (field.type === 'file') {
        //   fieldValue = field.files;
        // } else {
        fieldValue = field.value;
        // }

        formFields[fieldName] = fieldValue;
        // formData.append(fieldName, fieldValue);
      }
    }

    // formData.append('destination', 'image');
    // formData.append('create_thumbnail', 'true');

    onSubmit(formFields);
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      {children}
    </form>
  );
};

export default Form;
