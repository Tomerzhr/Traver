import { Tooltip, IconButton } from "@mui/material";
import ShoppingCartIcon from "../../../../assets/images/shopping-cart.png";
import User from "../../../../assets/images/people.png";
import Badge from "@mui/material/Badge";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useCartProvider } from "../../../../store/providers/CartProvider";
import { useProgressProvider } from "../../../../store/providers/UserProgressProvider";

const UserLoggedContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const StyledBadge = styled(Badge)`
  .MuiBadge-badge {
    right: 0;
    top: 4px;
    border: 1px solid #f2efdc;
    background: #f3711b;
    color: #f2efdc;
  }
`;

export default function UserLogged({ handleClick }) {
  const { totalItems } = useCartProvider();
  const { showCart } = useProgressProvider();

  return (
    <UserLoggedContainer>
      <Tooltip title="Cart">
        <IconButton aria-label="cart" onClick={showCart}>
          <StyledBadge
            badgeContent={totalItems}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <img src={ShoppingCartIcon} alt="shopping cart" style={{ width: "20px" }} />
          </StyledBadge>
        </IconButton>
      </Tooltip>

      <Tooltip title="Profile">
        <IconButton aria-label="Profile" onClick={handleClick}>
          <img src={User} alt="user panel" style={{ width: "20px" }} />
        </IconButton>
      </Tooltip>
    </UserLoggedContainer>
  );
}

UserLogged.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
