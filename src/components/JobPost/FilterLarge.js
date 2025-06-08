import { useState } from "react";
import styled from "styled-components";
import font from "../../styles/fonts.js";
import { ReactComponent as JobIcon } from "../../assets/icon/Job.svg";
import { ReactComponent as JobTypeIcon } from "../../assets/icon/JobType.svg";
import { ReactComponent as VisaTypeIcon } from "../../assets/icon/VisaType.svg";
import { ReactComponent as WorkLocationIcon } from "../../assets/icon/WorkLocation.svg";
import { ReactComponent as LanguageIcon } from "../../assets/icon/Language.svg";
import { ReactComponent as ArrowIcon } from "../../assets/icon/ArrowDown.svg";
import { visaSelectOptions } from "../../constants/options";

const iconMap = {
  job: { icon: <JobIcon />, text: "직무" },
  jobtype: { icon: <JobTypeIcon />, text: "채용 형태" },
  visatype: { icon: <VisaTypeIcon />, text: "비자" },
  worklocation: { icon: <WorkLocationIcon />, text: "근무 지역" },
  language: { icon: <LanguageIcon />, text: "언어" },
};

const FilterLarge = ({ type, onSelect, options = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const { icon, text } = iconMap[type] || { icon: null, text: "추천순" };

  const handleToggle = () => setIsOpen((prev) => !prev);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    onSelect?.(type, option.value);
  };

  return (
    <Container>
      <Wrapper>
        <Type>
          {icon}
          {text}
        </Type>
        <ArrowIcon onClick={handleToggle} />
        {isOpen && (
          <Dropdown>
            {options.map((option) => (
              <Option key={option} onClick={() => handleSelect(option)}>
                {option.label}
              </Option>
            ))}
          </Dropdown>
        )}
      </Wrapper>
    </Container>
  );
};

export default FilterLarge;

const Container = styled.div`
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  gap: 12px;
  border-radius: 8px;
  color: ${(props) => props.theme.colors.text.normal};
  background-color: ${(props) => props.theme.colors.background.white};
  font-size: ${font.body2Title.fontSize};
  font-weight: ${font.body2Title.fontWeight};
  line-height: ${font.body2Title.lineHeight};
  letter-spacing: ${font.body2Title.letterSpacing};
  &:hover {
    border-color: ${(props) => props.theme.colors.primary.normal};
  }
`;

const Type = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Dropdown = styled.div`
  position: absolute;
  width: 100%;
  top: 100%;
  left: 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-top: 8px;
  padding: 8px 0;
  z-index: 10;
`;

const Option = styled.li`
  list-style: none;
  padding: 8px 13px;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;
