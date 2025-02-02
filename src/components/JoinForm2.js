import styled from "styled-components";
import { useState } from "react";
import Dropdown from "./Dropdown";
import {
  educationLevelOptions,
  majorOptions,
  topikLevelOptions,
  universityOptions,
  visaOptions,
} from "../constants/options";

const JoinForm2 = () => {
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
        <Dropdown
          label="최종학력"
          placeholder="Final degree name"
          size="short"
          status="default"
          options={educationLevelOptions}
        ></Dropdown>
        <Dropdown
          label="대학교"
          placeholder="University"
          size="short"
          status="default"
          options={universityOptions}
        ></Dropdown>
      </Card>
      <div>
        <Dropdown
          label="전공"
          placeholder={"Field of study and major"}
          size="long"
          status={status}
          options={majorOptions}
        ></Dropdown>
      </div>
      <Card>
        <Dropdown
          label="현재 소유 비자"
          placeholder="Visa"
          size="short"
          status="default"
          options={visaOptions}
        ></Dropdown>
        <Dropdown
          label="TOPIK 등급"
          placeholder="TOPIK"
          size="short"
          status="default"
          options={topikLevelOptions}
        ></Dropdown>
      </Card>
    </InputContainer>
  );
};
export default JoinForm2;

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
