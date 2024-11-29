import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <NavContainer>
      <NavMenu>
        <NavItem>
          <StyledLink to="/">Pickin'</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/job-postings">채용 공고</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/">취업 가이드</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/">커뮤니티</StyledLink>
        </NavItem>
      </NavMenu>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 70px;
  background-color: #b2efe6;
`;

const NavMenu = styled.ul`
  display: flex;
  gap: 70px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li``;

const StyledLink = styled(Link)`
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  color: #000;

  &:hover {
    color: #ffffff;
  }
`;
