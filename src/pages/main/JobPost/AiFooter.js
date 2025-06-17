import styled from "styled-components";
import font from "../../../styles/fonts.js";
import { ReactComponent as AIicon } from "../../../assets/icon/AI.svg";
import Button from "../../../components/Button";
import Balloon from "../../../components/Balloon";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AiFooter = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleFeedback = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/feedback");
    }, 3000);
  };

  const handleApply = () => {
    navigate("/");
  };
  return (
    <>
      {loading && (
        <Overlay>
          <AnimationBox>
            <AIicon />
            <LoadingText>
              <strong>AI가 글을 첨삭하고 있어요!</strong>
              <br />
              잠시만 기다려주세요
            </LoadingText>
          </AnimationBox>
        </Overlay>
      )}
      <Container>
        <Content>
          <Balloon />
          <ButtonBox>
            <div>
              <Button
                onClick={handleFeedback}
                type="outline"
                status="default"
                size="ai"
              >
                AI 첨삭 요청하기
              </Button>
            </div>
            <RightButton>
              <Button type="outline" status="default" size="ai">
                임시저장
              </Button>
              <Button
                type="fill"
                status="default"
                size="ai"
                onClick={handleApply}
              >
                지원하기
              </Button>
            </RightButton>
          </ButtonBox>
        </Content>
      </Container>
    </>
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
position: relative;
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

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  background: rgba(30, 30, 30, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AnimationBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoadingText = styled.div`
  margin-top: 16px;
  text-align: center;
  color: ${(props) => props.theme.colors.background.white};
  font-size: ${font.headline4.fontSize};
  font-weight: ${font.headline4.fontWeight};
  line-height: ${font.headline4.lineHeight};
  letter-spacing: ${font.headline4.letterSpacing};
`;
