import PropTypes from "prop-types";
import styled from "styled-components";
import { ErrorMessage } from "@hookform/error-message";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: #e68c4c;
    font-size: 0.7rem;
    font-weight: 300;
    margin-bottom: 5px;
  }

  label {
    font-size: 0.8rem;
    font-weight: 300;
    color: #707070;
  }
  input,
  textarea,
  select {
    padding: 5px;
    border: 1px solid #e68c4c5c;
    border-radius: 5px;
    font-size: 0.8rem;
    font-weight: 300;
    margin: 5px 0;
    color: #707070;

    &:focus {
      outline: none;
      border: 1px solid #e68c4c;
    }
  }
`;

export default function Input({
  register,
  label,
  title,
  schema,
  errors,
  inputType,
  type = "text",
  ...rest
}) {
  return (
    <InputContainer>
      <label htmlFor={label}>{title}</label>
      {inputType === "textarea" && (
        <textarea name={label} id={label} rows={7} {...register(label, schema)} {...rest} />
      )}
      {inputType === "input" && (
        <input type={type} name={label} id={label} {...register(label, schema)} {...rest} />
      )}
      {inputType === "select" && (
        <select name={label} id={label} {...register(label, schema)}>
          <option value="">Select an option</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="difficult">Difficult</option>
        </select>
      )}
      {inputType === "checkbox" && (
        <input type="checkbox" name={label} id={label} {...register(label, schema)} {...rest} />
      )}
      {inputType === "number" && (
        <input
          type="number"
          name={label}
          id={label}
          min={0}
          {...register(label, schema)}
          {...rest}
        />
      )}
      {inputType === "date" && (
        <input type="date" name={label} id={label} {...register(label, schema)} {...rest} />
      )}
      {inputType === "file" && (
        <input type="file" name={label} id={label} {...register(label, schema)} {...rest} />
      )}

      {errors && <ErrorMessage errors={errors} name={label} as="p" />}
    </InputContainer>
  );
}

Input.propTypes = {
  register: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  schema: PropTypes.object,
  errors: PropTypes.object,
  inputType: PropTypes.string.isRequired,
  type: PropTypes.string,
};
