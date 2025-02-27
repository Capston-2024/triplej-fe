import styled from "styled-components";
import font from "/Users/jiwon/Desktop/Capston/triplej-fe/src/styles/fonts.js";
import Header from "../../../components/Header";
import Button from "../../../components/Button";

const Community = () => {
  return (
    <div>
      <Header />
      <Container>
        <Content>
          <TitleContainer>커뮤니티</TitleContainer>
          <BoxContainer>
            <LeftBox>
              커뮤니티 글<br /> 커뮤니티 글<br /> 커뮤니티 글<br /> 커뮤니티 글
              <br /> 커뮤니티 글<br /> 커뮤니티 글<br /> 커뮤니티 글<br />{" "}
              커뮤니티 글<br />{" "}
            </LeftBox>
            <RightBox>
              <Button type="fill" status="default" size="large">
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
