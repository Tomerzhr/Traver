import { Box, IconButton } from "@mui/material";
import Menu from "../../../../assets/images/menu.png";
import PropTypes from "prop-types";

export default function MoreButtonMenu({ onClick }) {
  return (
    <Box sx={{ display: { xs: "flex", md: "none" } }}>
      <IconButton onClick={onClick} aria-label="menu">
        <img src={Menu} alt="" style={{ width: "25px" }} />
      </IconButton>
    </Box>
  );
}

MoreButtonMenu.propTypes = {
  onClick: PropTypes.func.isRequired,
};
