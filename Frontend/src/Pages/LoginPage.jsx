import Form from "../Forms/Form";
import Input from "../Forms/Input";
import { schema } from "./LoginSchemaFields";
import { UseUserProvider } from "../Users/providers/userProvider";
import useUsers from "../Users/hooks/useUsers";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import PageTitle from "../components/PageTitle";

export default function LoginPage() {
  const { user } = UseUserProvider();
  const { handelLogin } = useUsers();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    handelLogin(data);
    reset();
  };

  if (user) {
    return <Navigate to="/" />;
  } else {
    return (
      <div>
        <PageTitle
          margin={"50px 0"}
          topTitle="Go to your profile"
          title="Login"
          titlePartOne="Login to your account"
          subtitlePartOne="Please fill your email and password"
        />

        <Form
          title="Login"
          onSubmit={handleSubmit(onSubmit)}
          register={register}
          onReset={reset}
          onCancel={() => navigate("/")}
        >
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
            register={register}
            errors={errors}
            schema={schema.password}
            type="password"
          />
        </Form>
      </div>
    );
  }
}
