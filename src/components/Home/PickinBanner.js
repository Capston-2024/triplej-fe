import styled from "styled-components";
import font from "../../styles/fonts.js";
import { ReactComponent as Logo } from "../../assets/img/PickinLogoDark.svg";
import { useNavigate } from "react-router-dom";

const PickinBanner = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div>
        <SubText>외국인 유학생을 위한 맞춤형 채용 공고</SubText>
        <Text>
          <Logo />
          에서 찾아보세요
        </Text>
      </div>
      <Button onClick={() => navigate("/join")}>회원 가입하러 가기</Button>
    </Wrapper>
  );
};

export default PickinBanner;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
  margin-bottom: 60px;
  height: 64px;
  padding: 28px 40px;
  background-color: ${(props) => props.theme.colors.background.white};
  border-radius: 8px;
`;

const SubText = styled.div`
  padding-bottom: 6px;
  color: ${(props) => props.theme.colors.text.normal};
  font-size: ${font.headline5.fontSize};
  font-weight: ${font.headline5.fontWeight};
  line-height: ${font.headline5.lineHeight};
  letter-spacing: ${font.headline5.letterSpacing};
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${(props) => props.theme.colors.text.normal};
  font-size: ${font.headline2.fontSize};
  font-weight: ${font.headline2.fontWeight};
  line-height: ${font.headline2.lineHeight};
  letter-spacing: ${font.headline2.letterSpacing};
`;

const Button = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  height: 48px;
  background-color: ${(props) => props.theme.colors.background.normal};
  color: ${(props) => props.theme.colors.text.normal};
  font-size: ${font.body3Normal.fontSize};
  font-weight: ${font.body3Normal.fontWeight};
  line-height: ${font.body3Normal.lineHeight};
  letter-spacing: ${font.body3Normal.letterSpacing};
`;
