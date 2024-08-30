import styled from "styled-components";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

const BoxContainer = styled(Box)`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: 160px;
  min-height: 130px;
  background-color: #ffffff;
  padding: 10px 15px;
  border-radius: 15px;
  transition: 0.3s;

  img {
    width: 30px;
    background-color: #fce8da;
    border-radius: 20%;
    padding: 5px;
    margin: 5px 0;
  }
  h3 {
    font-size: 0.8rem;
    font-weight: 600;
  }

  p {
    font-size: 0.6rem;
    font-weight: 300;
  }

  &:hover {
    box-shadow: 0px 0px 10px 0px #ecececff;
  }
`;

export default function Boxes({ img, alt, title, description }) {
  return (
    <BoxContainer>
      <img src={img} alt={alt} />
      <h3>{title}</h3>
      <p>{description}</p>
    </BoxContainer>
  );
}

Boxes.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
