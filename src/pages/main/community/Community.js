import styled from "styled-components";
import font from "../../../styles/fonts.js";
import Button from "../../../components/Button";

const Community = () => {
  const communityIntro = `
    <h2>🌍 Pickin’ 커뮤니티에 오신 걸 환영합니다!</h2>
    <p><strong>외국인 유학생의 한국 취업 여정, 혼자 걷지 마세요.</strong><br>
    이곳은 <strong>같은 목표를 가진 유학생들이 서로 도움을 주고받는 공간</strong>입니다.</p>

    <ul>
      <li>📌 <strong>취업 관련 질문</strong>이 있다면? 자유롭게 물어보세요.</li>
      <li>📢 <strong>채용 정보</strong>를 발견했다면? 함께 나눠요.</li>
      <li>🧑‍💻 <strong>자기소개서 피드백이나 면접 경험</strong>을 공유해 주세요.</li>
      <li>💬 <strong>같은 고민, 같은 도전</strong>을 나누며 힘을 얻을 수 있습니다.</li>
    </ul>

    <p>Pickin’은 기술로 취업을 돕는 것을 넘어서,<br>
    <strong>함께 성장하는 커뮤니티가 진짜 힘</strong>이라는 것을 믿습니다.<br>
    여러분의 이야기, 경험, 조언이 누군가에게 큰 도움이 될 수 있어요.</p>

    <p><strong>지금 바로 대화에 참여해보세요.<br>
    당신의 여정이 누군가의 등불이 됩니다.</strong></p>
`;
  return (
    <div>
      <Container>
        <Content>
          <TitleContainer>커뮤니티</TitleContainer>
          <BoxContainer>
            <LeftBox>
              <IntroBox dangerouslySetInnerHTML={{ __html: communityIntro }} />
            </LeftBox>
            <RightBox>
              <Button type="fill" status="default" size="large" onClick={() => alert("서비스 준비중입니다.")}>
                               글쓰기
              </Button>
            </RightBox>
          </BoxContainer>
        </Content>
      </Container>
    </div>
  );
};
export default Community;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Content = styled.div`
  width: 1100px;
  padding: 48px 20px;
`;

const TitleContainer = styled.div`
  padding-bottom: 12px;
  width: 100%;
  color: ${(props) => props.theme.colors.text.normal};
  font-size: ${font.headline3.fontSize};
  font-weight: ${font.headline3.fontWeight};
  line-height: ${font.headline3.lineHeight};
  letter-spacing: ${font.headline3.letterSpacing};
`;

const BoxContainer = styled.div`
  display: flex;
`;

const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px;
  border-radius: 12px;
  background-color: ${(props) => props.theme.colors.background.white};
  width: 620px;
`;

const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: 20px;
`;

const IntroBox = styled.div`
  background-color: ${(props) => props.theme.colors.background.white};
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.04);

  h2 {
    margin-bottom: 16px;
  }

  ul {
    margin: 12px 0;
    padding-left: 20px;
  }

  li {
    margin-bottom: 8px;
  }

  p {
    margin-bottom: 12px;
  }
`;
