import Modal from "../../components/Modal";
import Input from "../../Forms/Input";
import { useCartProvider } from "../providers/CartProvider";
import { useForm } from "react-hook-form";
import { schema } from "./CheckOutSchemaField";
import { useState } from "react";
import GlobalButton from "../../components/GlobalButton";
import Form from "../../Forms/Form";
import { useProgressProvider } from "../providers/UserProgressProvider";
import styled from "styled-components";

const CheckOutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1.2rem;
  font-size: 0.9rem;
  font-weight: 300;
  color: #707070;
  h2 {
    color: black;
  }
`;

export default function CheckOut() {
  const [checkOutData, setCheckOutData] = useState(null);
  const { cartItems, clearCart } = useCartProvider();
  const { progress, hideCheckout } = useProgressProvider();
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setCheckOutData(data);
    console.log(data);
  };

  const handleCheckOut = () => {
    clearCart();
    hideCheckout();
    reset();
    setCheckOutData(null);
  };

  if (checkOutData) {
    return (
      <Modal open={progress === "checkout"} onClose={hideCheckout}>
        <CheckOutContainer>
          <h2>Success!</h2>
          <p>Thank you for your purchase</p>
          <GlobalButton onClick={handleCheckOut}>Okay</GlobalButton>
        </CheckOutContainer>
      </Modal>
    );
  }

  return (
    <Modal open={progress === "checkout"} onClose={progress === "checkout" ? hideCheckout : null}>
      <Form
        title="Check Out"
        onSubmit={handleSubmit(onSubmit)}
        register={register}
        onReset={reset}
        onCancel={hideCheckout}
      >
        <h2>Check Out</h2>
        <p style={{ fontStyle: "italic", marginBottom: "15px" }}>Total Amount: ${totalAmount}</p>
        <Input
          title="First Name"
          inputType="input"
          label="FirstName"
          register={register}
          errors={errors}
          schema={schema.firstName}
        />
        <Input
          title="Last Name"
          inputType="input"
          label="LastName"
          register={register}
          errors={errors}
          schema={schema.lastName}
        />
        <Input
          title="Phone"
          inputType="input"
          label="Phone"
          register={register}
          errors={errors}
          schema={schema.phone}
        />
        <Input
          title="Email"
          inputType="input"
          label="Email"
          register={register}
          errors={errors}
          schema={schema.email}
        />

        <Input
          title="Full address"
          inputType="input"
          label="fullAddress"
          register={register}
          errors={errors}
          schema={schema.address}
        />
        <Input
          title="Country"
          inputType="input"
          label="Country"
          register={register}
          errors={errors}
          schema={schema.country}
        />
      </Form>
    </Modal>
  );
}
