import styled from "styled-components";
import font from "/Users/jiwon/Desktop/Capston/triplej-fe/src/styles/fonts.js";
import { ReactComponent as CompanyIcon } from "/Users/jiwon/Desktop/Capston/triplej-fe/src/assets/icon/Company.svg";
import ApplicationInfoCard from "./ApplicationInfoCard";

const ApplyStatusCard = ({ application }) => {
  return (
    <Wrapper>
      <Title>
        <CompanyName>
          <CompanyIcon />
          {application.companyName}
        </CompanyName>
        <JobDisc>{application.title}</JobDisc>
      </Title>
      <CardWrapper>
        <ApplicationInfoCard type="Date" content="2024.12.31" />
        <ApplicationInfoCard type="Status" content={application.status} />
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
  border: 1px solid ${(props) => props.theme.colors.line.normal};
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
  color: ${(props) => props.theme.colors.text.normal};
  font-size: ${font.body3Normal.fontSize};
  font-weight: ${font.body3Normal.fontWeight};
  line-height: ${font.body3Normal.lineHeight};
  letter-spacing: ${font.body3Normal.letterSpacing};
`;

const JobDisc = styled.div`
  color: ${(props) => props.theme.colors.text.normal};
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
