import styled from "styled-components";
import font from "../styles/fonts.js";
import { useState } from "react";
import { ReactComponent as IconWhite } from "../assets/icon/PickinLogoWhite.svg";
import { ReactComponent as IconBlack } from "../assets/icon/PickinLogoBlack.svg";

const PickinScore = ({ score }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Wrapper
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? <IconBlack /> : <IconWhite />}
      {isHovered && <Text>Pickin 지수</Text>}
      <Score>{score}%</Score>
    </Wrapper>
  );
};
export default PickinScore;

const Wrapper = styled.div`
  display: flex;
  padding: 2px 10px 2px 2px;
  align-items: center;
  height: 28px;
  border-radius: 100px;
  background-color: ${(props) => props.theme.colors.background.blue};
`;

const Text = styled.div`
  padding-left: 8px;
  color: ${(props) => props.theme.colors.text.neutral};
  font-size: ${font.body4Normal.fontSize};
  font-weight: ${font.body4Normal.fontWeight};
  line-height: ${font.body4Normal.lineHeight};
  letter-spacing: ${font.body4Normal.letterSpacing};
`;

const Score = styled.div`
  padding-left: 8px;
  color: ${(props) => props.theme.colors.primary.normal};
  font-size: ${font.body4Title.fontSize};
  font-weight: ${font.body4Title.fontWeight};
  line-height: ${font.body4Title.lineHeight};
  letter-spacing: ${font.body4Title.letterSpacing};
`;
