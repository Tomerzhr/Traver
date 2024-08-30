import DesktopMenu from "./DesktopMenu";
import UserLogged from "./UserLogged";
import UserNotLogged from "./UserNotLogged";
import { useState } from "react";
import { UseUserProvider } from "../../../../Users/providers/userProvider";
import useUsers from "../../../../Users/hooks/useUsers";
import { Box } from "@mui/material";

import MobileMenu from "./MobileMenu";

export default function RightNavBar() {
  const { user } = UseUserProvider();
  const [anchorEl, setAnchorEl] = useState(null);
  const { handelLogout } = useUsers();

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        {user && <UserLogged handleClick={handleClick} />}
        {!user && <UserNotLogged />}
      </Box>
      <DesktopMenu anchorEl={anchorEl} handleClose={handleClose} onClick={handelLogout} />
      <MobileMenu onLogout={handelLogout} />
    </div>
  );
}
