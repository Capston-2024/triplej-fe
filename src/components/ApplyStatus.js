import styled from "styled-components";
import font from "/Users/jiwon/Desktop/Capston/triplej-fe/src/styles/fonts.js";
import ApplyStatusCard from "./ApplyStatusCard";

const STATUS_LIST = [
  { title: "지원 완료", count: 0 },
  { title: "채용 진행 중", count: 1 },
  { title: "최종 합격", count: 2 },
  { title: "불합격", count: 1 },
];

const ApplyStatus = () => {
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
          전체 지원 현황 <span>3</span>
        </TotalStatusText>
        <CardWrapper>
          <ApplyStatusCard />
          <ApplyStatusCard />
          <ApplyStatusCard />
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
