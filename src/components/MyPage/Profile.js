import styled from "styled-components";
import { useState, useEffect } from "react";
import { ReactComponent as Graphic } from "../../assets/ProfileGraphic.svg";
import { ReactComponent as Write } from "../../assets/icon/Write.svg";
import font from "../../styles/fonts.js";

const Profile = ({ setIsEditing, email }) => {
  
  // 백 API 연결
  const [userInfo, setUserInfo] = useState(null)
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch(
          `https://f581-3-38-102-95.ngrok-free.app/user-info?email=${encodeURIComponent(
            email         )}`,
          {
            method: "GET",
            headers: {
              "ngrok-skip-browser-warning": "true",
            },
          }
        );
        console.log("response", response)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
           }
          
        console.log("respone", response)

        const result = await response.json();
        console.log("서버 응답 데이터:", result); // 🔍 콘솔에서 데이터 확인

        if (result.statusCode === 200) {
        setUserInfo(result.data);
        } else {
          console.error("데이터 로드 실패:", result.message);
        }
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    fetchUserInfo();
   }, [email]);

   if (!userInfo) {
    return <div>로딩 중...</div>;
  }
  return (
    <Wrapper>
      <TopCard>
        <Info>
          <Graphic />
          <div>
            <Name>{`${userInfo.firstName || ''} ${userInfo.lastName || ''}`}</Name>
            <Mail>{userInfo.email || ''}</Mail>
          </div>
        </Info>
        <EditButton onClick={() => setIsEditing(true)}>
          회원정보 수정하기
          <Write />
        </EditButton>
      </TopCard>
      <BottomCard>
        <Card>
          <Section>
            <Label>국적</Label>
            <Content>{userInfo.nationality || "정보 없음"}</Content>
          </Section>
          <Section>
            <Label>제1언어</Label>
            <Content>{userInfo.language || "정보 없음"}</Content>
          </Section>
        </Card>
        <Card>
          <Section>
            <Label>최종학력</Label>
            <Content>{userInfo.degree || "정보 없음"}</Content>
          </Section>
          <Section>
            <Label>대학</Label>
            <Content>{userInfo.college || "정보 없음"}</Content>
          </Section>
          <Section>
            <Label>전공</Label>
            <Content>{userInfo.major || "정보 없음"}</Content>
          </Section>
        </Card>
        <Card>
          <Section>
            <Label>현재 소유 비자</Label>
            <Content>{userInfo.visa ? userInfo.visa.split(" (")[0] : "정보 없음"}</Content>
          </Section>
          <Section>
            <Label>TOPIK 등급</Label>
            <Content>{userInfo.topik ? userInfo.topik.replace(/[^0-9]/g, "") : "정보 없음"}</Content>
          </Section>
        </Card>
      </BottomCard>
    </Wrapper>
  );
};
export default Profile;

const Wrapper = styled.div`
  padding: 80px 90px;
  border-radius: 20px;
  width: 610px;
  height: 550px;
  background-color: ${(props) => props.theme.colors.background.white};
`;

const TopCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 38px;
  height: 80px;
  border-bottom: 1px solid ${(props) => props.theme.colors.line.normal};
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

const Name = styled.div`
  padding-bottom: 4px;
  color: ${(props) => props.theme.colors.text.normal};
  font-size: ${font.headline1.fontSize};
  font-weight: ${font.headline1.fontWeight};
  line-height: ${font.headline1.lineHeight};
  letter-spacing: ${font.headline1.letterSpacing};
`;

const Mail = styled.div`
  color: ${(props) => props.theme.colors.text.assistive};
  font-size: ${font.body1Title.fontSize};
  font-weight: ${font.body1Title.fontWeight};
  line-height: ${font.body1Title.lineHeight};
  letter-spacing: ${font.body1Title.letterSpacing};
`;

const EditButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 12px;
  gap: 8px;
  width: 173px;
  border: 1px solid ${(props) => props.theme.colors.line.normal};
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.background.white};
  color: ${(props) => props.theme.colors.primary.normal};
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
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 160px;
`;

const Label = styled.div`
  color: ${(props) => props.theme.colors.text.assistive};
  font-size: ${font.body3Normal.fontSize};
  font-weight: ${font.body3Normal.fontWeight};
  line-height: ${font.body3Normal.lineHeight};
  letter-spacing: ${font.body3Normal.letterSpacing};
`;

const Content = styled.div`
  color: ${(props) => props.theme.colors.text.normal};
  font-size: ${font.headline4.fontSize};
  font-weight: ${font.headline4.fontWeight};
  line-height: ${font.headline4.lineHeight};
  letter-spacing: ${font.headline4.letterSpacing};
`;
