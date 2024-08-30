import styled from "styled-components";
import PropTypes from "prop-types";
import star from "../../../../assets/icons/star.png";

const TourHeaderContainer = styled.div`
  position: relative;
  height: 160px;

  .rating {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: rgba(255, 255, 255, 0.4);
    border: 0.5px solid #d3d3d3;
    color: #525252;
    padding: 5px;
    border-radius: 20%;
    font-size: 0.6rem;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);

    img {
      width: 8px;
      margin-right: 2px;
    }
  }

  img {
    object-fit: cover;
    border-radius: 15px;
    height: 100%;
    width: 100%;
  }
`;

export default function TourHeader({ tour }) {
  const { ratingsAverage } = tour;

  return (
    <TourHeaderContainer>
      <div className="rating">
        <img src={star} alt="star icon" />
        {ratingsAverage}
      </div>
      <img src={tour.imageCover} alt={"tour picture"} />
    </TourHeaderContainer>
  );
}

TourHeader.propTypes = {
  tour: PropTypes.object.isRequired,
};
