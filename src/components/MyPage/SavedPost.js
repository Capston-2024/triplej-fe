import styled from "styled-components";
import PostCardShort from "../PostCardShort";

const SavedPost = ({ posts }) => {
  const likedPosts = posts.filter((post) => post.user.liked);
  return (
    <Wrapper>
      {likedPosts.length > 0 ? (
        likedPosts.map((post) => <PostCardShort key={post.id} post={post} />)
      ) : (
        <p>저장한 공고가 없습니다.</p>
      )}
    </Wrapper>
  );
};
export default SavedPost;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 48px 44px 80px;
  gap: 40px 21px;
  width: 702px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.background.white};
`;
