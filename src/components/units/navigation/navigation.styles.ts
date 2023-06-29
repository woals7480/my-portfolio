import { mq } from "@/styles/globalStyle";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const menubarDown = keyframes`
0% {
  transform: translateY(-5%);
}

100% {
  transform: translateY(0);
}`;

export const Wrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 999;
  padding: 1.5rem 0;
  background-color: #4d4f65;

  ${mq[1]} {
    background-color: green;
  }

  ${mq[0]} {
    background-color: #4d4f65;
  }
`;

export const NavWrapper = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
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

  ${mq[0]} {
    width: 0%;
    display: none;
  }
`;
export const NavList = styled.div`
  cursor: pointer;
  font-weight: 700;
  font-size: 1.5rem;
  font-family: logoFont;
`;

export const MobileNav = styled.div`
  display: none;
  ${mq[0]} {
    display: block;
    position: relative;
  }
`;

export const MobileNavListUl = styled.ul`
  width: 20rem;
  position: absolute;
  right: -3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  background-color: #4d4f65;
  border-radius: 1rem;
  animation: ${menubarDown} 0.4s ease-out;
`;

export const MobileNavListLi = styled.li`
  cursor: pointer;
  font-weight: 700;
  font-size: 1.5rem;
  font-family: logoFont;
  list-style: none;
  padding: 1rem 3rem 1rem 0rem;
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
