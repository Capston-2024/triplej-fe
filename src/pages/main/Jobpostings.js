import styled from "styled-components";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import itImg from "../../assets/itImg.jpg";
import { useState, useEffect } from "react";

const Jobpostings = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <MainWrapper>
      <Header />
      <Navbar />
      <Container>
        <SliderWrapper>
          <Slider currentSlide={currentSlide}>
            <PostBox>
              <Title>웅진IT</Title>
              <Subtitle>2025년 웅진IT Global Internship</Subtitle>
              <Finaldate>접수 마감일 2024-12-08</Finaldate>
            </PostBox>
            <PostBox>
              <Title>삼성전자</Title>
              <Subtitle>2025년 삼성전자 글로벌 인턴십</Subtitle>
              <Finaldate>접수 마감일 2024-12-15</Finaldate>
            </PostBox>
            <PostBox>
              <Title>LG전자</Title>
              <Subtitle>2025년 LG 글로벌 인턴십</Subtitle>
              <Finaldate>접수 마감일 2024-12-20</Finaldate>
            </PostBox>
          </Slider>
        </SliderWrapper>
      </Container>
    </MainWrapper>
  );
};

export default Jobpostings;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f9f9f9;
`;

const Container = styled.div`
  padding: 50px 80px;
  background-color: #f9f9f9;
  flex-grow: 1;
  border-radius: 8px;
  height: 100%;
`;

const SliderWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Slider = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  transform: translateX(-${(props) => props.currentSlide * 100}vw);
  width: ${(props) => props.totalSlides * 100}vw;
`;

const PostBox = styled.div`
  background-color: #e0f7fa;
  background-image: url(${itImg});
  background-size: cover;
  background-position: center;
  padding: 80px 80px;
  border-radius: 10px;
  height: 200px;
  width: 100vw;
  flex-shrink: 0;
  margin-right: 30px;
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: 900;
  color: #ffffff;
`;

const Subtitle = styled.div`
  font-size: 40px;
  font-weight: 900;
  color: #ffffff;
`;

const Finaldate = styled.div`
  font-size: 20px;
  font-weight: 900;
  color: #ffffff;
  margin-top: 80px;
`;
