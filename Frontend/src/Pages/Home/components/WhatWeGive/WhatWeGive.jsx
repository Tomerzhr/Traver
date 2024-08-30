import PageTitle from "../../../../components/PageTitle";
import styled from "styled-components";
import Boxes from "./components/Boxes";
import choise from "../../../../assets/icons/arrows.png";
import guide from "../../../../assets/icons/travel.png";
import booking from "../../../../assets/icons/appointment.png";
import { Box } from "@mui/material";

const WhatWeGiveContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 20vw;

  .boxes {
    display: flex;
    gap: 30px;
  }
`;

export default function WhatWeGive() {
  return (
    <WhatWeGiveContainer component="section" sx={{ flexDirection: { xs: "column", md: "row" } }}>
      <PageTitle
        topTitle="What We Give"
        title="Best Features"
        titlePartOne="For You"
        subtitlePartOne="We provide the best services for you"
        subtitlePartTwo="to make your journey memorable"
      />
      <Box className="boxes" sx={{ gap: { xs: "10vw", md: "40vw" } }}>
        <Boxes
          img={choise}
          alt="icon"
          title="Best Destinations"
          description="We provide several destinations for you to choose from"
        />
        <Boxes
          img={guide}
          alt="icon"
          title="Best Tour Guide"
          description="We provide professional tour guides to accompany you during your journey"
        />
        <Boxes
          img={booking}
          alt="icon"
          title="Easy Booking"
          description="We will also help you to book your desired destination easily"
        />
      </Box>
    </WhatWeGiveContainer>
  );
}
