import Form from "../../Forms/Form";
import Input from "../../Forms/Input";
import { useForm } from "react-hook-form";
import { schema } from "./schemaField";
import { useNavigate } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import { useState } from "react";

export default function Contact() {
  const [successMessage, setSuccessMessage] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
    setSuccessMessage(true);
  };

  const navigate = useNavigate();
  const successMessageText =
    "Thank you for contacting us! We will get back to you as soon as possible.";

  return (
    <div>
      <PageTitle
        margin={"50px 0"}
        topTitle="Easy to talk with us"
        title="Contact Us"
        titlePartOne={"We would love to hear from you!"}
        subtitlePartOne={"We are here to answer any questions you may have."}
      />
      {successMessage ? (
        <h3>{successMessageText}</h3>
      ) : (
        <Form
          title="Contact Us"
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
            title="Email"
            label="email"
            register={register}
            errors={errors}
            schema={schema.email}
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
            title="Subject"
            label="subject"
            register={register}
            errors={errors}
            schema={schema.subject}
          />
          <Input
            inputType="textarea"
            title="Your Message"
            label="message"
            register={register}
            errors={errors}
            schema={schema.message}
          />
        </Form>
      )}
    </div>
  );
}
