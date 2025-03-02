import ApplyStatus from "../../../components/MyPage/ApplyStatus";
import MyPageNavigationBar from "../../../components/MyPage/MyPageNavigationBar";
import Profile from "../../../components/MyPage/Profile";
import styled from "styled-components";
import SavedPost from "../../../components/MyPage/SavedPost";
import { useState } from "react";
import ProfileEdit from "../../../components/MyPage/ProfileEdit";

const MyPage = () => {
  const [selectedSection, setSelectedSection] = useState("저장한 공고");
  const [isEditing, setIsEditing] = useState(false);

  const handleSectionChange = (section) => {
    setSelectedSection(section);
    setIsEditing(false);
  };

  const renderContent = () => {
    if (isEditing) {
      return <ProfileEdit />;
    }
    switch (selectedSection) {
      case "프로필":
        return <Profile setIsEditing={setIsEditing} />;
      case "지원 현황":
        return <ApplyStatus />;
      case "저장한 공고":
        return <SavedPost />;
      default:
        return <SavedPost />;
    }
  };

  return (
    <div>
      <Wrapper>
        <MyPageNavigationBar
          selectedSection={selectedSection}
          setSelectedSection={handleSectionChange}
        />
        {renderContent()}
      </Wrapper>
    </div>
  );
};
export default MyPage;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 80px 430px;
`;
