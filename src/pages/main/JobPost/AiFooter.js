import styled from "styled-components";
import font from "/Users/jiwon/Desktop/Capston/triplej-fe/src/styles/fonts.js";
import Button from "../../../components/Button";
import Balloon from "../../../components/Balloon";

const AiFooter = () => {
  return (
    <Container>
      <Content>
        <Balloon />
        <ButtonBox>
          <div>
            <Button type="outline" status="default" size="ai">
              AI 첨삭 요청하기
            </Button>
          </div>
          <RightButton>
            <Button type="outline" status="default" size="ai">
              임시저장
            </Button>
            <Button type="fill" status="default" size="ai">
              지원하기
            </Button>
          </RightButton>
        </ButtonBox>
      </Content>
    </Container>
  );
};

export default AiFooter;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${(props) => props.theme.colors.background.white};
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1100px;
  height: 116px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
  width: 100%;
`;

const RightButton = styled.div`
  display: flex;
  gap: 20px;
`;
