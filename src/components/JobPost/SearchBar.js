import styled from "styled-components";
import font from "/Users/jiwon/Desktop/Capston/triplej-fe/src/styles/fonts.js";
import FilterLarge from "./FilterLarge";
import FilterBoxModal from "./FilterBoxModal";
import {
  jobOptions,
  languageOptions,
  visaSelectOptions,
} from "../../constants/options";

const SearchBar = ({ onFilterChange }) => {
  const handleSelect = (type, value) => {
    onFilterChange(type, value);
  };
  return (
    <Wrapper>
      <FilterContainer>
        <FilterLarge type="job" options={jobOptions} onSelect={handleSelect} />
        {/* <FilterLarge
          type="jobtype"
          options={jobOptions}
          onSelect={handleSelect}
        /> */}
        <FilterLarge
          type="visatype"
          options={visaSelectOptions}
          onSelect={handleSelect}
        />
        {/* <FilterLarge type="worklocation" onSelect={handleSelect} /> */}
        <FilterLarge
          type="language"
          options={languageOptions}
          onSelect={handleSelect}
        />
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
  height: 49px;
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 12px;
`;
