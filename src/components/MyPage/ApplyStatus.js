import styled from "styled-components";
import font from "/Users/jiwon/Desktop/Capston/triplej-fe/src/styles/fonts.js";
import ApplyStatusCard from "../ApplyStatusCard";
import { useState, useEffect } from "react";

const ApplyStatus = ({ email }) => {
  //로컬 스토리지
  // 더미 데이터 저장용 state
  const [applicationData, setApplicationData] = useState({
    applicationStats: { applied: 0, inProgress: 0, hired: 0, rejected: 0 },
    applicationList: [],
  });
  const [loading, setLoading] = useState(true);
  const STATUS_LIST = [
    { title: "지원 완료", count: applicationData.applicationStats.applied },
    {
      title: "채용 진행 중",
      count: applicationData.applicationStats.inProgress,
    },
    { title: "최종 합격", count: applicationData.applicationStats.hired },
    { title: "불합격", count: applicationData.applicationStats.rejected },
  ];

  useEffect(() => {
    if (!email) return;

    // 더미 데이터 생성
    const dummyData = {
      applicationStats: {
        applied: 0,
        inProgress: 1,
        hired: 20,
        rejected: 1,
      },
      applicationList: [
        {
          jobId: 1,
          companyName: "현대건설 HYUNDAI E&C",
          title: "2025 상반기 외국인 유학생 채용",
          status: "APPLIED",
        },
        {
          jobId: 2,
          companyName: "삼양 라운드 스퀘어 Samyang Roundsquare",
          title: "외국인 유학생(Global Talent) 채용",
          status: "IN_PROGRESS",
        },
        {
          jobId: 3,
          companyName: "삼성전자",
          title: "Full-time opportunity for international students",
          status: "HIRED",
        },
      ],
    };

    // 마치 API 요청이 있는 것처럼 setTimeout 사용
    setTimeout(() => {
      console.log(`더미 데이터 로드 완료:`, dummyData);
      setApplicationData(dummyData);
      setLoading(false);
    }, 1000);
  }, [email]);
  return (
    <Wrapper>
      <StatusBar>
        {STATUS_LIST.map((status, index) => (
          <StatusItem key={status.title} showBorder={index !== 0}>
            <StatusTitle>{status.title}</StatusTitle>
            <Number>{status.count}</Number>
          </StatusItem>
        ))}
      </StatusBar>
      <StatusDetail>
        <TotalStatusText>
          전체 지원 현황{" "}
          <span>
            {applicationData.applicationStats.applied +
              applicationData.applicationStats.inProgress +
              applicationData.applicationStats.hired +
              applicationData.applicationStats.rejected}
          </span>
        </TotalStatusText>
        <CardWrapper>
          {applicationData.applicationList.map((application) => (
            <ApplyStatusCard
              key={application.jobId}
              application={application}
            />
          ))}
        </CardWrapper>
      </StatusDetail>
    </Wrapper>
  );
};
export default ApplyStatus;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 48px 45px 80px;
  gap: 60px;
  width: 700px;
  background-color: ${(props) => props.theme.colors.background.white};
  border-radius: 20px;
`;

const StatusBar = styled.div`
  display: flex;
  padding: 28px 0;
  justify-content: space-between;
  width: 100%;
  height: 84px;
  background-color: ${(props) => props.theme.colors.background.blue};
  border-radius: 12px;
`;

const StatusItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 175px;
  height: 72px;
  ${({ showBorder }) => showBorder && "border-left: 1px solid #d0d5dd;"}
`;

const StatusTitle = styled.div`
  color: ${(props) => props.theme.colors.text.neutral};
  font-size: ${font.body3Title.fontSize};
  font-weight: ${font.body3Title.fontWeight};
  line-height: ${font.body3Title.lineHeight};
  letter-spacing: ${font.body3Title.letterSpacing};
`;

const Number = styled.div`
  color: ${(props) => props.theme.colors.text.normal};
  font-size: ${font.display1.fontSize};
  font-weight: ${font.display1.fontWeight};
  line-height: ${font.display1.lineHeight};
  letter-spacing: ${font.display1.letterSpacing};
`;

const TotalStatusText = styled.div`
  padding-bottom: 12px;
  color: ${(props) => props.theme.colors.text.normal};
  font-size: ${font.headline5.fontSize};
  font-weight: ${font.headline5.fontWeight};
  line-height: ${font.headline5.lineHeight};
  letter-spacing: ${font.headline5.letterSpacing};
  span {
    color: ${(props) => props.theme.colors.primary.normal};
    padding-left: 6px;
  }
`;

const StatusDetail = styled.div`
  width: 100%;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
