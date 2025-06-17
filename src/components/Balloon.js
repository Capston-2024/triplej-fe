import styled from "styled-components";
import font from "../styles/fonts.js";
import { ReactComponent as AIicon } from "../assets/icon/PickinAI.svg";

const Balloon = () => {
  return (
    <div>
      <BalloonBox>
        <AIicon />
        <Pickin>Pickin'</Pickin> <AI>AI</AI>로 첨삭을 요청받을 수 있어요
      </BalloonBox>
    </div>
  );
};

export default Balloon;

const BalloonBox = styled.div`
left: 15%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 85px;
  background: #ffffff;
  border: 1px solid ${(props) => props.theme.colors.line.dark};
  border-radius: 30px;
  padding: 10px 14px;
  width: 276px;
  color: ${(props) => props.theme.colors.text.neutral};
  font-size: ${font.body4Normal.fontSize};
  font-weight: ${font.body4Normal.fontWeight};
  line-height: ${font.body4Normal.lineHeight};
  letter-spacing: ${font.body4Normal.letterSpacing};
  box-shadow: 0px 4px 6px rgba(16, 24, 40, 0.1);
  z-index: 10;

  &::after {
    content: "";
    position: absolute;
    bottom: -16px;
    left: 33%;
    transform: translateX(-50%);
    border-width: 8px;
    border-style: solid;
    border-color: #ffffff transparent transparent transparent;
    width: 0;
    height: 0;
    filter: drop-shadow(0px 2px 4px rgba(16, 24, 40, 0.06));
  }
  }
`;

const Pickin = styled.div`
  padding-left: 8px;
  color: #03ffce;
  font-size: ${font.body4Title.fontSize};
  font-weight: ${font.body4Title.fontWeight};
  line-height: ${font.body4Title.lineHeight};
  letter-spacing: ${font.body4Title.letterSpacing};
`;

const AI = styled.div`
  padding-left: 2px;
  color: #0098ff;
  font-size: ${font.body4Title.fontSize};
  font-weight: ${font.body4Title.fontWeight};
  line-height: ${font.body4Title.lineHeight};
  letter-spacing: ${font.body4Title.letterSpacing};
`;
