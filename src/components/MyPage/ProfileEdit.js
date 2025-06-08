import styled from "styled-components";
import Button from "../Button";
import font from "../../styles/fonts.js";
import JoinForm2 from "../Auth/JoinForm2";
import InputBox from "../InputBox";

const ProfileEdit = () => {
  return (
    <Wrapper>
      <Title>프로필 수정하기</Title>
      <JoinForm2 />
      <Divider />
      <InputBox
        label="변경할 비밀번호"
        placeholder={"최소 12~18자/영문, 숫자 혼합"}
        size="long"
      />
      <ButtonContainer>
        <Button type="fill" status="disabled" size="large" marginTop="100px">
          수정 완료
        </Button>
      </ButtonContainer>
    </Wrapper>
  );
};
export default ProfileEdit;

const Wrapper = styled.div`
  padding: 48px 45px 80px;
  border-radius: 20px;
  width: 700px;
  background-color: ${(props) => props.theme.colors.background.white};
`;

const Title = styled.div`
  color: ${(props) => props.theme.colors.text.normal};
  font-size: ${font.headline2.fontSize};
  font-weight: ${font.headline2.fontWeight};
  line-height: ${font.headline2.lineHeight};
  letter-spacing: ${font.headline2.letterSpacing};
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.colors.line.normal};
  margin: 52px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
