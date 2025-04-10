import styled from "styled-components";
import font from "/Users/jiwon/Desktop/Capston/triplej-fe/src/styles/fonts.js";
import LikablePost from "../../../components/JobPost/LikablePost";
import HomePostCard from "../../../components/Home/HomePostCard";
import SearchBar from "../../../components/JobPost/SearchBar";
import { dummyPosts } from "../../../constants/mockData";
import FilterBoxModal from "../../../components/JobPost/FilterBoxModal";
import {
  jobOptions,
  visaOptions,
  visaSelectOptions,
} from "../../../constants/options";
import { useState } from "react";

const JobPost = ({ isLoggedIn }) => {
  const [posts] = useState(dummyPosts);
  const [filters, setFilters] = useState({}); // 선택된 필터

  const handleFilterChange = (type, value) => {
    setFilters((prev) => ({ ...prev, [type]: value }));
  };

  // 필터링된 포스트
  const filteredPosts = posts.filter((post) => {
    if (filters.visatype) {
      // post.visatype은 문자열 또는 배열이라고 가정
      return post.visas?.includes(filters.visatype);
    }
    return true;
  });
  return (
    <div>
      <Container>
        <Content>
          <LikablePost posts={posts} />
          <Divider />
          <SearchContainer>
            채용 공고 상세 검색하기
            <SearchBar onFilterChange={handleFilterChange} />
          </SearchContainer>
          {/* 모달테스트용 여기서부터 */}
          {/* <Test>
            <FilterBoxModal
              size="large"
              title="직무"
              options={jobOptions}
              onApply={(selected) => console.log("선택된 옵션:", selected)}
            />

            <FilterBoxModal
              size="small"
              title="비자"
              options={visaSelectOptions}
              onApply={(selected) => console.log("선택된 옵션:", selected)}
            />
          </Test> */}
          {/* 모달테스트용 여기까지 */}
          <CardWrapper>
            {filteredPosts.map((post) => (
              <HomePostCard key={post.id} isLoggedIn={isLoggedIn} post={post} />
            ))}
          </CardWrapper>
        </Content>
      </Container>
    </div>
  );
};
export default JobPost;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Content = styled.div`
  width: 1100px;
  padding: 40px 20px;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.colors.line.normal};
  margin-top: 48px;
  margin-bottom: 48px;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 40px;
  color: ${(props) => props.theme.colors.text.normal};
  font-size: ${font.headline4.fontSize};
  font-weight: ${font.headline4.fontWeight};
  line-height: ${font.headline4.lineHeight};
  letter-spacing: ${font.headline4.letterSpacing};
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

// 모달테스트용
const Test = styled.div`
  display: flex;
  justify-content: space-between;
`;
