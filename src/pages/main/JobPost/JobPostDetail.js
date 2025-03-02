import styled from "styled-components";
import font from "/Users/jiwon/Desktop/Capston/triplej-fe/src/styles/fonts.js";
import { ReactComponent as Office } from "/Users/jiwon/Desktop/Capston/triplej-fe/src/assets/icon/Office.svg";
import { ReactComponent as Alarm } from "/Users/jiwon/Desktop/Capston/triplej-fe/src/assets/icon/Alarm.svg";
import CorpLogo from "/Users/jiwon/Desktop/Capston/triplej-fe/src/assets/Kakao.svg";
import { ReactComponent as CorpImg } from "/Users/jiwon/Desktop/Capston/triplej-fe/src/assets/Kakao.svg";
import Tag from "../../../components/Tag";
import CustomScrap from "../../../components/CustomScrap";
import Button from "../../../components/Button";

const JobPostDetail = () => {
  return (
    <div>
      <Container>
        <Content>
          <TitleContainer>
            <div>
              <Corp>
                <Office />
                카카오스타일
              </Corp>
              <JobTitle>콘텐츠 로컬라이징 & 사업개발 매니저</JobTitle>
            </div>
            <Date>D-13</Date>
          </TitleContainer>
          <BoxContainer>
            <InfoBox>
              <div>
                <InfoWrapper>
                  <InfoType>근무 정보</InfoType>
                  <TagWrapper>
                    <Tag type="default" content="계약직" />
                    <Tag type="default" content="경기 판교" />
                    <Tag type="default" content="대면 근무" />
                  </TagWrapper>
                </InfoWrapper>
                <InfoWrapper>
                  <InfoType>자격 요건</InfoType>
                  <TagWrapper>
                    <Tag type="default" content="비자 D2, D4, D6" />
                  </TagWrapper>
                </InfoWrapper>
                <InfoWrapper>
                  <InfoType>우대 사항</InfoType>
                  <TagWrapper>
                    <Tag type="default" content="해외대 우대" />
                  </TagWrapper>
                </InfoWrapper>
                <InfoWrapper>
                  <InfoType>필요 언어</InfoType>
                  <TagWrapper>
                    <Tag type="default" content="영미권" />
                  </TagWrapper>
                </InfoWrapper>
              </div>
              <Divider />
              <div>
                <SubTitle>기업 소개</SubTitle>
                <CorpDetailContainer>
                  <CorpLeft>
                    <CorpImgContainer />
                    <div>
                      <CorpName>카카오스타일</CorpName>
                      <CorpType>패션 뷰티 라이프</CorpType>
                    </div>
                  </CorpLeft>
                  <Tag type="default" content="관심 기업 등록하기" />
                </CorpDetailContainer>
                <CorpText>
                  지그재그를 운영하는 크로키닷컴이 카카오스타일로 새로운 도약을
                  시작합니다. <br /> 모두가더 편하게 나만의 스타일을 찾을 수
                  있도록 일상의 모든 순간에 함께하겠습니다.
                </CorpText>
              </div>
              <Divider />
              <div>
                <SubTitle>상세 내용</SubTitle>
                <CorpText>
                  지그재그를 운영하는 크로키닷컴이 카카오스타일로 새로운 도약을
                  시작합니다. <br /> 모두가더 편하게 나만의 스타일을 찾을 수
                  있도록 일상의 모든 순간에 함께하겠습니다.지그재그를 운영하는
                  크로키닷컴이 카카오스타일로 새로운 도약을 시작합니다. <br />{" "}
                  모두가더 편하게 나만의 스타일을 찾을 수 있도록 일상의 모든
                  순간에 함께하겠습니다.지그재그를 운영하는 크로키닷컴이
                  카카오스타일로 새로운 도약을 시작합니다. <br /> 모두가더
                  편하게 나만의 스타일을 찾을 수 있도록 일상의 모든 순간에
                  함께하겠습니다.지그재그를 운영하는 크로키닷컴이 카카오스타일로
                  새로운 도약을 시작합니다. <br /> 모두가더 편하게 나만의
                  스타일을 찾을 수 있도록 일상의 모든 순간에
                  함께하겠습니다.지그재그를 운영하는 크로키닷컴이 카카오스타일로
                  새로운 도약을 시작합니다. <br /> 모두가더 편하게 나만의
                  스타일을 찾을 수 있도록 일상의 모든 순간에
                  함께하겠습니다.지그재그를 운영하는 크로키닷컴이 카카오스타일로
                  새로운 도약을 시작합니다. <br /> 모두가더 편하게 나만의
                  스타일을 찾을 수 있도록 일상의 모든 순간에 함께하겠습니다.
                </CorpText>
              </div>
            </InfoBox>
            <RightBox>
              <PossibilityBox>
                <PossibilityTitle>Sarah님을 Pick할 가능성</PossibilityTitle>
                <PossibilityText>
                  이 기업에서 Sarah님을 관심있어 할 확률이 높게 나타납니다.
                  지원서 작성을 통해 합격률을 더 높여볼 수 있어요.
                </PossibilityText>
              </PossibilityBox>
              <ButtonContainer>
                <Button type="outline" status="default" size="large">
                  스크랩하기
                </Button>
                <Button type="fill" status="default" size="large">
                  지원하기
                </Button>
              </ButtonContainer>
            </RightBox>
          </BoxContainer>
        </Content>
      </Container>
    </div>
  );
};
export default JobPostDetail;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Content = styled.div`
  width: 1100px;
  padding: 80px 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 24px;
  width: 700px;
`;

const Corp = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${(props) => props.theme.colors.text.normal};
  font-size: ${font.body3Title.fontSize};
  font-weight: ${font.body3Title.fontWeight};
  line-height: ${font.body3Title.lineHeight};
  letter-spacing: ${font.body3Title.letterSpacing};
`;

const JobTitle = styled.div`
  padding-top: 12px;
  color: ${(props) => props.theme.colors.text.normal};
  font-size: ${font.headline1.fontSize};
  font-weight: ${font.headline1.fontWeight};
  line-height: ${font.headline1.lineHeight};
  letter-spacing: ${font.headline1.letterSpacing};
`;

const Date = styled.div`
  display: flex;
  align-items: flex-end;
  padding-top: 12px;
  color: ${(props) => props.theme.colors.text.normal};
  font-size: ${font.headline4.fontSize};
  font-weight: ${font.headline4.fontWeight};
  line-height: ${font.headline4.lineHeight};
  letter-spacing: ${font.headline4.letterSpacing};
`;

const BoxContainer = styled.div`
  display: flex;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px;
  border-radius: 12px;
  background-color: ${(props) => props.theme.colors.background.white};
  width: 620px;
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  padding-bottom: 10px;
`;

const InfoType = styled.div`
  color: ${(props) => props.theme.colors.text.normal};
  font-size: ${font.body3Normal.fontSize};
  font-weight: ${font.body3Normal.fontWeight};
  line-height: ${font.body3Normal.lineHeight};
  letter-spacing: ${font.body3Normal.letterSpacing};
`;

const TagWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.colors.line.normal};
`;

const SubTitle = styled.div`
  padding-bottom: 12px;
  color: ${(props) => props.theme.colors.text.normal};
  font-size: ${font.headline4.fontSize};
  font-weight: ${font.headline4.fontWeight};
  line-height: ${font.headline4.lineHeight};
  letter-spacing: ${font.headline4.letterSpacing};
`;

const CorpDetailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 20px 8px 8px;
  margin-bottom: 12px;
  border: 1px solid ${(props) => props.theme.colors.line.normal};
  border-radius: 12px;
`;

const CorpImgContainer = styled.div`
  width: 90px;
  height: 60px;
  border-radius: 8px;
  background-image: url(${CorpLogo});
  background-size: stretch;
  background-repeat: no-repeat;
  background-position: center;
`;

const CorpLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const CorpName = styled.div`
  padding-bottom: 4px;
  color: ${(props) => props.theme.colors.text.normal};
  font-size: ${font.body3Title.fontSize};
  font-weight: ${font.body3Title.fontWeight};
  line-height: ${font.body3Title.lineHeight};
  letter-spacing: ${font.body3Title.letterSpacing};
`;

const CorpType = styled.div`
  color: ${(props) => props.theme.colors.text.disable};
  font-size: ${font.body3Normal.fontSize};
  font-weight: ${font.body3Normal.fontWeight};
  line-height: ${font.body3Normal.lineHeight};
  letter-spacing: ${font.body3Normal.letterSpacing};
`;

const CorpText = styled.div`
  color: ${(props) => props.theme.colors.text.normal};
  font-size: ${font.body3Normal.fontSize};
  font-weight: ${font.body3Normal.fontWeight};
  line-height: ${font.body3Normal.lineHeight};
  letter-spacing: ${font.body3Normal.letterSpacing};
`;

const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: 20px;
  gap: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const PossibilityBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 12px;
  background-color: ${(props) => props.theme.colors.background.white};
  width: 300px;
`;

const PossibilityText = styled.div`
  color: ${(props) => props.theme.colors.text.normal};
  font-size: ${font.body4Normal.fontSize};
  font-weight: ${font.body4Normal.fontWeight};
  line-height: ${font.body4Normal.lineHeight};
  letter-spacing: ${font.body4Normal.letterSpacing};
`;

const PossibilityTitle = styled.div`
  color: ${(props) => props.theme.colors.text.normal};
  font-size: ${font.headline4.fontSize};
  font-weight: ${font.headline4.fontWeight};
  line-height: ${font.headline4.lineHeight};
  letter-spacing: ${font.headline4.letterSpacing};
`;
