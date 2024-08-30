import styled, { StyleSheetManager } from "styled-components";
import PropTypes from "prop-types";

const Button = styled.button`
  padding: 5px 15px;
  margin: ${(props) => props.margin || "0px 5px"};
  font-size: ${(props) => props.fontSize || "0.6rem"};
  font-weight: ${(props) => props.fontWeight || "400"};
  border: ${(props) => (props.border && "0.5px" + " solid " + props.border) || "#f3711b"};
  border-radius: 5px;
  color: ${(props) => props.color || "white"};
  background-color: ${(props) => props.backgroundColor || "#f3711b"};
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: ${(props) => props.hover};
    color: ${(props) => props.hover && "white"};
  }

  &:disabled {
    background-color: grey;
    cursor: not-allowed;
  }
`;

export default function GlobalButton({
  children,
  onClick,
  disable,
  color,
  backgroundColor,
  hover,
  border,
  fontWeight,
  fontSize,
  type,
  margin,
}) {
  return (
    <StyleSheetManager
      shouldForwardProp={(prop) =>
        ![
          "color",
          "backgroundColor",
          "border",
          "hover",
          "fontWeight",
          "fontSize",
          "margin",
        ].includes(prop)
      }
    >
      <Button
        onClick={onClick}
        disabled={disable}
        color={color}
        backgroundColor={backgroundColor}
        border={border}
        hover={hover}
        fontWeight={fontWeight}
        fontSize={fontSize}
        type={type}
        margin={margin}
      >
        {children}
      </Button>
    </StyleSheetManager>
  );
}

GlobalButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disable: PropTypes.bool,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  hover: PropTypes.string,
  border: PropTypes.string,
  fontWeight: PropTypes.string,
  fontSize: PropTypes.string,
  type: PropTypes.string,
  margin: PropTypes.string,
};
