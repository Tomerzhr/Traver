import { Menu, MenuItem } from "@mui/material";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const DesktopMenuContainer = styled(Menu)`
  .MuiMenu-paper {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    border-radius: 0.5rem;
  }

  .MuiMenuItem-root {
    font-size: 0.7rem;

    &:hover {
      background-color: #ffffff;
      color: #f3711b;
    }
  }
`;

export default function DesktopMenu({ anchorEl, handleClose, onClick }) {
  const navigate = useNavigate();
  const closeAndNavigate = (path) => {
    handleClose();
    navigate(path);
  };

  return (
    <DesktopMenuContainer
      id="desktop-menu"
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      sx={{ display: { xs: "none", md: "block" } }}
    >
      <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem onClick={() => closeAndNavigate("/user-profile")}>My account</MenuItem>
      <MenuItem
        onClose={handleClose}
        onClick={() => {
          onClick();
          closeAndNavigate("/");
        }}
      >
        Logout
      </MenuItem>
    </DesktopMenuContainer>
  );
}

DesktopMenu.propTypes = {
  anchorEl: PropTypes.object,
  handleClose: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};
