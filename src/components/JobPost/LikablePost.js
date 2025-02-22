import styled from "styled-components";
import font from "/Users/jiwon/Desktop/Capston/triplej-fe/src/styles/fonts.js";
import PostCardShort from "../PostCardShort";

const LikablePost = () => {
  return (
    <Wrapper>
      <Title>회원님이 관심있어 할 공고</Title>
      <PostCardShortContainer>
        <PostCardShort />
        <PostCardShort />
        <PostCardShort />
      </PostCardShortContainer>
    </Wrapper>
  );
};

export default LikablePost;

const Wrapper = styled.div`
  width: 100%;
`;

const Title = styled.div`
  padding-bottom: 12px;
  color: ${(props) => props.theme.colors.text.normal};
  font-size: ${font.headline4.fontSize};
  font-weight: ${font.headline4.fontWeight};
  line-height: ${font.headline4.lineHeight};
  letter-spacing: ${font.headline4.letterSpacing};
`;

const PostCardShortContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
