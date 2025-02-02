import styled from "styled-components";
import { ReactComponent as Logo } from "/Users/jiwon/Desktop/Capston/triplej-fe/src/assets/img/PickinLogoDark.svg";
import { ReactComponent as Instagram } from "/Users/jiwon/Desktop/Capston/triplej-fe/src/assets/icon/Instagram.svg";
import { ReactComponent as Email } from "/Users/jiwon/Desktop/Capston/triplej-fe/src/assets/icon/Email.svg";
import font from "/Users/jiwon/Desktop/Capston/triplej-fe/src/styles/fonts.js";

const Footer = () => {
  return (
    <Wrapper>
      <FooterContainer>
        <RightCard>
          <div>
            <Logo />
            <LogoText>외국인 유학생을 위한 맞춤형 채용 공고 플랫폼</LogoText>
          </div>
          <SubText>
            pickin@gmail.com <br /> © 2024.pickin - All rights reserved.
          </SubText>
        </RightCard>
        <LeftCard>
          <Section>
            <Title>About</Title>
            <SubText>서비스 소개</SubText>
            <SubText>이용 약관</SubText>
            <SubText>개인정보처리약관</SubText>
          </Section>
          <Section>
            <Title>Help</Title>
            <SubText>문의하기</SubText>
            <SubText>FAQ</SubText>
          </Section>
          <Section>
            <Title>SNS</Title>
            <IconContainer>
              <Instagram />
              <Email />
            </IconContainer>
          </Section>
        </LeftCard>
      </FooterContainer>
    </Wrapper>
  );
};
export default Footer;

const Wrapper = styled.div`
  width: 1920px;
  height: 200px;
  background-color: ${(props) => props.theme.colors.background.white};
  display: flex;
  justify-content: center;
`;

const FooterContainer = styled.div`
  width: 1578px;
  display: flex;
  padding: 40px 20px;
  gap: 28px;
`;

const RightCard = styled.div`
  width: 723px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const LogoText = styled.div`
  color: ${(props) => props.theme.colors.text.normal};
  font-size: ${font.body4Normal.fontSize};
  font-weight: ${font.body4Normal.fontWeight};
  line-height: ${font.body4Normal.lineHeight};
  letter-spacing: ${font.body4Normal.letterSpacing};
  padding-top: 12px;
`;

const SubText = styled.div`
  color: ${(props) => props.theme.colors.text.assistive};
  font-size: ${font.body4Normal.fontSize};
  font-weight: ${font.body4Normal.fontWeight};
  line-height: ${font.body4Normal.lineHeight};
  letter-spacing: ${font.body4Normal.letterSpacing};
`;

const LeftCard = styled.div`
  width: 723px;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  color: ${(props) => props.theme.colors.text.normal};
  font-size: ${font.body4Title.fontSize};
  font-weight: ${font.body4Title.fontWeight};
  line-height: ${font.body4Title.lineHeight};
  letter-spacing: ${font.body4Title.letterSpacing};
  padding-bottom: 4px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const IconContainer = styled.div`
  display: flex;
  gap: 8px;
`;
