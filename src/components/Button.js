import styled from "styled-components";
import font from "../styles/fonts.js";

const Button = ({
  children,
  type = "outline",
  status = "default",
  size = "large",
  marginTop,
  ...props
}) => {
  return (
    <ButtonStyle
      type={type}
      status={status}
      size={size}
      marginTop={marginTop}
      {...props}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;

const ButtonStyle = styled.button`
  padding: ${({ size }) =>
    size === "small" ? "8px 12px" : size === "ai" ? "17px 30px" : "17px 90px"};
  margin-top: ${({ marginTop }) => marginTop || "0px"};
  width: ${({ size }) =>
    size === "small" ? "auto" : size === "ai" ? "170px" : "340px"};
  height: ${({ size }) =>
    size === "small" || size === "ai" ? "56px" : "56px"};
  background-color: ${({ type, status }) =>
    type === "outline"
      ? "#FFFFFF"
      : status === "default"
      ? "#0098FF"
      : "#98A2B3"};
  border: ${({ type }) => (type === "outline" ? "1px solid #E4E7EC" : "none")};
  border-radius: ${({ size }) => (size === "small" ? "8px" : "12px")};
  color: ${({ size, type }) =>
    size === "ai" ? "#1D2939" : type === "fill" ? "#ffffff" : "#667085"};
  font-size: ${font.body3Title.fontSize};
  font-weight: ${font.body3Title.fontWeight};
  line-height: ${font.body3Title.lineHeight};
  letter-spacing: ${font.body3Title.letterSpacing};
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;
