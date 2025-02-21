import styled from "styled-components";
import font from "/Users/jiwon/Desktop/Capston/triplej-fe/src/styles/fonts.js";
import BannerImg from "/Users/jiwon/Desktop/Capston/triplej-fe/src/assets/BannerImg.png";

const Banner = () => {
  return (
    <Wrapper>
      <Label>지금 주목할 채용 소식</Label>
      <Content>
        <div>
          <Corp>카카오스타일</Corp>
          <Title>2024 카카오 스타일 집중 채용</Title>
        </div>
        <Date>12월 31일까지</Date>
      </Content>
    </Wrapper>
  );
};
export default Banner;

const Wrapper = styled.div`
  width: 100%;
`;

const Label = styled.div`
  padding-bottom: 12px;
  width: 100%;
  color: ${(props) => props.theme.colors.text.normal};
  font-size: ${font.headline4.fontSize};
  font-weight: ${font.headline4.fontWeight};
  line-height: ${font.headline4.lineHeight};
  letter-spacing: ${font.headline4.letterSpacing};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 92px;
  height: 152px;
  color: ${(props) => props.theme.colors.text.normal};
  font-size: ${font.headline4.fontSize};
  font-weight: ${font.headline4.fontWeight};
  line-height: ${font.headline4.lineHeight};
  letter-spacing: ${font.headline4.letterSpacing};
  border-radius: 8px;
  background: linear-gradient(
      90deg,
      rgba(255, 223, 0, 1) 0%,
      rgba(255, 183, 0, 1) 100%
    ),
    url(${BannerImg});
`;

const Corp = styled.div`
  padding-bottom: 6px;
  color: ${(props) => props.theme.colors.text.normal};
  font-size: ${font.headline4.fontSize};
  font-weight: ${font.headline4.fontWeight};
  line-height: ${font.headline4.lineHeight};
  letter-spacing: ${font.headline4.letterSpacing};
`;

const Title = styled.div`
  color: ${(props) => props.theme.colors.text.normal};
  font-size: ${font.headline1.fontSize};
  font-weight: ${font.headline1.fontWeight};
  line-height: ${font.headline1.lineHeight};
  letter-spacing: ${font.headline1.letterSpacing};
`;

const Date = styled.div`
  color: ${(props) => props.theme.colors.text.normal};
  font-size: ${font.headline5.fontSize};
  font-weight: ${font.headline5.fontWeight};
  line-height: ${font.headline5.lineHeight};
  letter-spacing: ${font.headline5.letterSpacing};
`;
