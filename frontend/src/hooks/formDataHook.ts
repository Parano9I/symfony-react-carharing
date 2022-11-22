import { ChangeEvent, FormEvent, useState } from 'react';

const useFormData = <T extends { [index: string]: any }>(stateInit: T) => {
  const [data, setData] = useState<T>(stateInit);

  const setFormData = (newData: Record<string, string | boolean>): void => {
    setData({ ...data, ...newData });
  };

  const handleHookSubmit = (
    onSubmit: (formData: FormData) => void,
    event: FormEvent
  ): void => {
    event.preventDefault();
    const formData = new FormData();

    Object.keys(stateInit).forEach((fieldName) => {
      formData.append(fieldName.toString(), data[fieldName]);
    });

    onSubmit(formData);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    const name = event.target.name;

    setFormData({ [name]: value });
  };

  const handleInputChecked = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.checked;
    const name = event.target.name;

    setFormData({ [name]: value });
  };

  return {
    setFormData,
    handleHookSubmit,
    handleInputChange,
    handleInputChecked
  };
};

export default useFormData;
