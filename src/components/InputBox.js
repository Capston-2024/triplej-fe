import styled from "styled-components";
import { useState } from "react";
import { ReactComponent as CancelIcon } from "/Users/jiwon/Desktop/Capston/triplej-fe/src/assets/icon/Cancel.svg";
import font from "/Users/jiwon/Desktop/Capston/triplej-fe/src/styles/fonts.js";

const InputBox = ({
  placeholder,
  size = "short",
  status = "default",
  onChange,
  ...props
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
    if (onChange) onChange(e.target.value);
  };

  const handleClear = () => {
    setInputValue("");
    if (onChange) onChange("");
  };

  return (
    <InputBoxContainer>
      <InputStyle
        placeholder={placeholder}
        size={size}
        status={status}
        value={inputValue}
        onChange={handleChange}
      />
      {inputValue && (
        <ClearButton onClick={handleClear}>
          <CancelIcon />
        </ClearButton>
      )}
    </InputBoxContainer>
  );
};
export default InputBox;

const InputBoxContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const InputStyle = styled.input`
  width: ${({ size }) => (size === "short" ? "340px" : "458px")};
  padding: 16px;
  border-radius: 12px;
  border: ${({ status }) =>
    status === "default" ? "1px solid #E4E7EC" : "#FF3B30"};

  font-size: ${font.body3Title.fontSize};
  color: #1d2939;
  font-weight: ${font.body3Title.fontWeight};
  line-height: ${font.body3Title.lineHeight};
  letter-spacing: ${font.body3Title.letterSpacing};

  &:focus {
    border-color: ${({ status }) =>
      status === "error" ? "#FF3B30" : "#0098ff"};
  }
  &::placeholder {
    font-size: ${font.body3Title.fontSize};
    color: #98a2b3;
    font-weight: ${font.body3Title.fontWeight};
    line-height: ${font.body3Title.lineHeight};
    letter-spacing: ${font.body3Title.letterSpacing};
  }
`;

const ClearButton = styled.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
