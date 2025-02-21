import styled from "styled-components";
import font from "/Users/jiwon/Desktop/Capston/triplej-fe/src/styles/fonts.js";
import { ReactComponent as FilterIcon } from "/Users/jiwon/Desktop/Capston/triplej-fe/src/assets/icon/Filter.svg";
import { ReactComponent as ArrowIcon } from "/Users/jiwon/Desktop/Capston/triplej-fe/src/assets/icon/ArrowDown.svg";

const FilterSmall = () => {
  return (
    <Wrapper>
      <FilterIcon />
      <div>추천순</div>
      <ArrowIcon />
    </Wrapper>
  );
};

export default FilterSmall;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border: 1px solid ${(props) => props.theme.colors.line.normal};
  border-radius: 8px;
  color: ${(props) => props.theme.colors.text.normal};
  font-size: ${font.body3Normal.fontSize};
  font-weight: ${font.body3Normal.fontWeight};
  line-height: ${font.body3Normal.lineHeight};
  letter-spacing: ${font.body3Normal.letterSpacing};
  &:hover {
    border-color: ${(props) => props.theme.colors.primary.normal};
  }
`;
