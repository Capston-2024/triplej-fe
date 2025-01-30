import styled from "styled-components";
import font from "/Users/jiwon/Desktop/Capston/triplej-fe/src/styles/fonts.js";

const MyPageNavigationBar = () => {
  return (
    <Container>
      <Section>프로필</Section>
      <Section>지원 현황</Section>
      <Section>저장한 공고</Section>
      <Section>로그아웃</Section>
    </Container>
  );
};
export default MyPageNavigationBar;

const Container = styled.div`
  width: 234px;
  height: 264px;
  padding: 8px;
  background-color: #ffffff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-right: 20px;
`;

const Section = styled.div`
  height: 28px;
  background-color: #f2f4f7;
  border-radius: 8px;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 20px;
  color: #1d2939;
  font-size: ${font.headline4.fontSize};
  font-weight: ${font.headline4.fontWeight};
  line-height: ${font.headline4.lineHeight};
  letter-spacing: ${font.headline4.letterSpacing};
`;
