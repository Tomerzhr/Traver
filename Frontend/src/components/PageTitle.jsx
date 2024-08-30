import styled, { StyleSheetManager } from "styled-components";
import PropTypes from "prop-types";

const PageTitleContainer = styled.div`
  margin: ${({ margin }) => margin || "0px"};
  .topTitle {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 0.7rem;
    font-weight: 400;
    color: #f3711b;
    padding: 4px 0px;

    div {
      width: 15px;
      height: 2px;
      background-color: #f3711b;
    }
  }
  h2 {
    font-size: 1.6rem;
    font-weight: 900;
    span {
      font-weight: 400;
    }
  }
  h5 {
    font-size: 1.6rem;
    font-weight: 400;
  }

  .subtitle {
    color: #9d9d9d;
    font-size: 0.7rem;
    font-weight: 300;
    margin-top: 10px;
    font-style: italic;
  }
`;

export default function PageTitle({
  topTitle,
  title,
  title2,
  titlePartOne,
  titlePartTwo,
  subtitlePartOne,
  subtitlePartTwo,
  margin,
}) {
  return (
    <StyleSheetManager shouldForwardProp={(prop) => !["margin"].includes(prop)}>
      <PageTitleContainer margin={margin}>
        <div className="topTitle">
          {topTitle} <div></div>
        </div>
        <div>
          <h2>
            {title}&nbsp;
            {title2 ? <span>{title2}</span> : ""}
          </h2>
          {titlePartOne ? (
            <h5>
              {titlePartOne}
              <br />
              {titlePartTwo ? titlePartTwo : ""}
            </h5>
          ) : (
            ""
          )}
        </div>
        {subtitlePartOne ? (
          <h6 className="subtitle">
            {subtitlePartOne} <br />
            {subtitlePartTwo}
          </h6>
        ) : (
          ""
        )}
      </PageTitleContainer>
    </StyleSheetManager>
  );
}

PageTitle.propTypes = {
  topTitle: PropTypes.string,
  title: PropTypes.string,
  title2: PropTypes.string,
  titlePartOne: PropTypes.string,
  titlePartTwo: PropTypes.string,
  subtitlePartOne: PropTypes.string,
  subtitlePartTwo: PropTypes.string,
  margin: PropTypes.string,
};
