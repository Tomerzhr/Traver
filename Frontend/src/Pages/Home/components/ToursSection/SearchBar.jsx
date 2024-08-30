import { Box } from "@mui/material";
import styled from "styled-components";
import GlobalButton from "../../../../components/GlobalButton";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import ROUTS from "../../../../routes/routesModal";

const SearchBarContainer = styled(Box)`
  position: relative;
  background-color: #f7f7f7;
  margin: 20px 0px;
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  justify-content: space-around;
  border: 1px solid #ecececff;
  border-radius: 15px;
  box-shadow: 0px 0px 10px 0px #ecececff;

  a {
    text-decoration: none;
    color: black;
    cursor: pointer;
  }
  img {
    width: 25px;
    background-color: #fce8da;
    border-radius: 50%;
    padding: 5px;
    margin-right: 10px;
  }

  hr {
    border: 0.5px solid #e6e6e6;
    height: 40px;
  }

  .optionOne,
  .optionTwo,
  .optionThree,
  .optionFour {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 7px 5px;

    h4 {
      font-size: 0.7rem;
      font-weight: 500;
      margin: 0px;
    }

    p {
      font-size: 0.6rem;
      font-weight: 300;
      margin: 0px;
    }
  }
`;

export default function SearchBar({
  xs,
  md,
  margin,
  top,
  optionOneTitle,
  optionOneSubtitle,
  optionOneImg,
  optionTwoTitle,
  optionTwoSubtitle,
  optionTwoImg,
  optionTreeTitle,
  optionTreeSubtitle,
  optionTreeImg,
  buttonText,
  optionOneLink,
  optionTwoLink,
  optionTreeLink,
  optionFourTitle,
  optionFourSubtitle,
  optionFourImg,
  optionFourLink,
  button,
  buttonLink,
  hr,
}) {
  const responsive = {
    width: { xs: xs, md: md },
    margin: margin,
    top: top,
  };

  const navigate = useNavigate();

  return (
    <SearchBarContainer sx={responsive}>
      <a className="optionOne" onClick={optionOneLink}>
        <img src={optionOneImg} alt="location icon" />
        <div>
          <h4>{optionOneTitle}</h4>
          <p>{optionOneSubtitle}</p>
        </div>
      </a>
      {hr ? <hr /> : null}

      <a className="optionTwo" onClick={optionTwoLink}>
        <img src={optionTwoImg} alt="date icon" />
        <div>
          <h4>{optionTwoTitle}</h4>
          <p>{optionTwoSubtitle}</p>
        </div>
      </a>

      {optionTreeTitle ? (
        <>
          {hr ? <hr /> : null}
          <a className="optionThree" onClick={optionTreeLink}>
            <img src={optionTreeImg} alt="date icon" />
            <div>
              <h4>{optionTreeTitle}</h4>
              <p>{optionTreeSubtitle}</p>
            </div>
          </a>
        </>
      ) : null}

      {optionFourTitle ? (
        <>
          {hr ? <hr /> : null}
          <a className="optionFour" onClick={optionFourLink}>
            <img src={optionFourImg} alt="date icon" />
            <div>
              <h4>{optionFourTitle}</h4>
              <p>{optionFourSubtitle}</p>
            </div>
          </a>
        </>
      ) : null}
      {button ? (
        <GlobalButton
          margin="10px 0px"
          color="white"
          backgroundColor="#f3711b"
          onClick={buttonLink ? buttonLink : () => navigate(ROUTS.TOURS)}
        >
          {buttonText}
        </GlobalButton>
      ) : null}
    </SearchBarContainer>
  );
}

SearchBar.propTypes = {
  xs: PropTypes.string,
  md: PropTypes.string,
  margin: PropTypes.string,
  top: PropTypes.string,
  optionOneTitle: PropTypes.string,
  optionOneSubtitle: PropTypes.string,
  optionOneImg: PropTypes.string,
  optionTwoTitle: PropTypes.string,
  optionTwoSubtitle: PropTypes.string,
  optionTwoImg: PropTypes.string,
  optionTreeTitle: PropTypes.string,
  optionTreeSubtitle: PropTypes.string,
  optionTreeImg: PropTypes.string,
  buttonText: PropTypes.string,
  optionOneLink: PropTypes.func,
  optionTwoLink: PropTypes.func,
  optionTreeLink: PropTypes.func,
  optionFourTitle: PropTypes.string,
  optionFourSubtitle: PropTypes.string,
  optionFourImg: PropTypes.string,
  optionFourLink: PropTypes.func,
  button: PropTypes.bool,
  buttonLink: PropTypes.func,
  hr: PropTypes.bool,
};
