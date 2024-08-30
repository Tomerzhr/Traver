import styled from "styled-components";
import LogoImage from "../../../../assets/icons/takeoff-the-plane.png";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import PropTypes from "prop-types";

const LogoContainer = styled(Box)`
  display: flex;
  align-items: center;
  text-align: center;
  cursor: pointer;
  gap: 5px;

  div {
    background-color: #f3711b;
    border-radius: 50%;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
    }
  }

  h3 {
    font-size: 1rem;
    font-weight: 600;
  }
`;

export default function Logo({ width = "30px", height = "30px" }) {
  const navigate = useNavigate();
  const responsive = {
    width: width,
    height: height,
  };

  return (
    <a onClick={() => navigate("/")}>
      <LogoContainer>
        <Box sx={responsive}>
          <img src={LogoImage} alt="Logo" />
        </Box>
        <h3>Traver</h3>
      </LogoContainer>
    </a>
  );
}

Logo.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};
