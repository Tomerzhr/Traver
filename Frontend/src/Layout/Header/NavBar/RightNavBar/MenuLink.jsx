import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const MenuLinkContainer = styled.div`
  a {
    text-decoration: none;
    cursor: pointer;
    :hover {
      transform: translateX(6px);
      color: #6b6a4c;
    }
    h3 {
      color: black;
      padding-left: 20px;
      margin: 15px 0;
      text-decoration: none;
      font-size: 1.1rem;
      font-weight: 300;
      transition: all 0.3s ease-in-out;
    }
  }
`;

export default function MenuLink({ children, to }) {
  const navigate = useNavigate();
  return (
    <MenuLinkContainer>
      <a onClick={() => navigate(to)}>
        <h3>{children}</h3>
      </a>
    </MenuLinkContainer>
  );
}

MenuLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};
