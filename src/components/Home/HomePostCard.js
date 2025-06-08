import styled from "styled-components";
import font from "/Users/jiwon/Desktop/Capston/triplej-fe/src/styles/fonts.js";
import { ReactComponent as Calendar } from "/Users/jiwon/Desktop/Capston/triplej-fe/src/assets/icon/Calendar.svg";
import { ReactComponent as Office } from "/Users/jiwon/Desktop/Capston/triplej-fe/src/assets/icon/Office.svg";
import { ReactComponent as CorpImg } from "/Users/jiwon/Desktop/Capston/triplej-fe/src/assets/Kakao.svg";
import Tag from "../Tag";
import PickinScore from "../PickinScore";
import CustomScrap from "../CustomScrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const HomePostCard = ({ isLoggedIn, post }) => {
  // 로컬스토리지 연결
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (!isLoggedIn) return;

    const storedUserInfo = localStorage.getItem("user");

    if (storedUserInfo) {
      try {
        const parsedUserInfo = JSON.parse(storedUserInfo);
        setUserInfo(parsedUserInfo);
      } catch (error) {
        console.error("로컬스토리지 파싱 에러:", error);
        setUserInfo(null);
      }
    } else {
      console.warn("로컬스토리지에 사용자 정보가 없습니다.");
      setUserInfo(null);
    }
  }, [isLoggedIn]);

  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/jobpostdetail", { state: { post } });
  };
  return (
    <Wrapper onClick={handleCardClick}>
      <TopCard>
        <TopContainer>
          <LogoContainer>
            {isLoggedIn ? (
              <PickinScore score={post.user.pickinScore} />
            ) : (
              <NonUserPickinScore>
                로그인하여 Pickin 지수를 확인하세요!
              </NonUserPickinScore>
            )}
            <CustomScrap
              type={isLoggedIn && post.user.liked ? "scrap" : "line"}
            />
          </LogoContainer>
          <Content>
            <div>
              <JobTitle>{post.jobTitle}</JobTitle>
              <SubTitle>
                <Corp>
                  <Office />
                  {post.company.name}
                </Corp>
                <Location>{post.employments.join(" · ")}</Location>
              </SubTitle>
              <BottomContainer>
                <TagContainer>
                  <Tag type="default" content={post.works.join(" / ")} />
                  <Tag type="default" content={post.employments.join(" · ")} />
                </TagContainer>
                <IconWrapper>
                  <Calendar />
                  채용시 마감
                </IconWrapper>
              </BottomContainer>
            </div>
            {post.company.imageUrl && (
              <img
                src={post.company.imageUrl}
                alt={`${post.company.name} 로고`}
                style={{
                  width: "240px",
                  height: "100px",
                  objectFit: "cover",
                }}
              />
            )}
          </Content>
        </TopContainer>
      </TopCard>
      <BottomCard>
        <Section>
          <Text>사용 언어</Text>
          <TagWrapper>
            <Tag type="language" content="한국어" level="고급" />
            {post.languages.map((lang, index) => (
              <Tag key={index} type="language" content={lang} />
            ))}
          </TagWrapper>
        </Section>
        <Section>
          <Text>지원 가능 요건</Text>
          <TagWrapper>
            {/* <Tag type="visa-invalid" content="비자" level="D-2 D-4" />
            {post.visas.map((visa, index) => (
              <Tag key={index} type="visa" content="비자" level={visa} />
            ))} */}
            {post.visas &&
              (userInfo && userInfo.visa
                ? post.visas.includes(userInfo.visa.split(" (")[0])
                  ? post.visas.map((visa, index) => (
                      <Tag
                        key={index}
                        type="visa"
                        content="비자"
                        level={visa}
                      />
                    ))
                  : post.visas.map((visa, index) => (
                      <Tag
                        key={index}
                        type="visa-invalid"
                        content="비자"
                        level={visa}
                      />
                    ))
                : post.visas.map((visa, index) => (
                    <Tag key={index} type="visa" content="비자" level={visa} />
                  )))}
          </TagWrapper>
        </Section>
      </BottomCard>
    </Wrapper>
  );
};
export default HomePostCard;

const Wrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.background.white};
  border: 1px solid ${(props) => props.theme.colors.background.white};
  border-radius: 12px;
`;

const TopCard = styled.div`
  padding: 20px;
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

const JobTitle = styled.div`
  padding-bottom: 8px;
  color: ${(props) => props.theme.colors.text.normal};
  font-size: ${font.headline2.fontSize};
  font-weight: ${font.headline2.fontWeight};
  line-height: ${font.headline2.lineHeight};
  letter-spacing: ${font.headline2.letterSpacing};
`;

const SubTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
`;

const Corp = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${(props) => props.theme.colors.text.normal};
  font-size: ${font.body3Title.fontSize};
  font-weight: ${font.body3Title.fontWeight};
  line-height: ${font.body3Title.lineHeight};
  letter-spacing: ${font.body3Title.letterSpacing};
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
  padding-top: 16px;
  flex-direction: row;
  align-items: center;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const IconWrapper = styled.div`
  display: flex;
  padding-left: 12px;
  gap: 4px;
  color: ${(props) => props.theme.colors.text.normal};
  font-size: ${font.body3Normal.fontSize};
  font-weight: ${font.body3Normal.fontWeight};
  line-height: ${font.body3Normal.lineHeight};
  letter-spacing: ${font.body3Normal.letterSpacing};
`;

const BottomCard = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.background.light};
  border: 1px solid ${(props) => props.theme.colors.background.light};
  border-top: 1px solid ${(props) => props.theme.colors.line.normal};
  border-radius: 0 0 12px 12px;
`;

const Section = styled.div`
  padding: 20px;
  width: 50%;
  &:first-child {
    border-right: 1px solid ${(props) => props.theme.colors.line.normal};
  }
`;

const Text = styled.div`
  padding-bottom: 6px;
  color: ${(props) => props.theme.colors.text.assistive};
  font-size: ${font.body4Title.fontSize};
  font-weight: ${font.body4Title.fontWeight};
  line-height: ${font.body4Title.lineHeight};
  letter-spacing: ${font.body4Title.letterSpacing};
`;

const TagWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const NonUserPickinScore = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 10px;
  background-color: ${(props) => props.theme.colors.background.normal};
  border-radius: 100px;
  color: ${(props) => props.theme.colors.text.assistive};
  font-size: ${font.body4Title.fontSize};
  font-weight: ${font.body4Title.fontWeight};
  line-height: ${font.body4Title.lineHeight};
  letter-spacing: ${font.body4Title.letterSpacing};
  height: 28px;
`;
