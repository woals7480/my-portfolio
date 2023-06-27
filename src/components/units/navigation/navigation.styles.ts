import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: sticky;
  top: 0;
  background-color: #4d4f65;
  z-index: 999;
  padding: 1.5rem 20rem;
`;

export const NavWrapper = styled.div`
  width: 100%;
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
  width: 45%;
`;

export const NavList = styled.div`
  cursor: pointer;
  font-weight: 700;
  font-size: 1.5rem;
  font-family: logoFont;
`;

export const TopButton = styled.button`
  width: 3rem;
  height: 3rem;
  border-radius: 1rem;
  border: 0.3rem solid gray;
  position: fixed;
  top: 90vh;
  right: 1vw;
  cursor: pointer;
  background-color: rgba(219, 219, 219, 0.8);
  font-size: 1.1rem;
  font-weight: bold;
  color: #514d4c;
`;
