import styled from "styled-components";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import PickinIntroduce1 from "../../assets/스타트 1차 발표_page-0001.jpg";
import PickinIntroduce2 from "../../assets/스타트 1차 발표_page-0002.jpg";
import PickinIntroduce3 from "../../assets/스타트 1차 발표_page-0003.jpg";
import PickinIntroduce4 from "../../assets/스타트 1차 발표_page-0004.jpg";

const main = () => {
  return (
    <MainWrapper>
      <Header />
      <Navbar />
      <MainContainer>
        <MainBox>
          <MainText>
            외국인 유학생을 위한 <br />
            맞춤형 채용 공고! <br />
            Pickin'에서 찾아보세요
          </MainText>
          <Button>채용 공고 보러가기</Button>
          <StyledImage src={PickinIntroduce1} alt="Pickin Introduce" />
          <StyledImage src={PickinIntroduce2} alt="Pickin Introduce" />
          <StyledImage src={PickinIntroduce3} alt="Pickin Introduce" />
          <StyledImage src={PickinIntroduce4} alt="Pickin Introduce" />
        </MainBox>
      </MainContainer>
    </MainWrapper>
  );
};

export default main;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f9f9f9;
`;

const MainContainer = styled.div`
  padding: 40px 100px;
  background-color: #f9f9f9;
  flex-grow: 1;
  height: 100%;
  border-radius: 8px;
`;

const MainBox = styled.div`
  background-color: #e0f7fa;
  padding: 80px;
  border-radius: 10px;
`;

const MainText = styled.div`
  font-size: 50px;
  font-weight: 900;
  line-height: 1.3;
  display: flex;
  align-items: center;
  margin-bottom: 60px;
`;

const Button = styled.button`
  padding: 16px 24px;
  width: 500px;
  font-size: 22px;
  font-weight: 600;
  font-family: "Pretendard", sans-serif;
  border: none;
  border-radius: 10px;
  margin-bottom: 60px;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;

  &:hover {
    background-color: #b2efe6;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;
  display: block;
`;
