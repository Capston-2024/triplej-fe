import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import font from "/Users/jiwon/Desktop/Capston/triplej-fe/src/styles/fonts.js";
import AiFooter from "./AiFooter";
import { useLocation } from "react-router-dom";

const Apply = () => {
  const location = useLocation();
  const companyName = location.state?.companyName || "회사";
  const [inputText, setInputText] = useState("");
  const textareaRef = useRef(null);

  const calculateByteLength = (text) => {
    return new TextEncoder().encode(text).length;
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.scrollTop = textareaRef.current.scrollHeight;
    }
  }, [inputText]);

  const byteLength = calculateByteLength(inputText);

  return (
    <div>
      <Container>
        <Wrapper>
          <Content>
            <TitleBox>
              <Title>자기소개서</Title>
              <SubBox>
                <SubTitle>
                  {companyName}에 자신을 소개하는 글을 작성해주세요.
                </SubTitle>
                {/* <Date>마지막 수정 2024.05.12</Date> */}
              </SubBox>
            </TitleBox>
            <InputWrapper>
              <InputField
                ref={textareaRef}
                placeholder="자기소개서를 작성해주세요."
                value={inputText}
                onChange={handleInputChange}
              />
              <ByteCounter>
                {byteLength}/{3000} byte
              </ByteCounter>
            </InputWrapper>
          </Content>
        </Wrapper>
      </Container>
      <AiFooter />
    </div>
  );
};

export default Apply;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Wrapper = styled.div`
  width: 1100px;
`;

const Content = styled.div`
  padding: 80px 200px;
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

const Date = styled.div`
  color: ${(props) => props.theme.colors.text.disable};
  font-size: ${font.body4Normal.fontSize};
  font-weight: ${font.body4Normal.fontWeight};
  line-height: ${font.body4Normal.lineHeight};
  letter-spacing: ${font.body4Normal.letterSpacing};
`;

const SubBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const InputField = styled.textarea`
  width: 652px;
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

const ByteCounter = styled.div`
  position: absolute;
  bottom: 24px;
  right: 24px;
  color: ${(props) => props.theme.colors.text.disable};
  font-size: ${font.body3Normal.fontSize};
  font-weight: ${font.body3Normal.fontWeight};
  line-height: ${font.body3Normal.lineHeight};
  letter-spacing: ${font.body3Normal.letterSpacing};
`;
