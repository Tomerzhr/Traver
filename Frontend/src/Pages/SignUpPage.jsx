import Form from "../Forms/Form";
import Input from "../Forms/Input";
import { useForm } from "react-hook-form";
import { schema } from "./SignUpSchemaFields";
import useUsers from "../Users/hooks/useUsers";
import { UseUserProvider } from "../Users/providers/userProvider";
import { Navigate, useNavigate } from "react-router-dom";
import PageTitle from "../components/PageTitle";

export default function SignUpPage() {
  const { handelSignup } = useUsers();
  const { user } = UseUserProvider();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = (data) => {
    handelSignup(data);
    reset();
  };

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <PageTitle
        margin={"50px 0"}
        topTitle="Create an account"
        title="Sign Up"
        titlePartOne="Create an account to get started"
        subtitlePartOne="Please fill all the information below"
      />

      <Form
        title="Sign Up"
        onSubmit={handleSubmit(onSubmit)}
        register={register}
        onReset={reset}
        onCancel={() => navigate("/")}
      >
        <Input
          inputType="input"
          title="First Name"
          label="firstName"
          register={register}
          errors={errors}
          schema={schema.firstName}
        />
        <Input
          inputType="input"
          title="Last Name"
          label="lastName"
          register={register}
          errors={errors}
          schema={schema.lastName}
        />
        <Input
          inputType="input"
          title="Phone"
          label="phone"
          register={register}
          errors={errors}
          schema={schema.phone}
        />
        <Input
          inputType="input"
          title="Email"
          label="email"
          register={register}
          errors={errors}
          schema={schema.email}
        />
        <Input
          inputType="input"
          title="Password"
          label="password"
          type="password"
          register={register}
          errors={errors}
          schema={schema.password}
        />
        <Input
          inputType="input"
          title="Confirm Password"
          label="confirmPassword"
          type="password"
          register={register}
          errors={errors}
          schema={{
            validate: (value) => value === password || "The passwords do not match",
          }}
        />
      </Form>
    </div>
  );
}
