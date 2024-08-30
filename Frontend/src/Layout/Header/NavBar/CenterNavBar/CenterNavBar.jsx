import NavLink from "../../../../components/NavLink";
import styled from "styled-components";
import ROUTS from "../../../../routes/routesModal";
import { UseUserProvider } from "../../../../Users/providers/userProvider";
import { Box } from "@mui/material";

const CenterNavBarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const LinksContainer = styled(Box)`
  align-items: center;
  justify-content: space-around;
  gap: 30px;
`;

export default function CenterNavBar() {
  const { user } = UseUserProvider();

  return (
    <CenterNavBarContainer>
      <LinksContainer sx={{ display: { xs: "none", md: "flex" } }}>
        <NavLink to="/">Home</NavLink>
        {user && user.role === "admin" && (
          <>
            <NavLink to={ROUTS.ADMIN}>Admin Panel</NavLink>
            <NavLink to={ROUTS.USERS}>Users</NavLink>
            <NavLink to={ROUTS.CREATE_TOUR}>New Tour</NavLink>
          </>
        )}
        {user && user.role === "guide" && <NavLink to={ROUTS.CREATE_TOUR}>New Tour</NavLink>}
        {user && user.role === "lead-guide" && (
          <>
            <NavLink to={ROUTS.GUIDES}>Guides</NavLink>
            <NavLink to={ROUTS.CREATE_TOUR}>New Tour</NavLink>
          </>
        )}
        <NavLink to={ROUTS.TOURS}>Tours</NavLink>
        <NavLink to={ROUTS.ABOUT}>About</NavLink>
        <NavLink to={ROUTS.CONTACT}>Contact</NavLink>
      </LinksContainer>
    </CenterNavBarContainer>
  );
}
