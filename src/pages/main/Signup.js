import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import styled from "styled-components";
import logo from "../../assets/PickinLogo.png";
import Select from "react-select";

const Signup = () => {
  const nationalityOptions = [
    { value: "korea", label: "대한민국" },
    { value: "usa", label: "미국" },
    { value: "japan", label: "일본" },
    { value: "china", label: "중국" },
    { value: "canada", label: "캐나다" },
    { value: "germany", label: "독일" },
    { value: "france", label: "프랑스" },
    { value: "italy", label: "이탈리아" },
    { value: "spain", label: "스페인" },
    { value: "russia", label: "러시아" },
    { value: "uk", label: "영국" },
    { value: "brazil", label: "브라질" },
    { value: "india", label: "인도" },
    { value: "australia", label: "호주" },
    { value: "mexico", label: "멕시코" },
    { value: "south_africa", label: "남아프리카공화국" },
    { value: "egypt", label: "이집트" },
    { value: "saudi_arabia", label: "사우디아라비아" },
    { value: "argentina", label: "아르헨티나" },
    { value: "turkey", label: "터키" },
    { value: "vietnam", label: "베트남" },
    { value: "thailand", label: "태국" },
    { value: "sweden", label: "스웨덴" },
    { value: "norway", label: "노르웨이" },
    { value: "finland", label: "핀란드" },
    { value: "netherlands", label: "네덜란드" },
    { value: "denmark", label: "덴마크" },
    { value: "switzerland", label: "스위스" },
    { value: "austria", label: "오스트리아" },
    { value: "belgium", label: "벨기에" },
    { value: "poland", label: "폴란드" },
    { value: "czech_republic", label: "체코" },
    { value: "hungary", label: "헝가리" },
    { value: "portugal", label: "포르투갈" },
    { value: "new_zealand", label: "뉴질랜드" },
    { value: "indonesia", label: "인도네시아" },
    { value: "philippines", label: "필리핀" },
    { value: "malaysia", label: "말레이시아" },
    { value: "pakistan", label: "파키스탄" },
    { value: "bangladesh", label: "방글라데시" },
    { value: "nigeria", label: "나이지리아" },
    { value: "kenya", label: "케냐" },
    { value: "ethiopia", label: "에티오피아" },
    { value: "ghana", label: "가나" },
    { value: "colombia", label: "콜롬비아" },
    { value: "chile", label: "칠레" },
    { value: "peru", label: "페루" },
    { value: "venezuela", label: "베네수엘라" },
    { value: "iran", label: "이란" },
    { value: "iraq", label: "이라크" },
    { value: "israel", label: "이스라엘" },
    { value: "uae", label: "아랍에미리트" },
    { value: "qatar", label: "카타르" },
    { value: "singapore", label: "싱가포르" },
    { value: "hong_kong", label: "홍콩" },
    { value: "taiwan", label: "대만" },
    { value: "south_korea", label: "남한" },
  ];

  const educationOptions = [
    { value: "highschool", label: "고등학교" },
    { value: "bachelor", label: "학사" },
    { value: "master", label: "석사" },
    { value: "doctorate", label: "박사" },
    { value: "associate", label: "전문대" },
    { value: "none", label: "없음" },
  ];

  const visaOptions = [
    { value: "F2", label: "거주 비자 (F-2)" },
    { value: "F4", label: "재외동포 비자 (F-4)" },
    { value: "F5", label: "영주 비자 (F-5)" },
    { value: "F6", label: "결혼이민 비자 (F-6)" },
    { value: "E2", label: "회화지도 비자 (E-2)" },
    { value: "E7", label: "특정활동 비자 (E-7)" },
    { value: "D2", label: "유학 비자 (D-2)" },
    { value: "D4", label: "일반연수 비자 (D-4)" },
    { value: "D8", label: "기업투자 비자 (D-8)" },
    { value: "D10", label: "구직 비자 (D-10)" },
    { value: "H1", label: "워킹홀리데이 비자 (H-1)" },
    { value: "H2", label: "방문취업 비자 (H-2)" },
    { value: "C3", label: "단기방문 비자 (C-3)" },
    { value: "G1", label: "기타 비자 (G-1)" },
  ];

  const topikOptions = [
    { value: "level1", label: "TOPIK 1급 (초급)" },
    { value: "level2", label: "TOPIK 2급 (초급)" },
    { value: "level3", label: "TOPIK 3급 (중급)" },
    { value: "level4", label: "TOPIK 4급 (중급)" },
    { value: "level5", label: "TOPIK 5급 (고급)" },
    { value: "level6", label: "TOPIK 6급 (고급)" },
  ];

  const majorOptions = [
    { value: "engineering", label: "공학" },
    { value: "computer_science", label: "컴퓨터공학/IT" },
    { value: "business", label: "경영학" },
    { value: "economics", label: "경제학" },
    { value: "medicine", label: "의학" },
    { value: "nursing", label: "간호학" },
    { value: "law", label: "법학" },
    { value: "education", label: "교육학" },
    { value: "psychology", label: "심리학" },
    { value: "social_science", label: "사회과학" },
    { value: "humanities", label: "인문학" },
    { value: "arts", label: "예술/디자인" },
    { value: "architecture", label: "건축학" },
    { value: "natural_sciences", label: "자연과학" },
    { value: "biology", label: "생물학" },
    { value: "physics", label: "물리학" },
    { value: "chemistry", label: "화학" },
    { value: "mathematics", label: "수학" },
    { value: "environmental_science", label: "환경학" },
    { value: "agriculture", label: "농학" },
    { value: "sports", label: "체육학" },
    { value: "communications", label: "커뮤니케이션/미디어" },
    { value: "linguistics", label: "언어학" },
    { value: "philosophy", label: "철학" },
    { value: "history", label: "역사학" },
    { value: "political_science", label: "정치학" },
    { value: "international_relations", label: "국제관계학" },
  ];

  return (
    <MainWrapper>
      <Header />
      <Navbar />
      <Container>
        <JoinBox>
          <div>
            <LogoContainer>
              <Title>Join Us !</Title>
              <Logo src={logo} alt="Pickin Logo" />
            </LogoContainer>
          </div>

          <div>
            <Field>
              <Label>이메일</Label>
              <Input type="email" name="email" placeholder="이메일 입력" />
            </Field>
            <Field>
              <Label>비밀번호</Label>
              <Input
                type="password"
                name="password"
                placeholder="최소 12자~최대 18자"
              />
            </Field>
            <Field>
              <Label>비밀번호 확인</Label>
              <Input
                type="password"
                name="password"
                placeholder="비밀번호 재입력"
              />
            </Field>
            <Field>
              <Label>이름</Label>
              <Input
                type="text"
                name="name"
                placeholder="이름을 입력해주세요"
              />
            </Field>
            <Field>
              <Label>국적</Label>
              <Select options={nationalityOptions} placeholder="국적 선택" />
            </Field>
            <Field>
              <Label>최종학력</Label>
              <Select options={educationOptions} placeholder="최종 학력" />
            </Field>
            <Field>
              <Label>전공</Label>
              <Select options={majorOptions} placeholder="전공 선택" />
            </Field>
            <Field>
              <Label>현재 소유 비자</Label>
              <Select options={visaOptions} placeholder="현재 소유 비자" />
            </Field>
            <Field>
              <Label>TOPIK 등급</Label>
              <Select options={topikOptions} placeholder="TOPIK 등급" />
            </Field>
            <Field>
              <Label>관심 태그</Label>
              <Input
                type="text"
                name="interestTags"
                placeholder="쉼표로 구분해주세요"
              />
            </Field>
            <ButtonContainer>
              <JoinButton type="submit">회원가입</JoinButton>
            </ButtonContainer>
          </div>
        </JoinBox>
      </Container>
    </MainWrapper>
  );
};

export default Signup;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f9f9f9;
`;

const Container = styled.div`
  padding: 40px 500px;
  background-color: #f9f9f9;
  flex-grow: 1;
  border-radius: 8px;
`;

const JoinBox = styled.div`
  background-color: #e0f7fa;
  padding: 0px 80px;
  border-radius: 10px;
`;

const Field = styled.div`
  margin-bottom: 20px;
  align-items: center;
`;

const Label = styled.div`
  width: 120px;
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const Input = styled.input`
  width: 650px;
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 4px;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
`;

const Title = styled.p`
  font-size: 50px;
  font-weight: 900;
  color: #b2efe6;
  text-shadow: -3px -3px 0 black, 1px -1px 0 black, -1px 1px 0 black,
    1px 1px 0 black;
`;

const Logo = styled.img`
  width: 60px;
  height: 60px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const JoinButton = styled.button`
  width: 400px;
  margin-top: 30px;
  margin-bottom: 150px;
  padding: 16px 24px;
  font-size: 20px;
  font-family: "Pretendard", sans-serif;
  border: none;
  border-radius: 10px;
  background-color: #ffffff;
  cursor: pointer;

  &:hover {
    background-color: #b2efe6;
  }
`;
