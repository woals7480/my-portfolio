import { prefix } from "@/components/commons/config/config";
import { mq } from "@/styles/globalStyle";
import styled from "@emotion/styled";

export const ProjectWrapper = styled.div`
  width: 85%;
  height: 50rem;
  margin: 1rem auto;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  background-image: url("${prefix}/projects/${(props: {
    title: string;
    imgst: string;
  }) => `${props.title}.${props.imgst}`}");
  background-size: cover;
  text-align: center;
  position: relative;

  ${mq[0]} {
    width: 95%;
  }
`;

export const ProjectBackground = styled.div<{
  isOver: boolean;
  gradient: Array<string>;
}>`
  width: 100%;
  height: 100%;
  opacity: 0.9;
  border-radius: 1rem;
  display: ${(props) => (props.isOver ? "block" : "none")};
  background: linear-gradient(
    ${(props) => `${props.gradient[0]},${props.gradient[1]}`}
  );
`;

export const ProjectText = styled.div`
  display: ${(props: { isOver: boolean }) => (props.isOver ? "flex" : "none")};
  text-align: center;
  position: absolute;
  top: 6rem;
  left: 50%;
  transform: translateX(-50%);
  flex-direction: column;
  width: 70%;
  ${mq[1]} {
    top: 5rem;
  }
`;

export const ProjectTitle = styled.h2`
  z-index: 2;
  font-family: titleFont;
  font-size: 3rem;

  ${mq[1]} {
    font-size: 2rem;
  }
`;

export const ProjectDetail = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;

  ${mq[1]} {
    margin-top: 2rem;
  }
`;

export const DetailText = styled.span`
  font-size: 1.5rem;
  line-height: 2.5rem;
  margin-bottom: 3rem;

  ${mq[1]} {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
`;

export const KeyFeatures = styled.span`
  text-align: left;
  font-size: 1.5rem;
  line-height: 2.5rem;
  margin-bottom: 3rem;

  ${mq[1]} {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
`;

export const Skills = styled.span`
  text-align: left;
  font-size: 1.5rem;
  line-height: 2.5rem;
  margin-bottom: 3rem;

  ${mq[1]} {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
`;

export const Readme = styled.button<{
  backColor: string;
  fontColor?: string;
}>`
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: bold;
  background-color: darkgray;
  cursor: pointer;
  margin-right: 1rem;
  padding: 1rem;
`;

export const Url = styled.button<{
  backColor: string;
  fontColor?: string;
}>`
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: bold;
  background-color: darkgray;
  cursor: pointer;
  padding: 1rem;
`;
