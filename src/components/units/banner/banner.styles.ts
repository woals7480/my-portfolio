import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const cursor = keyframes`
  from{
    border-right: 2px solid white;
  }
  to{
    border-right: 2px solid black;
  }
`;

export const BannerWarpper = styled.div`
  width: 100vw;
  height: 70vh;
  position: relative;
  text-align: center;
  padding: 12rem;

  ::after {
    width: 100vw;
    height: 70vh;
    background-image: url("https://woals7480.github.io/my-portfolio/banner.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    z-index: -1;
    opacity: 0.9;
  }
`;

export const BannerText = styled.span`
  animation: ${cursor} 1s ease-in-out 0ms 2;
  font-size: 3.5rem;
  font-weight: bold;
  white-space: pre-wrap;
  font-family: bannerFont;
`;

export const BannerHr = styled.hr`
  width: 4rem;
  border: solid 0.2rem black;
  margin: 1.5rem auto;
`;

export const LandingText = styled.span`
  font-size: 2rem;
  color: white;
  font-family: bannerFont;
`;
