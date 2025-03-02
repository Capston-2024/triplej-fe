import styled from "styled-components";
import { useState } from "react";
import { ReactComponent as CancelIcon } from "/Users/jiwon/Desktop/Capston/triplej-fe/src/assets/icon/Cancel.svg";
import font from "/Users/jiwon/Desktop/Capston/triplej-fe/src/styles/fonts.js";

const InputBox = ({
  label,
  placeholder,
  size = "short",
  status = "default",
  value = "",
  required = false,
  onChange,
  ...props
}) => {
  const handleChange = (e) => {
    if (onChange) onChange(e);
  };

  const handleClear = () => {
    if (onChange) onChange({ target: { name: props.name, value: "" } });
  };

  return (
    <div>
      <Label>
        {label}
        {required && <span>*</span>}
      </Label>
      <InputBoxContainer>
        <InputStyle
          {...props}
          placeholder={placeholder}
          size={size}
          status={status}
          value={value}
          onChange={handleChange}
        />
        {value && (
          <ClearButton onClick={handleClear}>
            <CancelIcon />
          </ClearButton>
        )}
      </InputBoxContainer>
    </div>
  );
};
export default InputBox;

const Label = styled.div`
  margin-bottom: 8px;
  color: ${(props) => props.theme.colors.text.normal};
  font-size: ${font.body3Title.fontSize};
  font-weight: ${font.body3Title.fontWeight};
  line-height: ${font.body3Title.lineHeight};
  letter-spacing: ${font.body3Title.letterSpacing};
  span {
    color: ${(props) => props.theme.colors.primary.normal};
    margin-left: 2px;
  }
`;

const InputBoxContainer = styled.div`
  display: inline-block;
  position: relative;
`;

const InputStyle = styled.input`
  padding: 16px;
  border-radius: 12px;
  border: ${({ status }) =>
    status === "default" ? "1px solid #E4E7EC" : "#FF3B30"};
  width: ${({ size }) => (size === "short" ? "308px" : "426px")};
  color: ${(props) => props.theme.colors.text.normal};
  font-size: ${font.body3Title.fontSize};
  font-weight: ${font.body3Title.fontWeight};
  line-height: ${font.body3Title.lineHeight};
  letter-spacing: ${font.body3Title.letterSpacing};
  &:focus {
    border-color: ${({ status }) =>
      status === "error" ? "#FF3B30" : "#0098ff"};
  }
  &::placeholder {
    color: ${(props) => props.theme.colors.text.disable};
    font-size: ${font.body3Normal.fontSize};
    font-weight: ${font.body3Normal.fontWeight};
    line-height: ${font.body3Normal.lineHeight};
    letter-spacing: ${font.body3Normal.letterSpacing};
  }
`;

const ClearButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;
