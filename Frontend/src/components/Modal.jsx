import PropTypes from "prop-types";
import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const DialogContainer = styled.dialog`
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 20px;
  transform: translate(-50%, -50%);
  z-index: 1000;
  background-color: white;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.068);
`;

export default function Modal({ children, open, onClose }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <DialogContainer ref={dialog} onClose={onClose}>
      {children}
    </DialogContainer>,
    document.getElementById("modal")
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
};
