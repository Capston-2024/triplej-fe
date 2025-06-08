import styled from "styled-components";
import HomePostCard from "../../../components/Home/HomePostCard";
import Banner from "../../../components/Home/Banner";
import PickinBanner from "../../../components/Home/PickinBanner";
import ContentsBar from "../../../components/Home/ContentsBar";
import MemberPostList from "../../../components/Home/MemberPostList";
import { dummyPosts } from "../../../constants/mockData";
import { useState } from "react";

const Home = ({ isLoggedIn }) => {
  const [posts] = useState(dummyPosts);
  return (
    <div>
      <Container>
        <Content>
          <Banner />
          {isLoggedIn ? <MemberPostList posts={posts} /> : <PickinBanner />}
          <div>
            <ContentsBar />
            <CardWrapper>
              {posts.map((post) => (
                <HomePostCard
                  key={post.id}
                  isLoggedIn={isLoggedIn}
                  post={post}
                />
              ))}
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
