import styled from "styled-components";
import font from "/Users/jiwon/Desktop/Capston/triplej-fe/src/styles/fonts.js";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { ReactComponent as AIicon } from "/Users/jiwon/Desktop/Capston/triplej-fe/src/assets/icon/PickinAI.svg";

const RightFeedback = ({ data }) => {
  return (
    <Wrapper>
      <Title>
        <AIicon />
        AI 첨삭 결과
      </Title>
      <RightContainer>
        {data.map((item, index) => {
          const changedText = item.after;
          const beforeText = item.before;

          // 변경된 텍스트만 추출
          if (beforeText === changedText) {
            return <span key={index}>{changedText}</span>;
          }

          return (
            <span key={index}>
              {changedText.split(/(\s+)/).map((word, idx) => {
                const isHighlighted =
                  !beforeText.includes(word) && word.trim().length > 0;

                const tooltipId = `highlight-${index}-${idx}`;

                return isHighlighted ? (
                  <>
                    <Highlight key={idx} id={tooltipId}>
                      {word}
                    </Highlight>
                    <Tooltip
                      anchorId={tooltipId}
                      content={item.reason}
                      place="top"
                    />
                  </>
                ) : (
                  <span key={idx}>{word}</span>
                );
              })}
            </span>
          );
        })}
        <Tooltip effect="solid" place="top" />
      </RightContainer>
    </Wrapper>
  );
};

export default RightFeedback;

const Wrapper = styled.div`
  width: 430px;
  background: #ffffff;
  border-radius: 12px;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px;
  border-bottom: 1px solid ${(props) => props.theme.colors.line.normal};
  background: linear-gradient(90deg, #1ea4ff 0%, #00e7ba 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  font-size: ${font.headline5.fontSize};
  font-weight: ${font.headline5.fontWeight};
  line-height: ${font.headline5.lineHeight};
  letter-spacing: ${font.headline5.letterSpacing};
`;
const RightContainer = styled.div`
  padding: 24px 20px;
  background-color: white;
  border-radius: 12px;
  overflow-y: auto;
  white-space: pre-wrap;
  font-size: ${font.body3Normal.fontSize};
  font-weight: ${font.body3Normal.fontWeight};
  line-height: ${font.body3Normal.lineHeight};
  letter-spacing: ${font.body3Normal.letterSpacing};
  color: ${(props) => props.theme.colors.text.normal};
`;
const Highlight = styled.span`
  color: ${(props) => props.theme.colors.primary.normal};
  font-weight: bold;
  cursor: pointer;
  text-decoration: underline dotted;
`;
