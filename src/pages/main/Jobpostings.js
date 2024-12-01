import styled from "styled-components";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import itImg from "../../assets/itImg.jpg";
import NaverZ from "../../assets/NaverZ.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Jobpostings = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;
  const navigate = useNavigate();
  const [jobPostingsData, setJobPostingsData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      const { nationality, education, topik, interestTags } = storedUser;
      const userData = { nationality, education, topik, interestTags };
      axios
        .post("http://localhost:3001/jobs", userData)
        .then((response) => {
          console.log("서버 응답:", response.data);
          setJobPostingsData(response.data.data);
        })
        .catch((error) => {
          console.error("서버 응답 오류:", error);
        });
    }
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
        <JobPostHeader>
          <Text>채용 공고</Text>
          <TabContainer>
            <TabButton>추천 순</TabButton>
            <TabButton>내가 찜한 순</TabButton>
          </TabContainer>
        </JobPostHeader>
        <JobPostingsBox>
          {jobPostingsData.map((job) => (
            <JobPostBox
              key={job.id}
              onClick={() =>
                navigate(`/job-postings/${job.id}`, { state: { job } })
              }
            >
              <JobImg style={{ backgroundImage: `url(${job.imgSrc})` }} />
              <JobInfoContainer>
                <JobTitle>{job.companyName}</JobTitle>
                <JobSubTitle>{job.title}</JobSubTitle>
                <DetailTags>
                  {job.tags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                  ))}
                </DetailTags>
              </JobInfoContainer>
              <JobLikelihoodContainer>
                <Likelihood>{job.likelihood}</Likelihood>
                <Likelihood>{job.endAt}</Likelihood>
              </JobLikelihoodContainer>
            </JobPostBox>
          ))}
        </JobPostingsBox>
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

const JobPostHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 60px 10px 20px 10px;
`;

const Text = styled.div`
  font-size: 35px;
  font-weight: 900;
`;

const TabContainer = styled.div`
  background-color: #ffffff;
  padding: 20px 30px;
  width: 300px;
  border-radius: 20px;
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;

const TabButton = styled.button`
  font-size: 25px;
  font-weight: 900;
  border: none;
  border-radius: 10px;
  background-color: #d9d9d9;
  cursor: pointer;
  padding: 10px 20px;

  &:hover {
    background-color: #b2efe6;
  }
`;

const JobPostingsBox = styled.div`
  background-color: #ffffff;
  padding: 60px 80px;
`;

const JobPostBox = styled.div`
  background-color: #d9d9d9;
  padding: 40px 80px;
  border-radius: 10px;
  display: flex;
  margin-bottom: 30px;
`;

const JobImg = styled.div`
  background-image: url(${NaverZ});
  background-size: cover;
  background-position: center;
  height: 200px;
  width: 300px;
  flex-shrink: 0;
  margin-right: 30px;
`;

const JobInfoContainer = styled.div`
  width: 800px;
`;

const JobTitle = styled.div`
  font-size: 35px;
  font-weight: 900;
`;

const JobSubTitle = styled.div`
  font-size: 25px;
  font-weight: 900;
  color: #ffffff;
`;

const DetailTags = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;

const Tag = styled.span`
  background-color: #f0f0f0;
  padding: 4px 8px;
  border-radius: 4px;

  font-size: 20px;
  font-weight: 500;
`;

const Likelihood = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-left: 40px;
  margin-bottom: 40px;
`;

const JobLikelihoodContainer = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-left: 40px;
  color: #b2efe6;
  text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
    1px 1px 0 black;
`;
