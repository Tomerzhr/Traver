import GlobalButton from "../components/GlobalButton";
import styled from "styled-components";
import PropTypes from "prop-types";
import { memo } from "react";

const FormContainer = styled.div`
  margin: 60px 0;
  h2 {
    margin-bottom: 20px;
  }
`;

const ButtonsContainer = styled.div`
  width: 50%;
  padding-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column: 1 / -1;
  gap: 10px;
`;

const InputsContainer = styled.form`
  width: 50vw;
  margin-bottom: 10px;
  background-color: white;
  border-radius: 10px;
`;

function FormTemplate({ children, onSubmit, onReset, onCancel }) {
  return (
    <FormContainer>
      <InputsContainer onSubmit={onSubmit}>
        {children}
        <ButtonsContainer>
          <GlobalButton backgroundColor={"#f3711b"} color={"white"} borderColor={"#f3711b"}>
            Submit
          </GlobalButton>
          <GlobalButton
            type="button"
            backgroundColor={"#ffffff"}
            color={"#f3711b"}
            border="#f3711b"
            borderColor={"#f3711b"}
            hover={"#f3711b"}
            onClick={onCancel}
          >
            Cancel
          </GlobalButton>
          <GlobalButton
            onClick={() => onReset()}
            backgroundColor={"#ffffff"}
            color={"#f3711b"}
            border="#f3711b"
            borderColor={"#f3711b"}
            hover={"#f3711b"}
          >
            Reset
          </GlobalButton>
        </ButtonsContainer>
      </InputsContainer>
    </FormContainer>
  );
}

const Form = memo(FormTemplate);
export default Form;

FormTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};
