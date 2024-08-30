import { Box } from "@mui/material";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import styled from "styled-components";

const HeroSectionContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ResponsiveStyle = {
  marginBottom: { xs: "50px", md: "0" },
  flexDirection: { xs: "column", md: "row" },
};

export default function HeroSection() {
  return (
    <HeroSectionContainer component={"section"} sx={ResponsiveStyle}>
      <LeftSection />
      <RightSection />
    </HeroSectionContainer>
  );
}
