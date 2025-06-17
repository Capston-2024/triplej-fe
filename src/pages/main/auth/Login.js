import styled from "styled-components";
import font from "../../../styles/fonts.js";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import InputBox from "../../../components/InputBox";

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("default");
  const [errorMessage, setErrorMessage] = useState("");

  //const handleLogin = () => {
  //  const allUsers = { ...localStorage };
  //  let foundUser = null;

  //  Object.values(allUsers).forEach((userData) => {
  //    const user = JSON.parse(userData);
  
  //if (user.email === email) {
  //      foundUser = user;
  //    }
  //  });

  //  if (foundUser && foundUser.password === password) {
  //    localStorage.setItem("user", JSON.stringify(foundUser));
  //    onLogin(foundUser);
  //    navigate("/");
  //  } else {
  //    setStatus("error");
  //  }
  //};

  const handleLogin = async () => {
     try {
     const response = await fetch(
       "https://0214-1-242-152-73.ngrok-free.app/login",
       {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({
           email: email,
           password: password,
         }),
       }
     );

       const data = await response.json();

       if (response.ok) {
         localStorage.setItem("user", email);
         navigate("/");
       } else {
         setStatus("error");
         setErrorMessage(data.message || "로그인 실패");
       }
     } catch (error) {
       console.error("로그인 요청 중 오류 발생:", error);
       setStatus("error");
       setErrorMessage("서버와의 연결이 원활하지 않습니다.");
     }
   };

  const handleJoin = () => {
    navigate("/join");
  };

  return (
    <div>
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormField>
              <FormField>
                <InputBox
                  label="비밀번호"
                  type="password"
                  placeholder={"비밀번호를 입력해주세요."}
                  size="short"
                  status={status}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormField>
              <Button
                type="fill"
                status="default"
                marginTop="6px"
                onClick={handleLogin}
              >
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
