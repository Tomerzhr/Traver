import Modal from "../../../components/Modal";
import GlobalButton from "../../../components/GlobalButton";
import styled from "styled-components";
import PropTypes from "prop-types";

const DeleteContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1.2rem;
  font-size: 0.9rem;
  font-weight: 300;
  color: #000000;
  padding: 20px;
  background-color: #f7f7f7;
  border-top: 1px solid #e0e0e0;
`;

export default function DeleteTourModal({ isModalOpen, onClose, handelDelete }) {
  return (
    <Modal open={isModalOpen} onClose={onClose}>
      <DeleteContainer>
        <h3>Delete Tour</h3>
        <p>Are you sure you want to delete this tour?</p>
        <div className="buttons">
          <GlobalButton onClick={onClose}>Cancel</GlobalButton>
          <GlobalButton onClick={handelDelete}>Delete</GlobalButton>
        </div>
      </DeleteContainer>
    </Modal>
  );
}

DeleteTourModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  handelDelete: PropTypes.func.isRequired,
};
