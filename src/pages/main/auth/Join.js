import styled from "styled-components";
import Header from "../../../components/Header";
import font from "/Users/jiwon/Desktop/Capston/triplej-fe/src/styles/fonts.js";
import InputBox from "../../../components/InputBox";
import { useState } from "react";
import Dropdown from "../../../components/Dropdown";
import { ReactComponent as PickinCheck } from "/Users/jiwon/Desktop/Capston/triplej-fe/src/assets/img/PickinCheck.svg";
import { ReactComponent as Indicator1Activate } from "/Users/jiwon/Desktop/Capston/triplej-fe/src/assets/icon/PageIndicator1Activate.svg";
import { ReactComponent as Indicator1Disabled } from "/Users/jiwon/Desktop/Capston/triplej-fe/src/assets/icon/PageIndicator1Disabled.svg";
import { ReactComponent as Indicator2Activate } from "/Users/jiwon/Desktop/Capston/triplej-fe/src/assets/icon/PageIndicator2Activate.svg";
import { ReactComponent as Indicator2Disabled } from "/Users/jiwon/Desktop/Capston/triplej-fe/src/assets/icon/PageIndicator2Disabled.svg";
import Button from "../../../components/Button";

const Join = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [status, setStatus] = useState("default");

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

  const nationalityOptions = [
    { value: "kr", label: "South Korea" },
    { value: "us", label: "United States" },
    { value: "cn", label: "China" },
    { value: "jp", label: "Japan" },
    { value: "fr", label: "France" },
    { value: "de", label: "Germany" },
    { value: "uk", label: "United Kingdom" },
    { value: "in", label: "India" },
    { value: "br", label: "Brazil" },
    { value: "ca", label: "Canada" },
    { value: "ru", label: "Russia" },
    { value: "au", label: "Australia" },
  ];

  const languageOptions = [
    { value: "en", label: "English" },
    { value: "ko", label: "Korean" },
    { value: "zh", label: "Chinese (Mandarin)" },
    { value: "es", label: "Spanish" },
    { value: "fr", label: "French" },
    { value: "de", label: "German" },
    { value: "ja", label: "Japanese" },
    { value: "ru", label: "Russian" },
    { value: "ar", label: "Arabic" },
    { value: "hi", label: "Hindi" },
    { value: "pt", label: "Portuguese" },
    { value: "it", label: "Italian" },
    { value: "nl", label: "Dutch" },
    { value: "sv", label: "Swedish" },
    { value: "tr", label: "Turkish" },
    { value: "vi", label: "Vietnamese" },
    { value: "th", label: "Thai" },
    { value: "pl", label: "Polish" },
    { value: "uk", label: "Ukrainian" },
    { value: "he", label: "Hebrew" },
  ];

  return (
    <div>
      <Header />
      <Wrapper>
        <JoinBox>
          <PickinCheck />
          <div>
            <TitleContainer>
              <Title>
                환영합니다!
                <br />
                Pickin'을 시작하기 위한 계정을 생성해주세요.
              </Title>
              <IndicatorContainer>
                <Indicator1Activate />
                <Indicator2Disabled />
              </IndicatorContainer>
            </TitleContainer>
            <InputContainer>
              <Card>
                <InputBox
                  label="이름"
                  placeholder={"Name"}
                  size="short"
                  status={status}
                  onChange={handleInputChange}
                ></InputBox>
                <InputBox
                  label="성"
                  placeholder={"Family Name"}
                  size="short"
                  status={status}
                  onChange={handleInputChange}
                ></InputBox>
              </Card>
              <Card>
                <Dropdown
                  label="국적"
                  placeholder="Nationality"
                  size="short"
                  status="default"
                  options={nationalityOptions}
                ></Dropdown>
                <Dropdown
                  label="제 1언어"
                  placeholder="First Language"
                  size="short"
                  status="default"
                  options={languageOptions}
                ></Dropdown>
              </Card>
              <div>
                <InputBox
                  label="이메일"
                  placeholder={"ex) pickin@gmail.com"}
                  size="long"
                  status={status}
                  onChange={handleInputChange}
                ></InputBox>
              </div>
              <div>
                <InputBox
                  label="이메일 중복 체크"
                  placeholder={"ex) pickin@gmail.com"}
                  size="long"
                  status={status}
                  onChange={handleInputChange}
                ></InputBox>
              </div>
              <div>
                <InputBox
                  label="비밀번호"
                  placeholder={"최소 12~18자/영문, 숫자 혼합"}
                  size="long"
                  status={status}
                  onChange={handleInputChange}
                ></InputBox>
              </div>
            </InputContainer>
            <ButtonWrapper>
              <Button type="fill" status="default" size="large">
                다음으로
              </Button>
            </ButtonWrapper>
          </div>
        </JoinBox>
      </Wrapper>
      {/* <InputBox
        placeholder={"Name"}
        size="long"
        status={status}
        onChange={handleInputChange}
      ></InputBox>
      <Dropdown
        placeholder="Select an option"
        size="long"
        status={status}
        options={options}
        onChange={handleSelectChange}
      /> */}
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
