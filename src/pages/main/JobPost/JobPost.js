import styled from "styled-components";
import Header from "../../../components/Header";
import LikablePost from "../../../components/JobPost/LikablePost";

const JobPost = () => {
  return (
    <div>
      <Header />
      <Container>
        <Content>
          <LikablePost />
        </Content>
      </Container>
    </div>
  );
};
export default JobPost;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Content = styled.div`
  width: 1100px;
  padding: 40px 20px;
`;
