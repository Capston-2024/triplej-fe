import styled from "styled-components";
import font from "../../styles/fonts.js";

const MyPageNavigationBar = ({ selectedSection, setSelectedSection }) => {
  return (
    <Container>
      {["프로필", "지원 현황", "저장한 공고"].map((section) => (
        <Section
          key={section}
          onClick={() => setSelectedSection(section)}
          isSelected={selectedSection === section}
        >
          {section}
        </Section>
      ))}
    </Container>
  );
};
export default MyPageNavigationBar;

const Container = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  margin-right: 20px;
  padding: 8px;
  gap: 8px;
  width: 234px;
  height: 264px;
  background-color: ${(props) => props.theme.colors.background.white};
  border-radius: 12px;
`;

const Section = styled.div`
  padding: 16px 0 16px 20px;
  cursor: pointer;
  border-radius: 8px;
  height: 28px;
  background-color: ${({ isSelected, theme }) =>
    isSelected
      ? theme.colors.background.normal
      : theme.colors.background.white};
  color: ${(props) => props.theme.colors.text.normal};
  font-size: ${font.headline4.fontSize};
  font-weight: ${font.headline4.fontWeight};
  line-height: ${font.headline4.lineHeight};
  letter-spacing: ${font.headline4.letterSpacing};
`;
