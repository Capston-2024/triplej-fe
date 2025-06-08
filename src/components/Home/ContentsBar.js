import styled from "styled-components";
import font from "../../styles/fonts.js";
import { ReactComponent as Arrow } from "../../assets/icon/Right.svg";
import FilterSmall from "./FilterSmall";
import { useNavigate } from "react-router-dom";

const ContentsBar = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <LeftText>
        <div>채용 공고 둘러보기</div>
        <FilterSmall />
      </LeftText>
      <RightText onClick={() => navigate("/jobpost")}>
        더보기
        <Arrow />
      </RightText>
    </Wrapper>
  );
};

export default ContentsBar;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 12px;
  width: 100%;
`;

const LeftText = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  color: ${(props) => props.theme.colors.text.normal};
  font-size: ${font.headline4.fontSize};
  font-weight: ${font.headline4.fontWeight};
  line-height: ${font.headline4.lineHeight};
  letter-spacing: ${font.headline4.letterSpacing};
`;

const RightText = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${(props) => props.theme.colors.text.normal};
  font-size: ${font.body3Normal.fontSize};
  font-weight: ${font.body3Normal.fontWeight};
  line-height: ${font.body3Normal.lineHeight};
  letter-spacing: ${font.body3Normal.letterSpacing};
`;
