import styled from "styled-components";
import font from "/Users/jiwon/Desktop/Capston/triplej-fe/src/styles/fonts.js";
import { ReactComponent as CompanyIcon } from "/Users/jiwon/Desktop/Capston/triplej-fe/src/assets/icon/Company.svg";
import ApplicationInfoCard from "./ApplicationInfoCard";

const ApplyStatusCard = () => {
  return (
    <Wrapper>
      <Title>
        <CompanyName>
          <CompanyIcon />
          카카오스타일
        </CompanyName>
        <JobDisc>인도네시아 콘텐츠 로컬라이징 & 사업개발 매니저</JobDisc>
      </Title>
      <CardWrapper>
        <ApplicationInfoCard type="Date" content="2024.12.31" />
        <ApplicationInfoCard type="Status" content="검토 중" />
        <ApplicationInfoCard type="View" />
      </CardWrapper>
    </Wrapper>
  );
};

export default ApplyStatusCard;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px 20px;
  width: 660px;
  height: 139px;
  border: 1px solid #e4e7ec;
  border-radius: 12px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 58px;
`;

const CompanyName = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #1d2939;
  font-size: ${font.body3Normal.fontSize};
  font-weight: ${font.body3Normal.fontWeight};
  line-height: ${font.body3Normal.lineHeight};
  letter-spacing: ${font.body3Normal.letterSpacing};
`;

const JobDisc = styled.div`
  color: #1d2939;
  font-size: ${font.headline4.fontSize};
  font-weight: ${font.headline4.fontWeight};
  line-height: ${font.headline4.lineHeight};
  letter-spacing: ${font.headline4.letterSpacing};
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  width: 100%;
`;
