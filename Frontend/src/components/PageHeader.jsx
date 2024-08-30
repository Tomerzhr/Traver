import PropTypes from "prop-types";
import styled from "styled-components";
import { StyleSheetManager } from "styled-components";

const PageHeaderContainer = styled.div`
  padding: ${({ padding }) => padding || "50px 20px 20px 20px"};
  text-align: ${({ textAlign }) => textAlign || "center"};
  .toursTypes {
    font-size: 0.6rem;
    font-weight: 300;
    color: #6c662c;
    padding: 2px 10px;
    background-color: #e7e3bf;
    border-radius: 5px;
  }
  h1 {
    font-size: 2rem;
    font-weight: 600;
    span {
      background-image: linear-gradient(
        to right,
        #6c662c,
        #77732f,
        #818132,
        #8a8f35,
        #939e39,
        #9ca941,
        #a5b548,
        #aec050,
        #bacb5d,
        #c7d56a
      );
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
  }
  p {
    color: #9b9b9b;
    font-size: 0.9rem;
    font-weight: 300;
    font-style: italic;
  }
  hr {
    margin: auto;
    width: 80%;
    border: 0.5px solid #c2bd90;
    margin-top: 10px;
  }
`;

export default function PageHeader({ topTitle, title, description, textAlign, padding, hr }) {
  return (
    <StyleSheetManager
      shouldForwardProp={(prop) =>
        !["topTitle", "title", "description", "textAlign", "hr"].includes(prop)
      }
    >
      <PageHeaderContainer textAlign={textAlign} padding={padding}>
        <span className="toursTypes">{topTitle}</span>
        <h1>
          <span>{title}</span>
        </h1>
        <p>{description}</p>
        {hr && <hr />}
      </PageHeaderContainer>
    </StyleSheetManager>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  topTitle: PropTypes.string,
  textAlign: PropTypes.string,
  hr: PropTypes.bool,
  padding: PropTypes.string,
};
