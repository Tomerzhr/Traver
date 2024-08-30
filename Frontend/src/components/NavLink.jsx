import PropTypes from "prop-types";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const LinkContainer = styled.div`
  a {
    text-decoration: none;
    cursor: pointer;
    :hover {
      transform: translateY(-2px);
      color: #f3711b;
    }
  }
  & h5 {
    color: black;
    text-decoration: none;
    font-size: 0.7rem;
    font-weight: 500;
    transition: all 0.3s ease-in-out;
  }
`;

export default function NavLink({ children, to }) {
  const navigate = useNavigate();
  return (
    <LinkContainer>
      <a
        onClick={(e) => {
          e.preventDefault();
          navigate(to);
        }}
      >
        <h5>{children}</h5>
      </a>
    </LinkContainer>
  );
}

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};
