import styled from "styled-components";
import Header from "../../../components/Header";
import font from "/Users/jiwon/Desktop/Capston/triplej-fe/src/styles/fonts.js";
import { useState } from "react";
import { ReactComponent as PickinCheck } from "/Users/jiwon/Desktop/Capston/triplej-fe/src/assets/img/PickinCheck.svg";
import { ReactComponent as Indicator1Activate } from "/Users/jiwon/Desktop/Capston/triplej-fe/src/assets/icon/PageIndicator1Activate.svg";
import { ReactComponent as Indicator1Disabled } from "/Users/jiwon/Desktop/Capston/triplej-fe/src/assets/icon/PageIndicator1Disabled.svg";
import { ReactComponent as Indicator2Activate } from "/Users/jiwon/Desktop/Capston/triplej-fe/src/assets/icon/PageIndicator2Activate.svg";
import { ReactComponent as Indicator2Disabled } from "/Users/jiwon/Desktop/Capston/triplej-fe/src/assets/icon/PageIndicator2Disabled.svg";
import Button from "../../../components/Button";
import JoinForm1 from "../../../components/JoinForm1";
import JoinForm2 from "../../../components/JoinForm2";

const Join = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [status, setStatus] = useState("default");
  const [currentStep, setCurrentStep] = useState(2);

  const handleSelectChange = (value) => {
    setSelectedValue(value);
    // 여기서 에러 조건을 정의 (예: 빈 값이면 에러 처리)
    if (!value) {
      setStatus("error");
    } else {
      setStatus("default");
    }
  };

  const handleInputChange = (value) => {
    setInputValue(value);
    // 여기서 에러 조건을 정의 (예: 빈 값이면 에러 처리)
    if (!value) {
      setStatus("error");
    } else {
      setStatus("default");
    }
  };
  return (
    <div>
      <Header />
      <Wrapper>
        <JoinBox>
          <PickinCheck />
          <div>
            <TitleContainer>
              <Title>
                {currentStep === 1 ? (
                  <>
                    환영합니다!
                    <br />
                    Pickin'을 시작하기 위한 계정을 생성해주세요.
                  </>
                ) : (
                  <>
                    Weiss 님 안녕하세요!
                    <br />
                    기업에 공개할 이력을 작성해주세요.
                  </>
                )}
              </Title>
              <IndicatorContainer>
                {currentStep === 1 ? (
                  <Indicator1Activate />
                ) : (
                  <Indicator1Disabled />
                )}
                {currentStep === 2 ? (
                  <Indicator2Activate />
                ) : (
                  <Indicator2Disabled />
                )}
              </IndicatorContainer>
            </TitleContainer>
            {currentStep === 1 && <JoinForm1 />}
            {currentStep === 2 && <JoinForm2 />}
            <ButtonWrapper>
              <Button type="fill" status="default" size="large">
                {currentStep === 1 ? "다음으로" : "완료하기"}
              </Button>
            </ButtonWrapper>
          </div>
        </JoinBox>
      </Wrapper>
    </div>
  );
};
export default Join;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 60px;
  padding-bottom: 44px;
`;

const JoinBox = styled.div`
  width: 700px;
  height: 932px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  color: #1d2939;
  font-size: ${font.headline1.fontSize};
  font-weight: ${font.headline1.fontWeight};
  line-height: ${font.headline1.lineHeight};
  letter-spacing: ${font.headline1.letterSpacing};
`;

const IndicatorContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-end;
`;

const InputContainer = styled.div`
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
`;

const Card = styled.div`
  display: flex;
  justify-content: space-between;
`;
