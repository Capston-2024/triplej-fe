import styled from "styled-components";
import { useState } from "react";
import Dropdown from "../../components/Dropdown.js";
import InputBox from "../../components/InputBox.js";
import { languageOptions, nationalityOptions } from "../../constants/options";

const JoinForm1 = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [status, setStatus] = useState("default");

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
    <InputContainer>
      <Card>
        <InputBox
          label="이름"
          placeholder={"Name"}
          size="short"
          status={status}
          required="true"
          onChange={handleInputChange}
        ></InputBox>
        <InputBox
          label="성"
          placeholder={"Family Name"}
          size="short"
          status={status}
          required="true"
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
          required="true"
          onChange={handleInputChange}
        ></InputBox>
      </div>
      <div>
        <InputBox
          label="이메일 중복 체크"
          placeholder={"ex) pickin@gmail.com"}
          size="long"
          status={status}
          required="true"
          onChange={handleInputChange}
        ></InputBox>
      </div>
      <div>
        <InputBox
          label="비밀번호"
          placeholder={"최소 12~18자/영문, 숫자 혼합"}
          size="long"
          status={status}
          required="true"
          onChange={handleInputChange}
        ></InputBox>
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
