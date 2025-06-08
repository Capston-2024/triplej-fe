import styled from "styled-components";
import font from "../../../styles/fonts.js";
import { useState } from "react";
import { ReactComponent as PickinCheck } from "../../../assets/img/PickinCheck.svg";
import { ReactComponent as Indicator1Activate } from "../../../assets/icon/PageIndicator1Activate.svg";
import { ReactComponent as Indicator1Disabled } from "../../../assets/icon/PageIndicator1Disabled.svg";
import { ReactComponent as Indicator2Activate } from "../../../assets/icon/PageIndicator2Activate.svg";
import { ReactComponent as Indicator2Disabled } from "../../../assets/icon/PageIndicator2Disabled.svg";
import Button from "../../../components/Button";
import JoinForm1 from "../../../components/Auth/JoinForm1";
import JoinForm2 from "../../../components/Auth/JoinForm2";
import { useNavigate } from "react-router-dom";

const Join = () => {
  const [status, setStatus] = useState("default");
  const [currentStep, setCurrentStep] = useState(1);
  const [confirmEmail, setConfirmEmail] = useState("");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    nationality: "",
    language: "",
    degree: "",
    college: "",
    major: "",
    visa: "",
    topik: "",
  });

  const handleButtonClick = () => {
    const requiredFieldsStep1 = [
      "firstName",
      "lastName",
      "nationality",
      "language",
      "email",
      "password",
    ];
    const requiredFieldsStep2 = ["degree", "college", "major", "visa", "topik"];

    const emptyFields = (
      currentStep === 1 ? requiredFieldsStep1 : requiredFieldsStep2
    ).filter((field) => !formData[field]);

    if (emptyFields.length > 0) {
      alert("필수 입력값을 모두 입력해주세요.");
      setStatus("error");
      return;
    }

    if (currentStep === 1 && formData.email !== confirmEmail) {
      alert("이메일이 일치하지 않습니다.");
      return;
    }

    if (currentStep === 1) {
      setCurrentStep(2);
    } else {
      const userKey = `${formData.firstName || "default"}`;
      localStorage.setItem(userKey, JSON.stringify(formData));
      alert("회원가입이 완료되었습니다.");
      navigate("/joinComplete");
    }
  };

  // const handleButtonClick = async () => {
  //   const requiredFieldsStep1 = [
  //     "firstName",
  //     "lastName",
  //     "nationality",
  //     "language",
  //     "email",
  //     "password",
  //   ];
  //   const requiredFieldsStep2 = ["degree", "college", "major", "visa", "topik"];

  //   const emptyFields = (
  //     currentStep === 1 ? requiredFieldsStep1 : requiredFieldsStep2
  //   ).filter((field) => !formData[field]);

  //   if (emptyFields.length > 0) {
  //     alert("필수 입력값을 모두 입력해주세요.");
  //     setStatus("error");
  //     return;
  //   }

  //   if (currentStep === 1 && formData.email !== confirmEmail) {
  //     alert("이메일이 일치하지 않습니다.");
  //     return;
  //   }

  //   if (currentStep === 1) {
  //     setCurrentStep(2);
  //   } else {
  //     const formattedData = {
  //       email: String(formData.email || "").trim(),
  //       password: String(formData.password || "").trim(),
  //       firstName: String(formData.firstName || "").trim(),
  //       lastName: String(formData.lastName || "").trim(),
  //       nationality: String(formData.nationality || "").trim(),
  //       language: String(formData.language || "").trim(),
  //       degree: String(formData.degree || "").trim(),
  //       college: String(formData.college || "").trim(),
  //       major: String(formData.major || "").trim(),
  //       visa: String(formData.visa || "").trim(),
  //       topik: String(formData.topik || "").trim(),
  //     };

  //     console.log("전송할 데이터:", formattedData);
  //     try {
  //       const response = await fetch(
  //         "https://bd2a-1-242-152-73.ngrok-free.app/sign-up",
  //         {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify(formattedData),
  //         }
  //       );

  //       const data = await response.json();

  //       if (response.ok) {
  //         alert("회원가입이 완료되었습니다.");
  //         navigate("/joinComplete");
  //       } else {
  //         alert(data.message || "회원가입 실패");
  //       }
  //     } catch (error) {
  //       console.error("회원가입 요청 중 오류 발생:", error);
  //       alert("서버와의 연결이 원활하지 않습니다.");
  //     }
  //   }
  // };

  return (
    <div>
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
                    이화 님 안녕하세요!
                    <br />
                    기업에 공개할 이력을 작성해주세요.
                  </>
                )}
              </Title>
              <IndicatorContainer>
                {currentStep === 1 ? (
                  <Indicator1Activate />
                ) : (
                  <Indicator1Disabled onClick={() => setCurrentStep(1)} />
                )}
                {currentStep === 2 ? (
                  <Indicator2Activate />
                ) : (
                  <Indicator2Disabled onClick={() => setCurrentStep(2)} />
                )}
              </IndicatorContainer>
            </TitleContainer>
            {currentStep === 1 && (
              <JoinForm1
                formData={formData}
                setFormData={setFormData}
                confirmEmail={confirmEmail}
                setConfirmEmail={setConfirmEmail}
              />
            )}
            {currentStep === 2 && (
              <JoinForm2 formData={formData} setFormData={setFormData} />
            )}
            <ButtonWrapper>
              <Button
                type="fill"
                status="default"
                size="large"
                onClick={handleButtonClick}
              >
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
  background-color: ${(props) => props.theme.colors.background.white};
`;

const JoinBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 700px;
  height: 932px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  color: ${(props) => props.theme.colors.text.normal};
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

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
`;
