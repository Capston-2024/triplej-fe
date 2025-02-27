import { useState } from "react";
import styled from "styled-components";
import font from "/Users/jiwon/Desktop/Capston/triplej-fe/src/styles/fonts.js";
import { ReactComponent as JobIcon } from "/Users/jiwon/Desktop/Capston/triplej-fe/src/assets/icon/Job.svg";
import { ReactComponent as JobTypeIcon } from "/Users/jiwon/Desktop/Capston/triplej-fe/src/assets/icon/JobType.svg";
import { ReactComponent as VisaTypeIcon } from "/Users/jiwon/Desktop/Capston/triplej-fe/src/assets/icon/VisaType.svg";
import { ReactComponent as WorkLocationIcon } from "/Users/jiwon/Desktop/Capston/triplej-fe/src/assets/icon/WorkLocation.svg";
import { ReactComponent as LanguageIcon } from "/Users/jiwon/Desktop/Capston/triplej-fe/src/assets/icon/Language.svg";
import { ReactComponent as ArrowIcon } from "/Users/jiwon/Desktop/Capston/triplej-fe/src/assets/icon/ArrowDown.svg";
import FilterBoxModal from "./FilterBoxModal";
import { jobOptions } from "../../constants/options";

const iconMap = {
  job: { icon: <JobIcon />, text: "직무" },
  jobtype: { icon: <JobTypeIcon />, text: "채용 형태" },
  visatype: { icon: <VisaTypeIcon />, text: "비자" },
  worklocation: { icon: <WorkLocationIcon />, text: "근무 지역" },
  language: { icon: <LanguageIcon />, text: "언어" },
};

const FilterLarge = ({ type }) => {
  const { icon, text } = iconMap[type] || { icon: null, text: "추천순" };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <Wrapper>
      <Type>
        {icon}
        {text}
      </Type>
      <ArrowIcon onClick={handleOpenModal} />
    </Wrapper>
  );
};

export default FilterLarge;

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
