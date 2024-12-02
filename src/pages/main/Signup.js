import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import styled from "styled-components";
import logo from "../../assets/PickinLogo.png";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import {
  educationOptions,
  majorOptions,
  nationalityOptions,
  tagOptions,
  topikOptions,
  visaOptions,
} from "../../data/options";
import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    nationality: "",
    education: "",
    major: "",
    visa: "",
    topikLevel: "",
    interestTags: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSelectChange = (selectedOption, { name }) => {
    setFormData((prevData) => ({ ...prevData, [name]: selectedOption }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    const userData = {
      email: formData.email,
      password: formData.password,
      name: formData.name,
      nationality: formData.nationality?.value,
      education: formData.education?.value,
      major: formData.major?.value,
      visa: formData.visa?.value,
      topik: formData.topikLevel?.value,
      interestTags: formData.interestTags?.value,
    };

    // 백엔드로 전송되는 데이터 콘솔 출력
    console.log("회원가입 데이터:", userData);

    const { name, email, nationality, education, topik, interestTags } = userData;
    const storedData = { name, email, nationality, education, topik, interestTags };
    localStorage.setItem("user", JSON.stringify(storedData));
    console.log("로컬 스토리지에 저장된 데이터:", storedData);

    try {
      const response = await axios.post("http://localhost:3001/signin", {
        userData,
      });

      if (response.status === 201) {
        navigate("/signupcomplete");
      }
    } catch (error) {
      console.error("회원가입 중 오류 발생:", error);
      alert("회원가입 중 오류가 발생했습니다. 다시 시도해 주세요.");
    }
  };

  return (
    <MainWrapper>
      <Header />
      <Navbar />
      <Container>
        <JoinBox>
          <div>
            <LogoContainer>
              <Title>Join Us !</Title>
              <Logo src={logo} alt="Pickin Logo" />
            </LogoContainer>
          </div>

          <form onSubmit={handleSubmit}>
            <Field>
              <Label>이메일</Label>
              <Input
                type="email"
                name="email"
                placeholder="이메일 입력"
                value={formData.email}
                onChange={handleChange}
              />
            </Field>
            <Field>
              <Label>비밀번호</Label>
              <Input
                type="password"
                name="password"
                placeholder="최소 12자~최대 18자"
                value={formData.password}
                onChange={handleChange}
              />
            </Field>
            <Field>
              <Label>비밀번호 확인</Label>
              <Input
                type="password"
                name="confirmPassword"
                placeholder="비밀번호 재입력"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </Field>
            <Field>
              <Label>이름</Label>
              <Input
                type="text"
                name="name"
                placeholder="이름을 입력해주세요"
                value={formData.name}
                onChange={handleChange}
              />
            </Field>
            <Field>
              <Label>국적</Label>
              <Select
                name="nationality"
                options={nationalityOptions}
                placeholder="국적 선택"
                value={formData.nationality}
                onChange={handleSelectChange}
              />
            </Field>
            <Field>
              <Label>최종학력</Label>
              <Select
                name="education"
                options={educationOptions}
                placeholder="최종 학력"
                value={formData.education}
                onChange={handleSelectChange}
              />
            </Field>
            <Field>
              <Label>전공</Label>
              <Select
                name="major"
                options={majorOptions}
                placeholder="전공 선택"
                value={formData.major}
                onChange={handleSelectChange}
              />
            </Field>
            <Field>
              <Label>현재 소유 비자</Label>
              <Select
                name="visa"
                options={visaOptions}
                placeholder="현재 소유 비자"
                value={formData.visa}
                onChange={handleSelectChange}
              />
            </Field>
            <Field>
              <Label>TOPIK 등급</Label>
              <Select
                name="topikLevel"
                options={topikOptions}
                placeholder="TOPIK 등급"
                value={formData.topikLevel}
                onChange={handleSelectChange}
              />
            </Field>
            <Field>
              <Label>관심 태그</Label>
              <Select
                name="interestTags"
                options={tagOptions}
                placeholder="관심 태그"
                value={formData.interestTags}
                onChange={handleSelectChange}
              />
            </Field>
            <ButtonContainer>
              <JoinButton type="submit">회원가입</JoinButton>
            </ButtonContainer>
          </form>
        </JoinBox>
      </Container>
    </MainWrapper>
  );
};

export default Signup;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f9f9f9;
`;

const Container = styled.div`
  padding: 40px 500px;
  background-color: #f9f9f9;
  flex-grow: 1;
  border-radius: 8px;
`;

const JoinBox = styled.div`
  background-color: #e0f7fa;
  padding: 0px 80px;
  border-radius: 10px;
`;

const Field = styled.div`
  margin-bottom: 20px;
  align-items: center;
`;

const Label = styled.div`
  width: 120px;
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const Input = styled.input`
  width: 93%;
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 4px;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
`;

const Title = styled.p`
  font-size: 50px;
  font-weight: 900;
  color: #b2efe6;
  text-shadow: -3px -3px 0 black, 1px -1px 0 black, -1px 1px 0 black,
    1px 1px 0 black;
`;

const Logo = styled.img`
  width: 60px;
  height: 60px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const JoinButton = styled.button`
  width: 400px;
  margin-top: 30px;
  margin-bottom: 150px;
  padding: 16px 24px;
  font-size: 20px;
  font-family: "Pretendard", sans-serif;
  border: none;
  border-radius: 10px;
  background-color: #ffffff;
  cursor: pointer;

  &:hover {
    background-color: #b2efe6;
  }
`;
