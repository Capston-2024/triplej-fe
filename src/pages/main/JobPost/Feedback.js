import styled from "styled-components";
import font from "/Users/jiwon/Desktop/Capston/triplej-fe/src/styles/fonts.js";
import AiFooter from "./AiFooter";
import { mockFeedbackData } from "../../../constants/mockData";
import RightFeedback from "../../../components/RightFeedback";

const Feedback = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Content>
            <TitleBox>
              <Title>자기소개서</Title>
              <SubBox>
                <SubTitle>
                  삼성전자에 자신을 소개하는 글을 작성해주세요.
                </SubTitle>
              </SubBox>
            </TitleBox>
            <InputWrapper>
              <div>
                <LeftInput defaultValue="[고객 중심의 글로벌 시장 전문가로 성장하겠습니다] 삼성전자 전 세계 고객의 삶을 연구하며, 고객 친화형 기술과 디자인을 개한 깊은 관심을 바탕으로, 각국의 문화적 차이를 존중하고 시너지를 발휘할 수 있는 글로벌 마인드를 기르기 위해 한국학과 국제학을 전공로 글로벌 시장에서 '고객 중심' 전략 강화에 기여하고자 합니다.특히 현지 시장에 대한 깊은 이해를 바탕으로 고객의 요구에 부합하는 맞춤형 전략을 수립하여, 삼성전자의 글로벌 확장에 기여하고자 합니다." />
              </div>
              <div>
                <RightFeedback data={mockFeedbackData} />
              </div>
            </InputWrapper>
          </Content>
        </Wrapper>
      </Container>
      <AiFooter />
    </div>
  );
};
export default Feedback;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Wrapper = styled.div`
  width: 1100px;
`;

const Content = styled.div`
  padding: 80px 20px;
`;
const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 24px;
`;

const Title = styled.div`
  color: ${(props) => props.theme.colors.text.normal};
  font-size: ${font.headline1.fontSize};
  font-weight: ${font.headline1.fontWeight};
  line-height: ${font.headline1.lineHeight};
  letter-spacing: ${font.headline1.letterSpacing};
`;

const SubTitle = styled.div`
  color: ${(props) => props.theme.colors.text.assistive};
  font-size: ${font.body2Title.fontSize};
  font-weight: ${font.body2Title.fontWeight};
  line-height: ${font.body2Title.lineHeight};
  letter-spacing: ${font.body2Title.letterSpacing};
`;

const SubBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const LeftInput = styled.textarea`
  width: 610px;
  height: 400px;
  padding: 24px;
  padding-bottom: 56px;
  border: 1.4px solid ${(props) => props.theme.colors.line.normal};
  border-radius: 12px;
  font-size: ${font.body3Normal.fontSize};
  font-weight: ${font.body3Normal.fontWeight};
  line-height: ${font.body3Normal.lineHeight};
  letter-spacing: ${font.body3Normal.letterSpacing};
  color: ${(props) => props.theme.colors.text.normal};
  verflow-y: auto;

  ::placeholder {
    color: ${(props) => props.theme.colors.text.disable};
    font-size: ${font.body3Normal.fontSize};
    font-weight: ${font.body3Normal.fontWeight};
    line-height: ${font.body3Normal.lineHeight};
    letter-spacing: ${font.body3Normal.letterSpacing};
    color: ${(props) => props.theme.colors.text.normal};
  }
`;
