import { useForm } from "react-hook-form";

const useForms = () => {
  const { register, reset, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return { register, handleSubmit, reset, errors, onSubmit };
};

export default useForms;
