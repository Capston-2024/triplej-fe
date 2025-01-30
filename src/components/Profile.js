import styled from "styled-components";
import { ReactComponent as Graphic } from "/Users/jiwon/Desktop/Capston/triplej-fe/src/assets/Graphic.svg";
import { ReactComponent as Write } from "/Users/jiwon/Desktop/Capston/triplej-fe/src/assets/icon/Write.svg";
import font from "/Users/jiwon/Desktop/Capston/triplej-fe/src/styles/fonts.js";

const Profile = () => {
  return (
    <Wrapper>
      <TopCard>
        <Info>
          <Graphic />
          <div>
            <Name>Sarah Weiss</Name>
            <Mail>pickin@gmail.com</Mail>
          </div>
        </Info>
        <EditButton>
          회원정보 수정하기
          <Write />
        </EditButton>
      </TopCard>
      <BottomCard>
        <Card>
          <Section>
            <Label>국적</Label>
            <Content>영국</Content>
          </Section>
          <Section>
            <Label>제1언어</Label>
            <Content>German</Content>
          </Section>
        </Card>
        <Card>
          <Section>
            <Label>최종학력</Label>
            <Content>학사</Content>
          </Section>
          <Section>
            <Label>대학</Label>
            <Content>서울가톨릭대학교</Content>
          </Section>
          <Section>
            <Label>전공</Label>
            <Content>컴퓨터공학과</Content>
          </Section>
        </Card>
        <Card>
          <Section>
            <Label>현재 소유 비자</Label>
            <Content>D2</Content>
          </Section>
          <Section>
            <Label>TOPIK 등급</Label>
            <Content>5</Content>
          </Section>
        </Card>
      </BottomCard>
    </Wrapper>
  );
};
export default Profile;

const Wrapper = styled.div`
  width: 790px;
  height: 550px;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 80px 90px;
`;

const TopCard = styled.div`
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 38px;
  border-bottom: 1px solid #e4e7ec;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
`;

const Name = styled.div`
  color: #1d2939;
  font-size: ${font.headline1.fontSize};
  font-weight: ${font.headline1.fontWeight};
  line-height: ${font.headline1.lineHeight};
  letter-spacing: ${font.headline1.letterSpacing};
  padding-bottom: 4px;
`;

const Mail = styled.div`
  color: #667085;
  font-size: ${font.body1Title.fontSize};
  font-weight: ${font.body1Title.fontWeight};
  line-height: ${font.body1Title.lineHeight};
  letter-spacing: ${font.body1Title.letterSpacing};
`;

const EditButton = styled.button`
  width: 173px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border: 1px solid #e4e7ec;
  border-radius: 8px;
  background-color: #ffffff;
  color: #0098ff;
  font-size: ${font.body3Normal.fontSize};
  font-weight: ${font.body3Normal.fontWeight};
  line-height: ${font.body3Normal.lineHeight};
  letter-spacing: ${font.body3Normal.letterSpacing};
`;

const BottomCard = styled.div`
  padding-top: 38px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding-bottom: 40px;
`;

const Section = styled.div`
  width: 160px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.div`
  color: #667085;
  font-size: ${font.body3Normal.fontSize};
  font-weight: ${font.body3Normal.fontWeight};
  line-height: ${font.body3Normal.lineHeight};
  letter-spacing: ${font.body3Normal.letterSpacing};
`;

const Content = styled.div`
  color: #1d2939;
  font-size: ${font.headline4.fontSize};
  font-weight: ${font.headline4.fontWeight};
  line-height: ${font.headline4.lineHeight};
  letter-spacing: ${font.headline4.letterSpacing};
`;
