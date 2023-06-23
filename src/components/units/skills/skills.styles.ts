import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const shake = keyframes`
    0%{transform: translateY(0.5rem)}
    100%{transform: translateY(-0.5rem)}
`;

export const Wrapper = styled.div`
  padding: 10rem 7rem;
  text-align: center;
  background-color: gold;
`;

export const SkillsWrapper = styled.div`
  width: 90rem;
  margin: 5rem auto;
  padding: 2rem;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  background-color: white;
`;

export const SkillsTitle = styled.h1`
  display: inline;
  font-family: titleFont;
  font-size: 4rem;
  border-bottom: 0.3rem solid gray;
  padding-bottom: 1rem;
`;

export const SkillsImage = styled.img`
  height: 8rem;
  margin: 1rem;
  :hover {
    animation: ${shake} 0.7s;
  }
`;
