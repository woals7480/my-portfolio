import styled from "@emotion/styled";

export const ProjectWrapper = styled.div`
  width: 90rem;
  height: 50rem;
  margin: 1rem auto;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  background-image: url("/projects/${(props: {
    title: string;
    imgst: string;
  }) => `${props.title}.${props.imgst}`}");
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: center;
  text-align: center;
  position: relative;
`;

export const ProjectBackground = styled.div<{
  isOver: boolean;
  gradient: Array<string>;
}>`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    ${(props) => `${props.gradient[0]},${props.gradient[1]}`}
  );
  opacity: 0.9;
  border-radius: 1rem;
  display: ${(props) => (props.isOver ? "block" : "none")};
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

export const LinkWrapper = styled.div`
  display: flex;
`;

export const Readme = styled.button<{
  backColor: string;
  fontColor?: string;
}>`
  width: 12rem;
  height: 3rem;
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: bold;
  background-color: ${(props) => props.backColor};
  color: ${(props) => (props.fontColor ? props.fontColor : "black")};
  cursor: pointer;
  margin-right: 1rem;
`;

export const Url = styled.button<{
  backColor: string;
  fontColor?: string;
}>`
  width: 5rem;
  height: 3rem;
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: bold;
  background-color: ${(props) => props.backColor};
  color: ${(props) => (props.fontColor ? props.fontColor : "black")};
  cursor: pointer;
`;
