import styled from "styled-components";
import font from "../../../styles/fonts.js";
import { ReactComponent as Office } from "../../../assets/icon/Office.svg";
import { ReactComponent as Alarm } from "../../../assets/icon/Alarm.svg";
import { ReactComponent as CorpImg } from "../../../assets/Kakao.svg";
import Tag from "../../../components/Tag";
import CustomScrap from "../../../components/CustomScrap";
import Button from "../../../components/Button";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const JobPostDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/apply", { state: { companyName: post.company.name } });
  };
  const { post } = location.state;
  return (
    <div>
      <Container>
        <Content>
          <TitleContainer>
            <div>
              <Corp>
                <Office />
                {post.company.name}
              </Corp>
              <JobTitle>{post.jobTitle}</JobTitle>
            </div>
            <Date>채용시 마감</Date>
          </TitleContainer>
          <BoxContainer>
            <InfoBox>
              <div>
                <InfoWrapper>
                  <InfoType>근무 정보</InfoType>
                  <TagWrapper>
                    {post.employments.map((lang, index) => (
                      <Tag key={index} type="default" content={lang} />
                    ))}
                  </TagWrapper>
                </InfoWrapper>
                <InfoWrapper>
                  <InfoType>자격 요건</InfoType>
                  <TagWrapper>
                    <Tag
                      type="default"
                      content={`비자 ${
                        post.visas && post.visas.length > 0
                          ? post.visas.join(" ")
                          : "없음"
                      }`}
                    />
                  </TagWrapper>
                </InfoWrapper>
                <InfoWrapper>
                  <InfoType>우대 사항</InfoType>
                  <TagWrapper>
                    <Tag
                      type="default"
                      content={post.preferences.slice(0, 1)}
                    />
                  </TagWrapper>
                </InfoWrapper>
                <InfoWrapper>
                  <InfoType>필요 언어</InfoType>
                  <TagWrapper>
                    <Tag type="default" content={post.languages.join(" ")} />
                  </TagWrapper>
                </InfoWrapper>
              </div>
              <Divider />
              <div>
                <SubTitle>기업 소개</SubTitle>
                <CorpDetailContainer>
                  <CorpLeft>
                    {post.company.imageUrl && (
                      <img
                        src={post.company.imageUrl}
                        alt={`${post.company.name} 로고`}
                        style={{
                          width: "90px",
                          height: "60px",
                          objectFit: "cover",
                        }}
                      />
                    )}
                    <div>
                      <CorpName>{post.company.name}</CorpName>
                      <CorpType>{post.company.tags.join(" · ")}</CorpType>
                    </div>
                  </CorpLeft>
                  <Tag type="default" content="관심 기업 등록하기" />
                </CorpDetailContainer>
                <CorpText>{post.company.info}</CorpText>
              </div>
              <Divider />
              <div>
                <SubTitle>상세 내용</SubTitle>
                <CorpText>{post.jobInfo}</CorpText>
              </div>
            </InfoBox>
            <RightBox>
              <PossibilityBox>
                <PossibilityTitle>
                  김이화님을 Pick할 가능성 91%
                </PossibilityTitle>
                <PossibilityText>
                  이 기업에서 김이화님을 관심있어 할 확률이 높게 나타납니다.
                  지원서 작성을 통해 합격률을 더 높여볼 수 있어요.
                </PossibilityText>
              </PossibilityBox>
              <ButtonContainer>
                <Button type="outline" status="default" size="large">
                  스크랩하기
                </Button>
                <Button
                  onClick={handleSubmit}
                  type="fill"
                  status="default"
                  size="large"
                >
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
