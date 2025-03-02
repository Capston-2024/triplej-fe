import styled from "styled-components";
import HomePostCard from "../../../components/Home/HomePostCard";
import Banner from "../../../components/Home/Banner";
import PickinBanner from "../../../components/Home/PickinBanner";
import ContentsBar from "../../../components/Home/ContentsBar";
import MemberPostList from "../../../components/Home/MemberPostList";

const Home = () => {
  return (
    <div>
      <Container>
        <Content>
          <Banner />
          <PickinBanner />
          {/* 로그인하면 */}
          {/* <MemberPostList /> */}
          <div>
            <ContentsBar />
            <CardWrapper>
              <HomePostCard />
              <HomePostCard />
              <HomePostCard />
              <HomePostCard />
            </CardWrapper>
          </div>
        </Content>
      </Container>
    </div>
  );
};
export default Home;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Content = styled.div`
  width: 1100px;
  padding: 40px 20px;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
