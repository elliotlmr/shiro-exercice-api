import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Header = styled.header`
  height: 30vh;
  width: 100vw;
  background-color: #f9c448;
`;

const NavContainer = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuNav = styled(NavLink)`
  font-size: 5rem;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  text-decoration: none;
  color: #0e0e0e;
`;

export default function Layout() {
  return (
    <Header>
      <NavContainer>
        <MenuNav to="/beers">Choose your beer !</MenuNav>
      </NavContainer>
    </Header>
  );
}
