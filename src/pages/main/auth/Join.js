import styled from "styled-components";
import Header from "../../../components/Header";
import InputBox from "../../../components/InputBox";
import { useState } from "react";
import Dropdown from "../../../components/Dropdown";

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

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <div>
      <Header />
      <InputBox
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
      />
    </div>
  );
};
export default Join;
