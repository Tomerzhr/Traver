import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import MoreButtonMenu from "./MoreButtonMenu";
import { useState } from "react";
import styled from "styled-components";
import MenuLink from "./MenuLink";
import { UseUserProvider } from "../../../../Users/providers/userProvider";
import ROUTS from "../../../../routes/routesModal";
import GlobalButton from "../../../../components/GlobalButton";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import ShoppingCartIcon from "../../../../assets/images/shopping-cart.png";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { useCartProvider } from "../../../../store/providers/CartProvider";
import { useProgressProvider } from "../../../../store/providers/UserProgressProvider";

const BoxContainer = styled(Box)`
  width: 250px;
  height: 100%;
  background-color: #f4f4f4;
  padding-top: 10%;
`;

const ButtonContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 50%;
  margin: 10px;
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

export default function MobileMenu({ onLogout }) {
  const [open, setOpen] = useState(false);
  const { user } = UseUserProvider();
  const navigate = useNavigate();
  const { totalItems } = useCartProvider();
  const { showCart } = useProgressProvider();

  const toggleDrawer = (mode) => () => {
    setOpen(mode);
  };

  const DrawerList = (
    <BoxContainer role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to={ROUTS.TOURS}>Tours</MenuLink>
        <MenuLink to={ROUTS.ABOUT}>About</MenuLink>
        <MenuLink to={ROUTS.CONTACT}>Contact</MenuLink>
        {user && (
          <>
            <MenuLink to={ROUTS.USER_PROFILE}>Profile</MenuLink>
          </>
        )}
      </List>
      <Divider />
      <List>
        {user && (
          <ButtonContainer>
            <GlobalButton onClick={onLogout}>Logout</GlobalButton>
          </ButtonContainer>
        )}
        {!user && (
          <ButtonContainer>
            <GlobalButton
              color="#f3711b"
              backgroundColor="#f4f4f4"
              border="#f3711b"
              onClick={() => navigate(ROUTS.LOGIN)}
            >
              Login
            </GlobalButton>
            <GlobalButton onClick={() => navigate(ROUTS.SIGNUP)}>Sign Up</GlobalButton>
          </ButtonContainer>
        )}
      </List>
    </BoxContainer>
  );

  return (
    <Box sx={{ display: { xs: "flex", alignItems: "center", md: "none" } }}>
      <IconButton aria-label="cart" onClick={showCart}>
        <StyledBadge
          badgeContent={totalItems}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <img src={ShoppingCartIcon} alt="shopping cart" style={{ width: "20px" }} />
        </StyledBadge>
      </IconButton>

      <MoreButtonMenu onClick={toggleDrawer(true)} />

      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Box>
  );
}

MobileMenu.propTypes = {
  onLogout: PropTypes.func.isRequired,
};
