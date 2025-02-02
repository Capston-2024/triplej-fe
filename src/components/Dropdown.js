import styled from "styled-components";
import { useState } from "react";
import DropDown from "react-dropdown";
import "react-dropdown/style.css";
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

  const handleChange = (option) => {
    setSelectedValue(option);
    if (onChange) onChange(option.value);
  };

  return (
    <DropdownContainer
      size={size}
      status={status}
      selectedValue={selectedValue}
    >
      <Label>
        {label}
        <span>*</span>
      </Label>
      <DropdownWrapper>
        <DropDown
          options={options}
          onChange={handleChange}
          value={selectedValue}
          placeholder={placeholder}
          className="custom-dropdown"
        />
        <CustomArrow />
      </DropdownWrapper>
    </DropdownContainer>
  );
};
export default Dropdown;

const DropdownContainer = styled.div`
  .custom-dropdown .Dropdown-control {
    padding: 16px;
    width: ${({ size }) => (size === "short" ? "340px" : "458px")};
    height: 54px;
    color: ${({ selectedValue }) =>
      selectedValue
        ? (props) => props.theme.colors.text.normal
        : (props) => props.theme.colors.text.disable};
    font-size: ${font.body3Normal.fontSize};
    font-size: ${font.body3Normal.fontSize};
    font-weight: ${font.body3Normal.fontWeight};
    line-height: ${font.body3Normal.lineHeight};
    letter-spacing: ${font.body3Normal.letterSpacing};
    border: 1px solid ${(props) => props.theme.colors.line.normal};
    border-radius: 12px;
    &:focus,
    &:hover,
    &.is-open {
      border-color: #0098ff;
      border-width: 2px;
    }
  }

  .custom-dropdown .Dropdown-arrow-wrapper {
    display: none;
  }

  .custom-dropdown .Dropdown-menu {
    padding: 8px;
    color: ${(props) => props.theme.colors.text.normal};
    font-size: ${font.body3Normal.fontSize};
    font-weight: ${font.body3Normal.fontWeight};
    line-height: ${font.body3Normal.lineHeight};
    letter-spacing: ${font.body3Normal.letterSpacing};
    border: 1px solid ${(props) => props.theme.colors.line.normal};
    border-radius: 12px;
  }

  .custom-dropdown .Dropdown-option {
    display: flex;
    align-items: center;
    padding: 12px 10px;
    border-radius: 8px;
    height: 46px;
  }

  .custom-dropdown .Dropdown-option:hover {
    background-color: ${(props) => props.theme.colors.background.light};
  }
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

const DropdownWrapper = styled.div`
  position: relative;
`;

const CustomArrow = styled(Arrow)`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
`;
