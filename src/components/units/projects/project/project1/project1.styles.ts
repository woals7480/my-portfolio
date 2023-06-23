import styled from "@emotion/styled";

export const ProjectWrapper = styled.div`
  width: 90rem;
  height: 50rem;
  margin: 5rem auto;
  border: 0.1rem solid gray;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  background-image: url("/projects/market.png");
  background-size: cover;
  text-align: center;
  position: relative;
`;

export const ProjectBackground = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(#e66465, #ffa2ad);
  opacity: 0.9;
  border-radius: 1rem;
  display: ${(props: { isOver: boolean }) => (props.isOver ? "block" : "none")};
`;

export const ProjectText = styled.div`
  display: ${(props: { isOver: boolean }) => (props.isOver ? "flex" : "none")};
  text-align: center;
  position: absolute;
  top: 7rem;
  left: 50%;
  transform: translateX(-50%);
  flex-direction: column;
`;

export const ProjectTitle = styled.h2`
  z-index: 2;
  font-family: titleFont;
  font-size: 3rem;
`;

export const ProjectDetail = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
`;

export const DetailText = styled.span`
  font-size: 1.5rem;
  line-height: 2.5rem;
  margin-bottom: 3rem;
`;

export const KeyFeatures = styled.span`
  text-align: left;
  font-size: 1.5rem;
  line-height: 2.5rem;
  margin-bottom: 3rem;
`;

export const Skills = styled.span`
  text-align: left;
  font-size: 1.5rem;
  line-height: 2.5rem;
  margin-bottom: 3rem;
`;

export const Readme = styled.button`
  width: 12rem;
  height: 3rem;
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: bold;
  background-color: #e66465;
  color: white;
  cursor: pointer;
`;
