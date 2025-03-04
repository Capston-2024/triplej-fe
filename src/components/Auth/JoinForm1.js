import styled from "styled-components";
import { useState } from "react";
import Dropdown from "../../components/Dropdown.js";
import InputBox from "../../components/InputBox.js";
import { languageOptions, nationalityOptions } from "../../constants/options";

const JoinForm1 = ({
  formData,
  setFormData,
  confirmEmail,
  setConfirmEmail,
}) => {
  const [status, setStatus] = useState("default");

  const handleInputChange = (e) => {
    if (e.target && e.target.name) {
      const { name, value } = e.target;
      setFormData((prev) => {
        const newData = { ...prev, [name]: value };
        return newData;
      });
    }
  };

  const handleConfirmEmailChange = (e) => {
    const value = e.target.value;
    setConfirmEmail(value);
  };

  const isEmailMatch = formData.email === confirmEmail;

  return (
    <InputContainer>
      <Card>
        <InputBox
          label="이름"
          name="firstName"
          placeholder={"Name"}
          size="short"
          status={status}
          required="true"
          value={formData.firstName}
          onChange={handleInputChange}
        />
        <InputBox
          label="성"
          name="lastName"
          placeholder={"Family Name"}
          size="short"
          status={status}
          required="true"
          value={formData.lastName}
          onChange={handleInputChange}
        />
      </Card>
      <Card>
        <Dropdown
          label="국적"
          placeholder="Nationality"
          size="short"
          status="default"
          options={nationalityOptions}
          value={formData.nationality}
          onChange={(value) =>
            handleInputChange({ target: { name: "nationality", value } })
          }
        />
        <Dropdown
          label="제 1언어"
          placeholder="First Language"
          size="short"
          status="default"
          options={languageOptions}
          value={formData.language}
          onChange={(value) =>
            handleInputChange({ target: { name: "language", value } })
          }
        />
      </Card>
      <div>
        <InputBox
          label="이메일"
          name="email"
          placeholder={"ex) pickin@gmail.com"}
          size="long"
          status={status}
          required="true"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <InputBox
          label="이메일 중복 체크"
          placeholder={"ex) pickin@gmail.com"}
          size="long"
          status={
            confirmEmail === "" ? "default" : isEmailMatch ? "default" : "error"
          }
          required={true}
          value={confirmEmail}
          onChange={handleConfirmEmailChange}
        />
      </div>
      <div>
        <InputBox
          label="비밀번호"
          type="password"
          name="password"
          placeholder={"최소 12~18자/영문, 숫자 혼합"}
          size="long"
          status={status}
          required="true"
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>
    </InputContainer>
  );
};
export default JoinForm1;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 60px;
  gap: 40px;
`;

const Card = styled.div`
  display: flex;
  justify-content: space-between;
`;
