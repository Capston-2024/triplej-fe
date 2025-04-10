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
          <Title>2025 카카오 스타일 집중 채용</Title>
        </div>
        <Date>4월 14일까지</Date>
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
  position: relative;
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
  overflow: hidden;
  background: none;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to right,
      rgba(255, 200, 0, 1) 45%,
      rgba(255, 183, 0, 0.7) 60%,
      rgba(255, 183, 0, 0.6) 70%,
      rgba(255, 183, 0, 0) 100%
    );
    z-index: 1;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 55%;
    height: 100%;
    background: url(${BannerImg}) no-repeat center / cover;
    z-index: 0;
  }
`;

const Corp = styled.div`
  position: relative;
  z-index: 2;
  padding-bottom: 6px;
  color: ${(props) => props.theme.colors.text.normal};
  font-size: ${font.headline4.fontSize};
  font-weight: ${font.headline4.fontWeight};
  line-height: ${font.headline4.lineHeight};
  letter-spacing: ${font.headline4.letterSpacing};
`;

const Title = styled.div`
  position: relative;
  z-index: 2;
  color: ${(props) => props.theme.colors.text.normal};
  font-size: ${font.headline1.fontSize};
  font-weight: ${font.headline1.fontWeight};
  line-height: ${font.headline1.lineHeight};
  letter-spacing: ${font.headline1.letterSpacing};
`;

const Date = styled.div`
  position: relative;
  z-index: 2;
  color: ${(props) => props.theme.colors.text.normal};
  font-size: ${font.headline5.fontSize};
  font-weight: ${font.headline5.fontWeight};
  line-height: ${font.headline5.lineHeight};
  letter-spacing: ${font.headline5.letterSpacing};
`;
