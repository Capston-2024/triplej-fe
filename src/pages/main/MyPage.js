import ApplyStatus from "../../components/MyPage/ApplyStatus";
import Header from "../../components/Header";
import MyPageNavigationBar from "../../components/MyPage/MyPageNavigationBar";
import Profile from "../../components/MyPage/Profile";
import styled from "styled-components";
import SavedPost from "../../components/MyPage/SavedPost";
import { useState } from "react";

const MyPage = () => {
  const [selectedSection, setSelectedSection] = useState("저장한 공고");

  const renderContent = () => {
    switch (selectedSection) {
      case "프로필":
        return <Profile />;
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
      <Header />
      <Wrapper>
        <MyPageNavigationBar
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
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
