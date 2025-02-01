import styled from "styled-components";
import font from "/Users/jiwon/Desktop/Capston/triplej-fe/src/styles/fonts.js";

/*다음과 같이 사용*/
{
  /* <Tag type="language" content="한국어" level="고급" />
<Tag type="visa" content="비자" level="D-2 D-4" />
<Tag type="visa-invalid" content="비자" level="D-2 D-4" /> */
}

const Tag = ({ type = "default", content, level }) => {
  return (
    <Wrapper type={type}>
      <div>{content}</div>
      {type === "language" && <Level>{level}</Level>}
      {type === "visa" && <div>{level}</div>}
      {type === "visa-invalid" && <Invalid>{level}</Invalid>}
    </Wrapper>
  );
};

export default Tag;

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  padding: 6px 10px;
  gap: 6px;
  height: 22px;
  border-radius: 6px;
  color: ${(props) => props.theme.colors.text.normal};
  font-size: ${font.body3Normal.fontSize};
  font-weight: ${font.body3Normal.fontWeight};
  line-height: ${font.body3Normal.lineHeight};
  letter-spacing: ${font.body3Normal.letterSpacing};
  background-color: ${({ type, theme }) =>
    type === "visa-invalid" ? "#FFD9D7" : theme.colors.background.normal};
`;

const Level = styled.div`
  padding-left: 2px;
  color: ${(props) => props.theme.colors.text.assistive};
  font-size: ${font.body4Normal.fontSize};
  font-weight: ${font.body4Normal.fontWeight};
  line-height: ${font.body4Normal.lineHeight};
  letter-spacing: ${font.body4Normal.letterSpacing};
`;

const Invalid = styled.div`
  color: ${(props) => props.theme.colors.semantic.error};
`;
