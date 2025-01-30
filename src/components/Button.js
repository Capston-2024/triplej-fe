import styled from "styled-components";
import font from "/Users/jiwon/Desktop/Capston/triplej-fe/src/styles/fonts.js";

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
  width: 340px;
  height: 56px;
  background-color: ${({ type, status }) =>
    type === "outline"
      ? "#FFFFFF"
      : status === "default"
      ? "#0098FF"
      : "#98A2B3"};
  border: ${({ type }) => (type === "outline" ? "1px solid #E4E7EC" : "none")};
  border-radius: 12px;
  font-size: ${font.body3Title.fontSize};
  font-weight: ${font.body3Title.fontWeight};
  line-height: ${font.body3Title.lineHeight};
  letter-spacing: ${font.body3Title.letterSpacing};
  padding: 17px 90px;
  color: ${({ type }) => (type === "fill" ? "#ffffff" : "#667085")};
  margin-top: ${({ marginTop }) => marginTop || "0px"};
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;
