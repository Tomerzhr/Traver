import Input from "../../../Forms/Input";
import GlobalButton from "../../../components/GlobalButton";
import { useForm } from "react-hook-form";
import { schema } from "../../../Pages/LoginSchemaFields";
import useUsers from "../../hooks/useUsers";
import styled from "styled-components";

const FormContainer = styled.form`
  width: 80%;

  h2 {
    font-size: 2vh;
  }
`;

export default function ChangePassword() {
  const { handelPasswordUpdate } = useUsers();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = (data) => {
    handelPasswordUpdate(data);
    reset();
  };

  return (
    <FormContainer title="Login" onSubmit={handleSubmit(onSubmit)} onReset={reset}>
      <h2>CHANGE PASSWORD</h2>
      <Input
        inputType={"input"}
        title={"Current Password"}
        label="passwordCurrent"
        register={register}
        errors={errors}
        schema={schema.password}
        type="password"
      />
      <Input
        inputType={"input"}
        title={"New Password"}
        label="password"
        register={register}
        errors={errors}
        schema={schema.password}
        type="password"
      />
      <Input
        inputType={"input"}
        title={"Confirm Password"}
        label="passwordConfirm"
        register={register}
        errors={errors}
        schema={{ validate: (value) => value === password || "Passwords do not match" }}
        type="password"
      />
      <GlobalButton onClick={() => onSubmit}>Save Password</GlobalButton>
    </FormContainer>
  );
}
