import styled from "styled-components";
import Header from "../../../components/Header";
import font from "/Users/jiwon/Desktop/Capston/triplej-fe/src/styles/fonts.js";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import InputBox from "../../../components/InputBox";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [status, setStatus] = useState("default");

  const handleJoin = () => {
    navigate("/join");
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
        <LoginBox>
          <Title>
            Pickin'과 함께 나의 커리어를 <br /> 시작해보아요!
          </Title>
          <Card>
            <div>
              <FormField>
                <InputBox
                  label="이메일"
                  placeholder={"이메일을 입력해주세요."}
                  size="short"
                  status={status}
                  onChange={handleInputChange}
                ></InputBox>
              </FormField>
              <FormField>
                <InputBox
                  label="비밀번호"
                  placeholder={"비밀번호를 입력해주세요."}
                  size="short"
                  status={status}
                  onChange={handleInputChange}
                ></InputBox>
              </FormField>
              <Button type="fill" status="default" marginTop="6px">
                로그인
              </Button>
            </div>
            <div>
              <Divider>계정이 없으신가요?</Divider>
              <Button
                type="outline"
                status="default"
                marginTop="16px"
                onClick={handleJoin}
              >
                이메일로 회원가입하기
              </Button>
            </div>
          </Card>
        </LoginBox>
      </Wrapper>
    </div>
  );
};
export default Login;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
  padding-bottom: 120px;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 340px;
  height: 610px;
`;

const Title = styled.div`
  text-align: center;
  color: ${(props) => props.theme.colors.text.normal};
  font-size: ${font.headline2.fontSize};
  font-weight: ${font.headline2.fontWeight};
  line-height: ${font.headline2.lineHeight};
  letter-spacing: ${font.headline2.letterSpacing};
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
  width: 100%;
  height: 100%;
  padding: 48px 90px;
  background-color: ${(props) => props.theme.colors.background.white};
  border-radius: 20px;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 34px;
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  color: ${(props) => props.theme.colors.text.assistive};
  font-size: ${font.caption1.fontSize};
  font-weight: ${font.caption1.fontWeight};
  line-height: ${font.caption1.lineHeight};
  letter-spacing: ${font.caption1.letterSpacing};

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid #e4e7ec;
  }
  &::before {
    margin-right: 8px;
  }
  &::after {
    margin-left: 8px;
  }
`;
