import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import styled from "styled-components";
import NaverZ from "../../assets/NaverZ.png";
import { useLocation } from "react-router-dom";

const JobPostingDetail = () => {
  const location = useLocation();
  const job = location.state?.job;

  if (!job) {
    return <div>해당 공고를 찾을 수 없습니다.</div>;
  }

  const jobPostingsData = [
    {
      id: 1,
      title: "NAVER Z",
      subTitle: "[NAVER Z] 제페토 글로벌 서비스 운영 체험형 인턴",
      tags: [
        "경기",
        "인턴",
        "한국어 가능자",
        "영어",
        "인도네시아어",
        "태국어",
        "F-2",
        "F-4",
      ],
      sustainability: "직무 적합도 90%",
      imgSrc: NaverZ,
    },
  ];

  return (
    <Wrapper>
      <Header />
      <Navbar />
      <Container>
        <JobDetailHeader>
          <JobDetailText>현재 보고 있는 채용 공고</JobDetailText>
          <ApplyButton>지원하기</ApplyButton>
        </JobDetailHeader>
        <JobPostDetailContainer>
          <JobPostDeatilHeader>{job.title}</JobPostDeatilHeader>
          <TextWrapper>
            <JobPostDeatilHeader>접수 마감일 {job.endAt}</JobPostDeatilHeader>
            <JobPostDeatilHeader>{job.likelihood}</JobPostDeatilHeader>
          </TextWrapper>
        </JobPostDetailContainer>
        <JobPostingInfoContainer>
          <JobPostBox>
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
          </JobPostBox>
          <JobInfoDetail>상세 정보</JobInfoDetail>
        </JobPostingInfoContainer>
      </Container>
    </Wrapper>
  );
};

export default JobPostingDetail;

const Wrapper = styled.div`
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

const JobDetailHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 10px;
`;

const JobDetailText = styled.div`
  font-size: 35px;
  font-weight: 900;
`;

const ApplyButton = styled.button`
  font-size: 25px;
  font-weight: 900;
  border: none;
  border-radius: 10px;
  background-color: #b2efe6;
  cursor: pointer;
  width: 300px;
  padding: 10px 20px;

  &:hover {
    background-color: #ffffff;
  }
`;

const JobPostDetailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 60px;
  background-color: #ffffff;
  margin-bottom: 40px;
`;

const JobPostDeatilHeader = styled.div`
  font-size: 25px;
  font-weight: 700;
  margin-left: 30px;
  margin-right: 30px;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 70px;
`;

const JobPostingInfoContainer = styled.div`
  background-color: #ffffff;
  padding: 60px 80px;
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

const Sustainability = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-left: 40px;
`;

const JobInfoDetail = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-top: 80px;
`;
