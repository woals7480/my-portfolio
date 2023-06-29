import { mq } from "@/styles/globalStyle";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin: 7rem;
  border-bottom: 0.2rem dashed gray;
  padding-bottom: 15rem;

  ${mq[1]} {
    padding-bottom: 10rem;
  }
  ${mq[0]} {
    padding-bottom: 7rem;
  }
`;

export const AboutWrapper = styled.div`
  width: 70rem;
  border: 1px solid gray;
  margin: 0 auto;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;

  ${mq[1]} {
    width: 55rem;
  }

  ${mq[0]} {
    width: 40rem;
  }
`;

export const AboutTitleWrapper = styled.div`
  padding-top: 2rem;
  text-align: center;
`;

export const AboutTitle = styled.h1`
  display: inline;
  font-size: 4rem;
  border-bottom: 0.3rem solid gray;
  padding-bottom: 1rem;
  font-family: titleFont;

  ${mq[0]} {
    font-size: 2.5rem;
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  padding: 5rem;
  align-items: center;
  justify-content: space-around;
  ${mq[0]} {
    padding: 3rem;
  }
`;

export const ProfileImgWrapper = styled.div``;

export const ProfileImg = styled.img`
  width: 15rem;
  border-radius: 50%;

  ${mq[0]} {
    width: 10rem;
  }
`;

export const ProfileTextWrapper = styled.div`
  width: 25rem;

  ${mq[1]} {
    width: 20rem;
  }
  ${mq[0]} {
    width: 15rem;
  }
`;

export const ProfileText = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  ${mq[0]} {
    margin: 0.5rem 0;
  }
`;

export const Text = styled.span`
  font-size: 1.5rem;
  margin-left: 1rem;
  ${mq[0]} {
    font-size: 1rem;
    margin-left: 0.5rem;
  }
`;
