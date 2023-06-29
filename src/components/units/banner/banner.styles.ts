import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { prefix } from "@/components/commons/config/config";

const cursor = keyframes`
  from{
    border-right: 2px solid transparent;
  }
  to{
    border-right: 2px solid black;
  }
`;

export const BannerWarpper = styled.div`
  width: 100vw;
  height: 40rem;
  position: relative;
  text-align: center;
  padding: 12rem;

  ::after {
    width: 100vw;
    height: 40rem;
    background-image: url("${prefix}/banner.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    position: absolute;
    background-position: center;
    top: 0;
    left: 0;
    content: "";
    z-index: -1;
    opacity: 0.9;
  }
`;

export const BannerText = styled.span`
  animation: ${cursor} 0.5s ease-in-out 0ms 5;
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
