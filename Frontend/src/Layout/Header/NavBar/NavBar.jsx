import CenterNavBar from "./CenterNavBar/CenterNavBar";
import RightNavBar from "./RightNavBar/RightNavBar";
import styled from "styled-components";
import Logo from "./Logo/Logo";
import { Box } from "@mui/material";

const NavBarContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f6f6f6;
  animation: NavAnim 1s ease 0s 1 normal forwards;

  @keyframes NavAnim {
    0% {
      opacity: 0;
      transform: translateY(-50px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default function NavBar() {
  return (
    <NavBarContainer sx={{ padding: { xs: "10px", md: "10px 50px" } }}>
      <Logo />
      <CenterNavBar />
      <RightNavBar />
    </NavBarContainer>
  );
}
