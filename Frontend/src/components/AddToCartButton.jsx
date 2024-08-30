import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import styled from "styled-components";
import PropTypes from "prop-types";

const AddToCartButtonContainer = styled.button`
  font-weight: 300;
  border-radius: 5px;
  color: #f3711b;
  border: 1px solid #f3711b;
  background-color: #feefe4;
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.5s;

  svg {
    font-size: small;
  }

  &:hover {
    background-color: #f3711b;
    color: white;
  }

  &:disabled {
    background-color: #dadada;
    border: 1px solid #dadada;
    color: #707070;
    cursor: not-allowed;
  }
`;

export default function AddToCartButton({ disabled, onClick }) {
  return (
    <AddToCartButtonContainer disabled={disabled} onClick={onClick}>
      <AddShoppingCartIcon />
    </AddToCartButtonContainer>
  );
}

AddToCartButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};
