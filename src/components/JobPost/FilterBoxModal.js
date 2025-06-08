import { useState } from "react";
import styled from "styled-components";
import font from "../../styles/fonts.js";
import { ReactComponent as ResetIcon } from "../../assets/icon/Reset.svg";
import { ReactComponent as DeleteIcon } from "../../assets/icon/Delete.svg";
import Button from "../Button";

const FilterBoxModal = ({ size = "large", title, options, onApply }) => {
  const [selectedOptions, setSelectedOptions] = useState(
    options.length > 0 ? [options[0].label] : []
  );

  const handleSelectOption = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option]
    );
  };

  const handleDelete = (optionToRemove) => {
    setSelectedOptions((prev) => {
      const updatedOptions = prev.filter((option) => option !== optionToRemove);
      return updatedOptions.length === 0 && options.length > 0
        ? [options[0].label]
        : updatedOptions;
    });
  };

  const handleReset = () => {
    setSelectedOptions(options.length > 0 ? [options[0].label] : []);
  };

  const handleApply = () => {
    if (selectedOptions.length === 0 && options.length > 0) {
      setSelectedOptions([options[0].label]);
    }
    onApply(selectedOptions);
  };
  return (
    <Wrapper size={size}>
      <Content size={size}>
        <Left size={size}>
          {options.map((option) => (
            <Option
              key={option.value}
              onClick={() => handleSelectOption(option.label)}
              isSelected={selectedOptions.includes(option.label)}
            >
              {option.label}
            </Option>
          ))}
        </Left>
        {/* size가 large일 때의 오른쪽 추후 개발 예정 */}
        {size !== "small" && (
          <>
            <Divider />
            <div></div>
          </>
        )}
      </Content>
      {size !== "small" && (
        <SelectedSpace>
          {selectedOptions.map((option, index) => (
            <SelectedOption key={index}>
              {option}
              <DeleteIcon onClick={() => handleDelete(option)} />
            </SelectedOption>
          ))}
        </SelectedSpace>
      )}
      <BottomContainer>
        <Reset>
          <ResetIcon onClick={handleReset} />
          초기화
        </Reset>
        <Button type="fill" size="small" onClick={handleApply}>
          적용하기
        </Button>
      </BottomContainer>
    </Wrapper>
  );
};

export default FilterBoxModal;

const Wrapper = styled.div`
  width: ${({ size }) => (size === "large" ? "484px" : "272px")};
  background-color: white;
  border-radius: 12px;
`;

const Content = styled.div`
  display: flex;
  height: ${({ size }) => (size === "small" ? "254px" : "268px")};
  overflow-y: auto;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 16px 0px 16px;
  width: ${({ size }) => (size === "small" ? "240px" : "180px")};
`;

const Divider = styled.div`
  width: 1px;
  height: auto;
  background-color: ${(props) => props.theme.colors.line.normal};
`;

const Option = styled.div`
  padding: 12px 10px;
  border-radius: 8px;
  color: ${(props) => props.theme.colors.text.normal};
  font-size: ${font.body3Title.fontSize};
  font-weight: ${font.body3Title.fontWeight};
  line-height: ${font.body3Title.lineHeight};
  letter-spacing: ${font.body3Title.letterSpacing};
  cursor: pointer;
  &:hover {
    background-color: #fafbfc;
  }
`;

const SelectedSpace = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px;
  min-height: 40px;
  border-top: 1px solid ${(props) => props.theme.colors.line.normal};
`;

const SelectedOption = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 6px 10px;
  border-radius: 8px;
  gap: 8px;
  background-color: ${(props) => props.theme.colors.background.blue};
  color: ${(props) => props.theme.colors.text.normal};
  font-size: ${font.body3Normal.fontSize};
  font-weight: ${font.body3Normal.fontWeight};
  line-height: ${font.body3Normal.lineHeight};
  letter-spacing: ${font.body3Normal.letterSpacing};
  width: auto;
  height: 28px;
`;

const Reset = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  color: ${(props) => props.theme.colors.text.normal};
  font-size: ${font.body3Normal.fontSize};
  font-weight: ${font.body3Normal.fontWeight};
  line-height: ${font.body3Normal.lineHeight};
  letter-spacing: ${font.body3Normal.letterSpacing};
`;

const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-top: 1px solid ${(props) => props.theme.colors.line.normal};
`;
