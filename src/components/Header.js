import logo from "../assets/PickinLogo.png";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Title>Pickin</Title>
        <Logo src={logo} alt="Pickin Logo" />
      </LogoContainer>
      <ButtonContainer>
        <Button>로그인</Button>
        <Button>회원가입</Button>
      </ButtonContainer>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 70px;
  background-color: #f9f9f9;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

const Title = styled.p`
  font-size: 50px;
  font-weight: 900;
  color: #b2efe6;
  text-shadow: -3px -3px 0 black, 1px -1px 0 black, -1px 1px 0 black,
    1px 1px 0 black;
`;

const Logo = styled.img`
  width: 60px;
  height: 60px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 40px;
`;

const Button = styled.button`
  padding: 16px 24px;
  font-size: 16px;
  font-family: "Pretendard", sans-serif;
  border: none;
  border-radius: 10px;
  background-color: #ffffff;
  cursor: pointer;

  &:hover {
    background-color: #b2efe6;
  }
`;
