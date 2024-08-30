import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";
import PropTypes from "prop-types";

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default function Spinner({ thickness = 2 }) {
  return (
    <SpinnerContainer>
      <CircularProgress thickness={thickness} sx={{ color: "#f3711b" }} />
    </SpinnerContainer>
  );
}

Spinner.propTypes = {
  thickness: PropTypes.number,
};
