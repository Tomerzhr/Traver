import styled from "styled-components";
import PropTypes from "prop-types";

const ErrorContainer = styled.div``;

export default function Error({ errorMassage }) {
  return (
    <ErrorContainer>
      <h2>Oops...</h2>
      <p>Something went wrong: {errorMassage}</p>
    </ErrorContainer>
  );
}

Error.propTypes = {
  errorMassage: PropTypes.string,
};
