import styled from "styled-components";
import font from "../../styles/fonts.js";
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

  useEffect(() => {
    if (!email) {
      setLoading(false);
      return;
    }

    const fetchApplicationStatus = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        params.append("email", email);
        const response = await fetch(
          `https://ded1-1-242-152-73.ngrok-free.app/application-status-list?${params}`,
          {
            method: "GET",
            headers: {
              "ngrok-skip-browser-warning": "true",
              "Content-type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        if (result.data) {
          setApplicationData(result.data);
        } else {
          console.error(
            "API response is missing the 'data' property.",
            result
          );
        }
      } catch (error) {
        console.error("Failed to fetch application status:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchApplicationStatus();
  }, [email]);

  const STATUS_LIST = [
    { title: "지원 완료", count: applicationData.applicationStats.applied },
    {
      title: "채용 진행 중",
      count: applicationData.applicationStats.inProgress,
    },
    { title: "최종 합격", count: applicationData.applicationStats.hired },
    { title: "불합격", count: applicationData.applicationStats.rejected },
  ];

  if (loading) {
    return <Wrapper>Loading...</Wrapper>;
  }

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
