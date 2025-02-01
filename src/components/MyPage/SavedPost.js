import styled from "styled-components";
import PostCardShort from "../PostCardShort";

const SavedPost = () => {
  return (
    <Wrapper>
      <PostCardShort />
      <PostCardShort />
      <PostCardShort />
      <PostCardShort />
      <PostCardShort />
      <PostCardShort />
      <PostCardShort />
      <PostCardShort />
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
