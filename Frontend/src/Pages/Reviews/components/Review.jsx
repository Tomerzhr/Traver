import styled from "styled-components";
import quote from "../../../assets/icons/quote.png";
import { Box } from "@mui/material";
import RatingStar from "./RatingStar";
import PropTypes from "prop-types";
import { UseUserProvider } from "../../../Users/providers/userProvider";
import GlobalButton from "../../../components/GlobalButton";

const ReviewContainer = styled(Box)`
  position: relative;
  background-color: #f4f4f4;
  border-radius: 15px;
  padding: 15px 20px;
  font-size: 0.8rem;
  line-height: 1.2rem;
  margin: 40px 0;

  .quote {
    position: absolute;
    top: -30px;
    right: 10px;
    width: 50px;
    height: 50px;
    opacity: 0.5;
  }

  .user {
    display: flex;
    align-items: center;
    gap: 10px;

    img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
    }
    h2 {
      font-size: 0.8rem;
      font-weight: 600;
    }
    p {
      font-size: 0.7rem;
      font-weight: 300;
    }
  }

  hr {
    border: 0.5px solid #e6e6e6;
    margin: 10px;
  }
  p {
    font-size: 0.7rem;
    font-weight: 300;
    color: #757575;
  }
`;

export default function Review({
  userPhoto,
  userName,
  userTitle = "Traveler",
  reviewText,
  rating,
  reviewId,
  onDelete,
}) {
  const { user } = UseUserProvider();

  return (
    <ReviewContainer className="review" sx={{ width: { xs: "100%", md: "50%" } }}>
      <img className="quote" src={quote} alt="quote icon" />
      <div className="user">
        <img src={userPhoto} alt="user profile picture" />
        <div>
          <h2>{userName}</h2>
          <p>{userTitle}</p>
        </div>
      </div>
      <hr />
      <p>{reviewText}</p>
      <RatingStar rating={rating} />
      {user && user.role === "admin" && (
        <GlobalButton onClick={() => onDelete(reviewId)} margin="10px 0">
          Delete
        </GlobalButton>
      )}
    </ReviewContainer>
  );
}

Review.propTypes = {
  userPhoto: PropTypes.string,
  userName: PropTypes.string.isRequired,
  userTitle: PropTypes.string,
  reviewText: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  reviewId: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
};
