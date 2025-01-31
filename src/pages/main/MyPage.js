import ApplyStatus from "../../components/ApplyStatus";
import Header from "../../components/Header";
import MyPageNavigationBar from "../../components/MyPageNavigationBar";
import Profile from "../../components/Profile";
import styled from "styled-components";

const MyPage = () => {
  return (
    <div>
      <Header />
      <Wrapper>
        <MyPageNavigationBar />
        <ApplyStatus />
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
