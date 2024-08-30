import styled from "styled-components";
import GlobalButton from "../../../../components/GlobalButton";
import PropTypes from "prop-types";
import AddToCartButton from "../../../../components/AddToCartButton";
import { UseUserProvider } from "../../../../Users/providers/userProvider";
import { useCartProvider } from "../../../../store/providers/CartProvider";
import DeleteTourModal from "../DeleteTourModal";
import { useState } from "react";
import ROUTS from "../../../../routes/routesModal";
import { useNavigate } from "react-router-dom";

const TourFooterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 300;
  padding: 10px;

  span {
    font-weight: 600;
  }
`;

export default function TourFooter({ tour, onDelete }) {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const { user } = UseUserProvider();
  const { addItemToCart } = useCartProvider();
  const navigate = useNavigate();

  const handelModel = (term) => {
    if (term === "open") {
      setIsModelOpen(true);
    } else {
      setIsModelOpen(false);
    }
  };

  const handelDelete = () => {
    onDelete(tour.id);
    handelModel("close");
  };

  while (!user) {
    return (
      <TourFooterContainer>
        <GlobalButton
          onClick={() => navigate(`${ROUTS.TOUR_DETAILS}/${tour.id}`)}
          backgroundColor="#f3711b"
          color="#ffffff"
          fontWeight="400"
          fontSize="0.6rem"
        >
          Details
        </GlobalButton>
        <AddToCartButton disabled />
      </TourFooterContainer>
    );
  }

  while (user && user.role === "user") {
    return (
      <TourFooterContainer>
        <GlobalButton
          onClick={() => navigate(`${ROUTS.TOUR_DETAILS}/${tour.id}`)}
          backgroundColor="#f3711b"
          color="#ffffff"
          fontWeight="400"
          fontSize="0.6rem"
        >
          Details
        </GlobalButton>
        <AddToCartButton onClick={() => addItemToCart(tour)} />
      </TourFooterContainer>
    );
  }

  while (user && user.role === "admin") {
    return (
      <>
        <TourFooterContainer>
          <GlobalButton
            onClick={() => navigate(`${ROUTS.TOUR_DETAILS}/${tour.id}`)}
            backgroundColor="#f3711b"
            color="#ffffff"
            fontWeight="400"
            fontSize="0.6rem"
          >
            Details
          </GlobalButton>
          <AddToCartButton onClick={() => addItemToCart(tour)} />
          <GlobalButton
            onClick={() => handelModel("open")}
            backgroundColor="#f3711b"
            color="#ffffff"
            fontWeight="400"
            fontSize="0.6rem"
          >
            Delete
          </GlobalButton>
          <GlobalButton
            onClick={() => navigate(`${ROUTS.EDIT_TOUR}/${tour.id}`)}
            backgroundColor="#f3711b"
            color="#ffffff"
            fontWeight="400"
            fontSize="0.6rem"
          >
            Edit
          </GlobalButton>
        </TourFooterContainer>
        <DeleteTourModal
          isModalOpen={isModelOpen}
          onClose={() => handelModel("close")}
          handelDelete={handelDelete}
        />
      </>
    );
  }
}

TourFooter.propTypes = {
  tour: PropTypes.object.isRequired,
  onDelete: PropTypes.func,
};
