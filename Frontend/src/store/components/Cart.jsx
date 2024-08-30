import Modal from "../../components/Modal";
import GlobalButton from "../../components/GlobalButton";
import { useCartProvider } from "../providers/CartProvider";
import { useProgressProvider } from "../providers/UserProgressProvider";
import styled from "styled-components";
import { Box } from "@mui/material";

const CartContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1.2rem;
  font-weight: 300;
  color: #000000;
  font-size: 1rem;

  h2 {
    font-size: 1rem;
    padding: 10px 5px;
  }
  p {
    font-size: 0.9rem;
  }

  span {
    font-weight: 500;
  }
  .title {
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    font-style: italic;
  }
  .buttons {
    display: flex;
    margin-top: 10px;
  }
  table {
    th {
      text-align: left;
      padding: 10px 5px;
    }
    td {
      font-size: 0.9rem;
      padding: 5px 5px;
    }
  }
`;

export default function Cart() {
  const { cartItems, addItemToCart, removeItemFromCart, clearCart } = useCartProvider();
  const { progress, hideCart, showCheckout } = useProgressProvider();

  if (cartItems.length === 0) {
    return (
      <Modal open={progress === "cart"} onClose={progress === "cart" ? hideCart : null}>
        <CartContainer>
          <p>Your Cart is Empty</p>
          {cartItems.length === 0 && <GlobalButton onClick={hideCart}>Close</GlobalButton>}
        </CartContainer>
      </Modal>
    );
  }

  if (cartItems.length > 0) {
    return (
      <Modal open={progress === "cart"} onClose={progress === "cart" ? hideCart : null}>
        <CartContainer>
          <table>
            <thead>
              <tr>
                <th>Tour Name</th>
                <th>Price</th>
                <th>Person</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td style={{ display: "flex", alignItems: "center" }}>
                    <GlobalButton fontWeight={"500"} onClick={() => addItemToCart(item)}>
                      +
                    </GlobalButton>
                    <span>{item.quantity}</span>
                    <GlobalButton fontWeight={"500"} onClick={() => removeItemFromCart(item.id)}>
                      -
                    </GlobalButton>
                  </td>
                  <td>${(item.quantity * item.price).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <Box>
            <h2>
              Total:
              <span>
                ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
              </span>
            </h2>
            <div className="buttons">
              <GlobalButton onClick={clearCart}>Clear Cart</GlobalButton>
              <GlobalButton onClick={showCheckout}>Checkout</GlobalButton>
              <GlobalButton onClick={hideCart}>Close</GlobalButton>
            </div>
          </Box>
        </CartContainer>
      </Modal>
    );
  }
}
