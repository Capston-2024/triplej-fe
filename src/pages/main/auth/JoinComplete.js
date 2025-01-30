import Button from "../../../components/Button";
import Header from "../../../components/Header";
import styled from "styled-components";

const JoinComplete = () => {
  return (
    <Wrapper>
      <Header />
      <Graphic></Graphic>
      <Button type="fill" status="default">
        로그인하기
      </Button>
      <Button type="outline" status="default" marginTop="12px">
        홈으로 가기
      </Button>
    </Wrapper>
  );
};
export default JoinComplete;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Graphic = styled.div`
  width: 300px;
  height: 300px;
  background-color: #1d2939;
  border-radius: 200px;
  margin-top: 160px;
  margin-bottom: 60px;
`;
