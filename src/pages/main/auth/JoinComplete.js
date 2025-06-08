import Button from "../../../components/Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const JoinComplete = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  const handleHome = () => {
    navigate("/");
  };

  return (
    <Wrapper>
      <Graphic></Graphic>
      <Button type="fill" status="default" onClick={handleLogin}>
        로그인하기
      </Button>
      <Button
        type="outline"
        status="default"
        marginTop="12px"
        onClick={handleHome}
      >
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
  margin-bottom: 160px;
`;

const Graphic = styled.div`
  margin-top: 160px;
  margin-bottom: 60px;
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.theme.colors.text.normal};
  border-radius: 200px;
`;
