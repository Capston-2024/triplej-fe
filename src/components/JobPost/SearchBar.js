import styled from "styled-components";
import font from "/Users/jiwon/Desktop/Capston/triplej-fe/src/styles/fonts.js";
import FilterLarge from "./FilterLarge";
import FilterBoxModal from "./FilterBoxModal";
import { jobOptions } from "../../constants/options";

const SearchBar = () => {
  return (
    <Wrapper>
      <FilterContainer>
        <FilterLarge type="job" />
        <FilterLarge type="jobtype" />
        <FilterLarge type="visatype" />
        <FilterLarge type="worklocation" />
        <FilterLarge type="language" />
      </FilterContainer>
      <FilterLarge />
    </Wrapper>
  );
};

export default SearchBar;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-radius: 12px;
  background-color: ${(props) => props.theme.colors.background.blue};
  width: 100%;
  height: 49px;
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 12px;
`;
