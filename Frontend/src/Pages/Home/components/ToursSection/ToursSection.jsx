import styled from "styled-components";
import { useEffect } from "react";
import useTours from "../../../Tours/hooks/UseTours";
import ToursFeedback from "../../../Tours/components/ToursFeedback";
import PageTitle from "../../../../components/PageTitle";
import SearchBar from "./SearchBar";
import location from "../../../../assets/icons/location.png";
import date from "../../../../assets/icons/calendar.png";
import price from "../../../../assets/icons/price-tag.png";
import { Box } from "@mui/material";

const ToursSectionContainer = styled(Box)`
  background-color: #ffffff;
  padding: 20px 0;

  .top {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #f4f4f4;
    border-radius: 30px;
    padding: 20px 10px 50px 10px;

    div {
      justify-content: center;
    }
  }
`;

export default function ToursSection() {
  const {
    handelGetTours,
    handelDeleteTour,
    values: { tours, loading, error },
  } = useTours();

  const onDeleteTour = async (id) => {
    await handelDeleteTour(id);
    await handelGetTours();
  };

  useEffect(() => {
    handelGetTours();
  }, []);

  const currentTours = tours?.slice(0, 4);

  return (
    <ToursSectionContainer component="section">
      <div className="top">
        <PageTitle
          topTitle={"Top Destinations"}
          title={"Let's Explore"}
          title2={"Your Dream"}
          titlePartOne={"Destination Here!"}
          subtitlePartOne={
            "We have recommended destinations every week so you dont have to worry about your dream"
          }
          subtitlePartTwo={"destination being missed"}
        />
      </div>
      <SearchBar
        hr
        button
        xs="100%"
        md="60vw"
        margin="0px auto"
        top="-20px"
        optionOneTitle="Location"
        optionOneSubtitle="Filter by location"
        optionOneImg={location}
        optionTwoTitle="Date"
        optionTwoSubtitle="Filter by date"
        optionTwoImg={date}
        optionTreeTitle="Price"
        optionTreeSubtitle="Filter by price"
        optionTreeImg={price}
        buttonText="All Tours"
      />
      <ToursFeedback tours={currentTours} loading={loading} error={error} onDelete={onDeleteTour} />
    </ToursSectionContainer>
  );
}
