import styled from "styled-components";
import font from "../styles/fonts";
import { ReactComponent as DocumentIcon } from "../assets/icon/Document.svg";

const LABELS = {
  Date: "지원일",
  Status: "지원 상태",
  View: "지원서 보기",
  Edit: "지원서 수정하기",
};

const isViewOrEditType = (type) => type === "View" || type === "Edit";

const getStatusLabel = (status) => {
  switch (status) {
    case "APPLIED":
    case "IN_PROGRESS":
      return "검토 중";
    case "HIRED":
      return "합격";
    default:
      return status;
  }
};

const ApplicationInfoCard = ({ type, content }) => {
  const isViewOrEdit = isViewOrEditType(type);
  const displayContent = type === "Status" ? getStatusLabel(content) : content;

  return (
    <InfoCard type={type} isViewOrEdit={isViewOrEdit}>
      {isViewOrEdit ? (
        <LabelWithIcon>
          <DocumentIcon />
        </LabelWithIcon>
      ) : (
        <Label>{LABELS[type] || ""}</Label>
      )}
      <Content content={displayContent}>
        {isViewOrEdit ? LABELS[type] : displayContent}
      </Content>
    </InfoCard>
  );
};
export default ApplicationInfoCard;

const InfoCard = styled.div`
  display: flex;
  flex: ${({ type }) => (type === "Edit" ? "2" : "1")};
  align-items: center;
  justify-content: ${({ isViewOrEdit }) =>
    isViewOrEdit ? "center" : "space-between"};
  padding: 20px 24px;
  height: 25px;
  border: ${({ isViewOrEdit }) =>
    isViewOrEdit ? "1px solid #d0d5dd" : "none"};
  border-radius: 8px;
  background-color: ${({ isViewOrEdit }) =>
    isViewOrEdit ? "#ffffff" : "#f2f4f7"};
`;

const LabelWithIcon = styled.div`
  display: flex;
  align-items: center;
  padding-right: 8px;
  color: ${(props) => props.theme.colors.text.assistive};
  font-size: ${font.body3Normal.fontSize};
  font-weight: ${font.body3Normal.fontWeight};
  line-height: ${font.body3Normal.lineHeight};
  letter-spacing: ${font.body3Normal.letterSpacing};
`;

const Label = styled.div`
  color: ${(props) => props.theme.colors.text.assistive};
  font-size: ${font.body3Normal.fontSize};
  font-weight: ${font.body3Normal.fontWeight};
  line-height: ${font.body3Normal.lineHeight};
  letter-spacing: ${font.body3Normal.letterSpacing};
`;

const Content = styled.div`
  color: ${({ content, theme }) =>
    content === "합격"
      ? theme.colors.primary.normal
      : theme.colors.text.normal};
  font-size: ${font.headline5.fontSize};
  font-weight: ${font.headline5.fontWeight};
  line-height: ${font.headline5.lineHeight};
  letter-spacing: ${font.headline5.letterSpacing};
`;
