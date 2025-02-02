import styled from "styled-components";
import { ReactComponent as Logo } from "/Users/jiwon/Desktop/Capston/triplej-fe/src/assets/img/PickinLogoDark.svg";
import { ReactComponent as Link } from "/Users/jiwon/Desktop/Capston/triplej-fe/src/assets/icon/Link.svg";
import font from "/Users/jiwon/Desktop/Capston/triplej-fe/src/styles/fonts.js";

const Header = () => {
  return (
    <Container>
      <HeaderContainer>
        <LogoContainer>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <TextContainer>
            <div>채용 공고</div>
            <div>커뮤니티</div>
          </TextContainer>
        </LogoContainer>
        <ButtonContainer>
          <LoginButton>로그인/회원가입</LoginButton>
          <CorpButton>
            기업 페이지
            <Link />
          </CorpButton>
        </ButtonContainer>
      </HeaderContainer>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 1920px;
  height: 56px;
  padding-top: 8px;
  background-color: ${(props) => props.theme.colors.background.white};
  display: flex;
  justify-content: center;
`;

const HeaderContainer = styled.div`
  width: 1578px;
  height: 40px;
  display: flex;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  width: 326px;
  height: 40px;
  gap: 48px;
  display: flex;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TextContainer = styled.div`
  width: 200px;
  display: flex;
  gap: 24px;
  align-items: center;
  div {
    font-size: ${font.headline5.fontSize};
    font-weight: ${font.headline5.fontWeight};
    line-height: ${font.headline5.lineHeight};
    letter-spacing: ${font.headline5.letterSpacing};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const LoginButton = styled.button`
  width: 200px;
  align-items: center;
  padding: 8px 12px;
  border: 1px solid ${(props) => props.theme.colors.line.normal};
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.background.white};
  color: ${(props) => props.theme.colors.primary.normal};
  font-size: ${font.body3Normal.fontSize};
  font-weight: ${font.body3Normal.fontWeight};
  line-height: ${font.body3Normal.lineHeight};
  letter-spacing: ${font.body3Normal.letterSpacing};
`;

const CorpButton = styled.button`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.background.normal};
  color: ${(props) => props.theme.colors.text.normal};
  font-size: ${font.body3Normal.fontSize};
  font-weight: ${font.body3Normal.fontWeight};
  line-height: ${font.body3Normal.lineHeight};
  letter-spacing: ${font.body3Normal.letterSpacing};
  svg {
    margin-left: 10px;
  }
`;
