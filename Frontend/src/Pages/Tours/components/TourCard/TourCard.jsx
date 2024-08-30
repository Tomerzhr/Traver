import TourHeader from "./TourHeader";
import TourBody from "./TourBody";
import TourFooter from "./TourFooter";
import styled from "styled-components";
import PropTypes from "prop-types";

const TourCardContainer = styled.div`
  position: relative;
  width: 210px;
  border-radius: 15px;
  padding: 5px;
  border: 1px solid #eaeaea;
  background-color: white;
  overflow: hidden;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.068);
`;

export default function TourCard({ tour, onDelete }) {
  return (
    <TourCardContainer>
      <TourHeader tour={tour} />
      <TourBody tour={tour} />
      <TourFooter tour={tour} onDelete={onDelete} />
    </TourCardContainer>
  );
}

TourCard.propTypes = {
  tour: PropTypes.object.isRequired,
  onDelete: PropTypes.func,
};
