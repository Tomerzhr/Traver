import styled from "styled-components";
import PropTypes from "prop-types";
import TourCard from "./TourCard/TourCard";
import EmptyToursCard from "./EmptyToursCards";

const ToursContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  justify-items: center;
  gap: 20px;
  justify-content: center;
  padding-top: 50px;
`;

export default function Tours({ tours, onDelete }) {
  if (!tours) {
    return <EmptyToursCard />;
  }

  return (
    <ToursContainer>
      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} onDelete={onDelete} />
      ))}
    </ToursContainer>
  );
}

Tours.propTypes = {
  tours: PropTypes.array,
  onDelete: PropTypes.func,
};
