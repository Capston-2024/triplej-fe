import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import styled from "styled-components";
import itImg from "../../assets/itImg.jpg";
import NaverZ from "../../assets/NaverZ.png";
import Samsung from "../../assets/samsung.png";
import Kakao from "../../assets/kakao.png";
import LG from "../../assets/lg.png";
import SK from "../../assets/sk.png";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const JobPostingDetail = () => {
  const location = useLocation();
  const job = location.state?.job;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!job) {
    return <div>해당 공고를 찾을 수 없습니다.</div>;
  }


  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}년 ${month}월 ${day}일`;
  };
  const getCompanyImage = (companyName) => {
    switch (companyName) {
      case "NAVER Z":
        return NaverZ;
      case "SK하이닉스":
        return SK;
      case "LG전자":
        return LG;
      case "카카오":
        return Kakao;
      case "삼성전자":
        return Samsung;
      default:
        return itImg;  // 기본 이미지
    }
  };

  const getCompanyLink = (companyName) => {
    switch (companyName) {
      case "NAVER Z":
        return "https://recruit.naverz-corp.com/rcrt/view.do?annoId=30002687";
      case "SK하이닉스":
        return "https://illinoisksa.org/job/?mod=document&uid=10271";
      case "LG전자":
        return "https://linkareer.com/activity/165491";
      case "카카오":
        return "https://www.catch.co.kr/NCS/RecruitInfoDetails/359336";
      case "삼성전자":
        return "https://linkareer.com/activity/172869";
      default:
        return "#";  // 기본 링크
    }
  };

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
            <JobPostDeatilHeader>접수 마감일 {formatDate(job.endAt)}</JobPostDeatilHeader>
            <JobPostDeatilHeader>{job.likelihood === 0 ? "적합도 하" : "적합도 상"}</JobPostDeatilHeader>
          </TextWrapper>
        </JobPostDetailContainer>
        <JobPostingInfoContainer>
          <JobPostBox>
            <JobImg style={{ backgroundImage: `url(${getCompanyImage(job.companyName)})` }} />
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
          <JobLink>
            <ApplyButton onClick={() => window.open(getCompanyLink(job.companyName), "_blank")}>
              채용 공고 자세히 보러가기
            </ApplyButton>
          </JobLink >
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
  flex-wrap: wrap;
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


const JobLink = styled.div`
  margin-top:30px;
`;
