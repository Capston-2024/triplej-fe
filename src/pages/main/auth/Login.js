import styled from "styled-components";
import Header from "../../../components/Header";
import font from "/Users/jiwon/Desktop/Capston/triplej-fe/src/styles/fonts.js";

const Login = () => {
  return (
    <div>
      <Header />
      <Wrapper>
        <LoginBox>
          <Title>
            Pickin'과 함께 나의 커리어를 <br /> 시작해보아요!
          </Title>
          <Card>
            <LoginContent>
              <LoginForm>
                <div>
                  <FormField>
                    <Label>이메일</Label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="이메일을 입력해주세요."
                    />
                  </FormField>
                  <FormField>
                    <Label>비밀번호</Label>
                    <Input
                      type="password"
                      name="password"
                      placeholder="비밀번호를 입력해주세요."
                    />
                  </FormField>
                  <LoginButton>로그인</LoginButton>
                </div>
                <div>
                  <Divider>계정이 없으신가요?</Divider>
                  <JoinButton>이메일로 회원가입하기</JoinButton>
                </div>
              </LoginForm>
            </LoginContent>
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
`;

const LoginBox = styled.div`
  width: 520px;
  height: 610px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
`;

const Title = styled.div`
  text-align: center;
  color: #1d2939;
  font-size: ${font.headline2.fontSize};
  font-weight: ${font.headline2.fontWeight};
  line-height: ${font.headline2.lineHeight};
  letter-spacing: ${font.headline2.letterSpacing};
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  border-radius: 20px;
`;

const LoginContent = styled.div`
  height: 100%;
  padding: 48px 90px;
`;

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 34px;
`;

const Label = styled.div`
  color: #1d2939;
  font-size: ${font.body3Title.fontSize};
  font-weight: ${font.body3Title.fontWeight};
  line-height: ${font.body3Title.lineHeight};
  letter-spacing: ${font.body3Title.letterSpacing};
`;

const Input = styled.input`
  padding: 16px;
  border: 1px solid #e4e7ec;
  border-radius: 12px;
`;

const LoginButton = styled.button`
  width: 100%;
  height: 56px;
  background-color: #0098ff;
  border: none;
  border-radius: 12px;
  margin-top: 6px;
  padding: 17px 104px;
  color: #ffffff;
  font-size: ${font.body3Title.fontSize};
  font-weight: ${font.body3Title.fontWeight};
  line-height: ${font.body3Title.lineHeight};
  letter-spacing: ${font.body3Title.letterSpacing};
`;

const JoinButton = styled.button`
  width: 100%;
  height: 56px;
  border: 1px solid #e4e7ec;
  margin-top: 16px;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 17px 80px;
  color: #667085;
  font-size: ${font.body3Title.fontSize};
  font-weight: ${font.body3Title.fontWeight};
  line-height: ${font.body3Title.lineHeight};
  letter-spacing: ${font.body3Title.letterSpacing};
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  color: #667085;
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
