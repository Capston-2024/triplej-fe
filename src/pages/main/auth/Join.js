import styled from "styled-components";
import Header from "../../../components/Header";
import InputBox from "../../../components/InputBox";
import { useState } from "react";

const Join = () => {
  const [inputValue, setInputValue] = useState("");
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
    <div>
      <Header />
      <InputBox
        placeholder={"Name"}
        size="long"
        status={status}
        onChange={handleInputChange}
      ></InputBox>
    </div>
  );
};
export default Join;
