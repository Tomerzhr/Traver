import styled from "styled-components";
import about from "../../../../assets/images/about.png";
import PageTitle from "../../../../components/PageTitle";
import { Box } from "@mui/material";

const PartnersContainer = styled(Box)`
  display: flex;
  align-items: center;
  img {
    width: 400px;
  }

  .boxes {
    display: flex;
    gap: 10px;
    padding: 20px 0;

    .box {
      background-color: #f6f6f6;
      padding: 10px 15px;
      border-radius: 10px;
      text-align: center;

      h3 {
        font-size: 0.8rem;
        font-weight: 600;
      }

      p {
        font-size: 0.6rem;
        font-weight: 300;
      }
    }
  }
`;

export default function About() {
  return (
    <PartnersContainer
      component="section"
      sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}
    >
      <img src={about} alt="image collage" />
      <div className="context">
        <PageTitle
          topTitle={"About"}
          title={"We Recommend"}
          titlePartOne={"Beautiful Destinations"}
          titlePartTwo={"Every Month"}
          subtitlePartOne={
            "Lets chose your dream destination here we provide many destinations and we offer the"
          }
          subtitlePartTwo={"best destinations every month."}
        />
        <div className="boxes">
          <div className="box">
            <h3>2000+</h3>
            <p>Our Explorer</p>
          </div>
          <div className="box">
            <h3>100+</h3>
            <p>Destinations</p>
          </div>
          <div className="box">
            <h3>20+</h3>
            <p>Years Experience</p>
          </div>
        </div>
      </div>
    </PartnersContainer>
  );
}
