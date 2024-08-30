import styled from "styled-components";
import image from "../../../../assets/images/reviews.png";
import { Box } from "@mui/material";

const RightSectionContainer = styled(Box)`
  width: 50%;
  img {
    width: 35vw;
  }
`;

export default function RightSection() {
  return (
    <RightSectionContainer sx={{ img: { width: { xs: "65vw", md: "35vw" } } }}>
      <img src={image} alt="sea with boat image" />
    </RightSectionContainer>
  );
}
