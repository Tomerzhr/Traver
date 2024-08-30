import Input from "../../../Forms/Input";
import GlobalButton from "../../../components/GlobalButton";
import { useForm } from "react-hook-form";
import { schema } from "../../../Pages/SignUpSchemaFields";
import useUsers from "../../hooks/useUsers";
import styled from "styled-components";

const FormContainer = styled.form`
  width: 80%;

  h2 {
    font-size: 2vh;
  }
`;

export default function AccountSettings() {
  const { handelUpdateUser } = useUsers();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const normalizeData = (data) => {
      const { firstName, lastName, email } = data;
      return {
        name: {
          first: firstName,
          last: lastName,
        },
        email,
      };
    };
    handelUpdateUser(normalizeData(data));
    reset();
  };

  return (
    <FormContainer title="Login" onSubmit={handleSubmit(onSubmit)} onReset={reset}>
      <h2>YOUR ACCOUNT SETTINGS</h2>
      <Input
        inputType={"input"}
        title="First Name"
        label="firstName"
        register={register}
        errors={errors}
        schema={schema.firstName}
      />
      <Input
        inputType={"input"}
        title=" Last Name"
        label="lastName"
        register={register}
        errors={errors}
        schema={schema.lastName}
      />
      <Input
        inputType={"input"}
        title="Email"
        label="email"
        register={register}
        errors={errors}
        schema={schema.email}
      />
      <GlobalButton onClick={() => onSubmit}>Save Settings</GlobalButton>
    </FormContainer>
  );
}
