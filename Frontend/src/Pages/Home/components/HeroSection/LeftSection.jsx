import styled from "styled-components";
import GlobalButton from "../../../../components/GlobalButton";
import date from "../../../../assets/icons/calendar.png";
import location from "../../../../assets/icons/location.png";
import { Box } from "@mui/material";

const LeftSectionContainer = styled.div`
  padding: 20px 0;
  animation: RAnim 1s ease 0s 1 normal forwards;

  .context {
    .topTitle {
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 0.7rem;
      font-weight: 400;
      color: #f3711b;
      padding: 4px 0px;

      div {
        width: 15px;
        height: 2px;
        background-color: #f3711b;
      }
    }
    h1 {
      font-size: 2.5rem;
      font-weight: 900;
    }
    h5 {
      font-size: 2rem;
      font-weight: 400;
    }

    .subtitle {
      color: #b2b2b2;
      font-size: 0.9rem;
      font-weight: 300;
      margin-top: 10px;
      font-style: italic;
    }
  }
  @keyframes RAnim {
    0% {
      opacity: 0;
      transform: translateX(-150px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const SearchTour = styled(Box)`
  background-color: #f7f7f7;
  margin: 20px 0px;
  padding: 5px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #ecececff;
  border-radius: 15px;
  box-shadow: 0px 0px 10px 0px #ecececff;
  img {
    width: 25px;
    background-color: #fce8da;
    border-radius: 50%;
    padding: 5px;
    margin-right: 10px;
  }

  hr {
    border: 0.5px solid #e6e6e6;
    height: 40px;
    margin: 0 10px;
  }

  .location,
  .date {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 7px 20px;

    h4 {
      font-size: 0.7rem;
      font-weight: 500;
      margin: 0px;
    }

    p {
      font-size: 0.6rem;
      font-weight: 300;
      margin: 0px;
    }
  }
`;

export default function LeftSection() {
  return (
    <LeftSectionContainer>
      <div className="context">
        <div className="topTitle">
          Tours agency services <div></div>
        </div>
        <div>
          <h1>Discover The</h1>
          <h5>
            Best Destinations
            <br />
            In The World
          </h5>
        </div>

        <p className="subtitle">
          Start looking for your next tour from a wide choices of <br />
          world tours at a wide range of attractive prices
        </p>
      </div>

      <SearchTour sx={{ width: { xs: "90vw", md: "45vw" } }}>
        <div className="location">
          <img src={location} alt="location icon" />
          <div>
            <h4>Location</h4>
            <p>Where are you going?</p>
          </div>
        </div>

        <hr />

        <div className="date">
          <img src={date} alt="date icon" />
          <div>
            <h4>Select Date</h4>
            <p>03 August 2024</p>
          </div>
        </div>

        <GlobalButton color="white" backgroundColor="#f3711b">
          Get Started
        </GlobalButton>
      </SearchTour>
    </LeftSectionContainer>
  );
}
