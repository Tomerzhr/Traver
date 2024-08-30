import PropTypes from "prop-types";
import styled from "styled-components";

const MainContainer = styled.main`
  min-height: 70vh;
  padding: 0 50px;
`;

export default function Main({ children }) {
  return <MainContainer>{children}</MainContainer>;
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};
