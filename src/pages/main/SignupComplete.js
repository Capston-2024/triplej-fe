import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import styled from "styled-components";
import logo from "../../assets/PickinLogo.png";

const SignupComplete = () => {
  return (
    <MainWrapper>
      <Header />
      <Navbar />
      <Container>
        <JoinBox>
          <Wrapper>
            <LogoContainer>
              <Title>Joining Complete</Title>
              <Logo src={logo} alt="Pickin Logo" />
            </LogoContainer>
            <TextContainer>
              <Text>지금 바로 나에게 맞는 채용 공고를 찾아보세요!</Text>
            </TextContainer>
          </Wrapper>
          <ButtonContainer>
            <JoinButton type="submit">홈으로</JoinButton>
          </ButtonContainer>
        </JoinBox>
      </Container>
    </MainWrapper>
  );
};

export default SignupComplete;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f9f9f9;
`;

const Container = styled.div`
  padding: 40px 500px;
  background-color: #f9f9f9;
  flex-grow: 1;
  border-radius: 8px;
`;

const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  font-size: 30px;
  font-weight: 500;
`;

const JoinBox = styled.div`
  background-color: #e0f7fa;
  padding: 0px 80px;
  border-radius: 10px;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
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

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const JoinButton = styled.button`
  width: 400px;
  margin-top: 70px;
  margin-bottom: 70px;
  height: 130px;
  padding: 16px 24px;
  font-size: 30px;
  font-weight: 500;
  font-family: "Pretendard", sans-serif;
  border: none;
  border-radius: 10px;
  background-color: #ffffff;
  cursor: pointer;

  &:hover {
    background-color: #b2efe6;
  }
`;
