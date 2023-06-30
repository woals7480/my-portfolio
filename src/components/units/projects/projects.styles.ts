import { mq } from "@/styles/globalStyle";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 90%;
  padding: 10rem 7rem;
  text-align: center;
  border-top: 0.2rem dashed gray;
  margin: 7rem auto;

  ${mq[1]} {
    padding: 8rem 5rem;
  }

  ${mq[0]} {
    padding: 5rem 1rem;
  }
`;

export const ProjectsTitle = styled.h1`
  display: inline;
  font-family: titleFont;
  font-size: 4rem;
  border-bottom: 1px solid gray;
  padding-bottom: 1rem;
`;

export const ProjectWrapper = styled.div`
  margin-top: 5rem;
`;

export const ProjectTitle = styled.h3`
  font-size: 3rem;
`;
