import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: sticky;
  top: 0;
  background-color: #4d4f65;
  z-index: 999;
  padding: 1.5rem 30rem;
`;

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  font-family: logoFont;
  font-size: 1.8rem;
  width: 20%;
  cursor: pointer;
`;

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
`;

export const NavList = styled.div`
  cursor: pointer;
  font-weight: 700;
  font-size: 1.5rem;
`;
