import styled from "styled-components";
import font from "/Users/jiwon/Desktop/Capston/triplej-fe/src/styles/fonts.js";
import { ReactComponent as Calendar } from "/Users/jiwon/Desktop/Capston/triplej-fe/src/assets/icon/Calendar.svg";
import Tag from "./Tag";
import CustomScrap from "./CustomScrap";
import PickinScore from "./PickinScore";
import { useNavigate } from "react-router-dom";

const PostCardShort = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/jobpostdetail");
  };
  return (
    <Wrapper onClick={handleCardClick}>
      <TopContainer>
        <LogoContainer>
          <PickinScore />
          <CustomScrap type="scrap" />
        </LogoContainer>
        <div>
          <JobTitle>
            [계약직] 인도네시아 콘텐츠 로컬라이징 & 사업개발 매니저
          </JobTitle>
          <SubTitle>
            <Corp>카카오스타일</Corp>
            <Location>경기 판교 대면 근무</Location>
          </SubTitle>
        </div>
      </TopContainer>
      <BottomContainer>
        <TagContainer>
          <Tag type="default" content="계약직" />
          <Tag type="default" content="마케팅/광고/홍보" />
        </TagContainer>
        <IconWrapper>
          <Calendar />
          D-14
        </IconWrapper>
      </BottomContainer>
    </Wrapper>
  );
};
export default PostCardShort;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  width: 308px;
  height: 174px;
  border: 1px solid ${(props) => props.theme.colors.line.normal};
  border-radius: 12px;
  background-color: ${(props) => props.theme.colors.background.white};
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const JobTitle = styled.div`
  padding-bottom: 6px;
  color: ${(props) => props.theme.colors.text.normal};
  font-size: ${font.headline4.fontSize};
  font-weight: ${font.headline4.fontWeight};
  line-height: ${font.headline4.lineHeight};
  letter-spacing: ${font.headline4.letterSpacing};
`;

const SubTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
`;

const Corp = styled.div`
  color: ${(props) => props.theme.colors.text.normal};
  font-size: ${font.body4Title.fontSize};
  font-weight: ${font.body4Title.fontWeight};
  line-height: ${font.body4Title.lineHeight};
  letter-spacing: ${font.body4Title.letterSpacing};
`;

const Location = styled.div`
  color: ${(props) => props.theme.colors.text.disable};
  font-size: ${font.caption1.fontSize};
  font-weight: ${font.caption1.fontWeight};
  line-height: ${font.caption1.lineHeight};
  letter-spacing: ${font.caption1.letterSpacing};
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 4px;
  color: ${(props) => props.theme.colors.text.normal};
  font-size: ${font.body3Normal.fontSize};
  font-weight: ${font.body3Normal.fontWeight};
  line-height: ${font.body3Normal.lineHeight};
  letter-spacing: ${font.body3Normal.letterSpacing};
`;
