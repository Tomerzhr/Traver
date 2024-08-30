import styled from "styled-components";
import hero from "../../../../assets/images/hero.png";
import { Box } from "@mui/material";

const RightSectionContainer = styled(Box)`
  position: relative;
  padding: 20px 0;
  animation: myAnim 1s ease 0s 1 normal forwards;

  .parent {
    background-image: url(${hero});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 450px;
    height: 450px;

    .boxDestinations,
    .verified {
      position: absolute;
      border: 0.5px solid #dcdcdc;
      border-radius: 10px;
      padding: 5px;
      text-align: center;
      background-color: rgba(255, 255, 255, 0.4);
      -webkit-backdrop-filter: blur(5px);
      backdrop-filter: blur(5px);

      h2 {
        font-size: 0.6rem;
        font-weight: 700;
        color: #000000;
      }
      p {
        font-size: 0.6rem;
        font-weight: 300;
        color: #000000;
      }
    }
  }

  .verified {
    top: 20%;
    right: 30%;
    width: 50px;
  }

  .boxDestinations {
    top: 30%;
    left: 20px;
    width: 100px;
  }

  @keyframes myAnim {
    0% {
      opacity: 0;
      transform: translateX(150px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export default function RightSection() {
  return (
    <RightSectionContainer sx={{ width: { xs: "100", md: "40vw" } }}>
      <div className="parent">
        <div className="boxDestinations">
          <h2>100+ Destinations</h2>
          <p>More than 100 destinations to choose.</p>
        </div>
        <div className="verified">
          <h2>100%</h2>
          <p>Verified</p>
        </div>
      </div>
    </RightSectionContainer>
  );
}
