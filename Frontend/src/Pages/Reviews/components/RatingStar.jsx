import star from "../../../assets/icons/star.png";
import PropTypes from "prop-types";
import styled from "styled-components";

const RatingStarContainer = styled.div`
  display: flex;
  gap: 5px;
  margin: 10px 0;
  img {
    width: 15px;
  }
`;

export default function RatingStar({ rating }) {
  if (rating >= 1 && rating < 2) {
    return (
      <RatingStarContainer>
        <img src={star} alt="star icon" />
      </RatingStarContainer>
    );
  }
  if (rating >= 2 && rating < 3) {
    return (
      <RatingStarContainer>
        <img src={star} alt="star icon" />
        <img src={star} alt="star icon" />
      </RatingStarContainer>
    );
  }
  if (rating >= 3 && rating < 4) {
    return (
      <RatingStarContainer>
        <img src={star} alt="star icon" />
        <img src={star} alt="star icon" />
        <img src={star} alt="star icon" />
      </RatingStarContainer>
    );
  }
  if (rating >= 4 && rating < 5) {
    return (
      <RatingStarContainer>
        <img src={star} alt="star icon" />
        <img src={star} alt="star icon" />
        <img src={star} alt="star icon" />
        <img src={star} alt="star icon" />
      </RatingStarContainer>
    );
  }
  if (rating === 5) {
    return (
      <RatingStarContainer>
        <img src={star} alt="star icon" />
        <img src={star} alt="star icon" />
        <img src={star} alt="star icon" />
        <img src={star} alt="star icon" />
        <img src={star} alt="star icon" />
      </RatingStarContainer>
    );
  }
  return null;
}
RatingStar.propTypes = {
  rating: PropTypes.number.isRequired,
};
