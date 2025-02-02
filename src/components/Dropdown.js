import styled from "styled-components";
import { useState } from "react";
import font from "/Users/jiwon/Desktop/Capston/triplej-fe/src/styles/fonts.js";
import { ReactComponent as Arrow } from "/Users/jiwon/Desktop/Capston/triplej-fe/src/assets/icon/ArrowDown.svg";

const Dropdown = ({
  label,
  placeholder,
  size = "short",
  status = "default",
  options = [],
  onChange,
  ...props
}) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    if (onChange) onChange(e.target.value);
  };
  return (
    <div>
      <Label>
        {label}
        <span>*</span>
      </Label>
      <DropdownBoxContainer>
        <SelectStyle
          size={size}
          status={status}
          value={selectedValue}
          onChange={handleChange}
          {...props}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </SelectStyle>
      </DropdownBoxContainer>
    </div>
  );
};
export default Dropdown;

const DropdownBoxContainer = styled.div`
  position: relative;
  display: inline-block;
`;

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

const SelectStyle = styled.select`
  padding: 16px;
  border-radius: 12px;
  width: ${({ size }) => (size === "short" ? "340px" : "458px")};
  border: ${({ status }) =>
    status === "default" ? "1px solid #E4E7EC" : "#FF3B30"};
  color: ${(props) => props.theme.colors.text.normal};
  font-size: ${font.body3Title.fontSize};
  font-weight: ${font.body3Title.fontWeight};
  line-height: ${font.body3Title.lineHeight};
  letter-spacing: ${font.body3Title.letterSpacing};

  &:focus {
    border-color: ${({ status }) =>
      status === "error" ? "#FF3B30" : "#0098ff"};
  }
`;
