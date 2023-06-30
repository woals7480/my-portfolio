/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import * as S from "./nextjs.styles";
import CheckIcon from "@mui/icons-material/Check";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function NextjsPage() {
  const [isOver, setIsOver] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const onMouseOverProject = () => {
    setIsOver(true);
  };

  const onMouseOutProject = () => {
    setIsOver(false);
  };

  return (
    <>
      <Slider {...settings}>
        <div>
          <S.ProjectWrapper
            onMouseOver={onMouseOverProject}
            onMouseOut={onMouseOutProject}
            title={"market"}
            imgst={"png"}
          >
            <S.ProjectBackground
              isOver={isOver}
              gradient={["#e66465", "#ffa2ad"]}
            ></S.ProjectBackground>
            <S.ProjectText isOver={isOver}>
              <S.ProjectTitle>딸기마켓</S.ProjectTitle>
              <S.ProjectDetail>
                <S.DetailText>
                  딸기마켓은 Next.js와 GraphQL을 기반으로 한 중고물품거래
                  사이트이다.
                  <br />
                  자유게시판, 상품게시판, 로그인페이지 등으로 구성되어있다.
                </S.DetailText>
                <S.KeyFeatures>
                  <CheckIcon />
                  주요기능
                  <br />
                  게시물 검색기능, 포트원 API를 이용한 결제기능, Graphql API를
                  이용한 로그인기능, 물품 사고 팔기 기능, 베스트 상품 기능 등
                </S.KeyFeatures>
                <S.Skills>
                  <CheckIcon />
                  사용기술
                  <br />
                  Next.js, Typescript, Graphql, ApolloGraphql,Emotion, Recoil,
                  AntDesign, ReactHookForm
                </S.Skills>
                <Link
                  href="https://github.com/woals7480/freeboard_frontend/blob/main/README.md"
                  target="_blank"
                  style={{ display: "flex", textDecoration: "none" }}
                >
                  <S.Readme backColor={"#e66465"} fontColor={"white"}>
                    ▶ 자세히보기(README)
                  </S.Readme>
                </Link>
              </S.ProjectDetail>
            </S.ProjectText>
          </S.ProjectWrapper>
        </div>
        <div>
          <S.ProjectWrapper
            onMouseOver={onMouseOverProject}
            onMouseOut={onMouseOutProject}
            title={"aws_docker"}
            imgst={"png"}
          >
            <S.ProjectBackground
              isOver={isOver}
              gradient={["#999", "#fff"]}
            ></S.ProjectBackground>
            <S.ProjectText isOver={isOver}>
              <S.ProjectTitle>게시판</S.ProjectTitle>
              <S.ProjectDetail>
                <S.DetailText>
                  firebase 데이터베이스를 이용한 간단한 게시판페이지이다.
                  <br />
                  게시판목록, 게시판등록, 상세게시판 페이지로 구성되어있다.
                </S.DetailText>
                <S.KeyFeatures>
                  <CheckIcon />
                  주요기능
                  <br />
                  게시판 등록,게시판 보기
                </S.KeyFeatures>
                <S.Skills>
                  <CheckIcon />
                  사용기술
                  <br />
                  Next.js, AWS, Docker
                </S.Skills>
                <S.LinkWrapper>
                  <Link
                    href="https://github.com/woals7480/aws_docker"
                    target="_blank"
                    style={{ display: "flex", textDecoration: "none" }}
                  >
                    <S.Readme backColor={"#4d4f65"} fontColor={"white"}>
                      ▶ 자세히보기(README)
                    </S.Readme>
                  </Link>
                  <Link
                    href="https://codecamp-jjm.shop/"
                    target="_blank"
                    style={{ display: "flex", textDecoration: "none" }}
                  >
                    <S.Url backColor={"#4d4f65"} fontColor={"white"}>
                      ▶ URL
                    </S.Url>
                  </Link>
                </S.LinkWrapper>
              </S.ProjectDetail>
            </S.ProjectText>
          </S.ProjectWrapper>
        </div>
        <div>
          <S.ProjectWrapper
            onMouseOver={onMouseOverProject}
            onMouseOut={onMouseOutProject}
            title={"portfolio"}
            imgst={"png"}
          >
            <S.ProjectBackground
              isOver={isOver}
              gradient={["#8d90b7", "#ccd0ff"]}
            ></S.ProjectBackground>
            <S.ProjectText isOver={isOver}>
              <S.ProjectTitle>JM's Portfolio</S.ProjectTitle>
              <S.ProjectDetail>
                <S.DetailText>
                  Next.js를 기반으로 한 반응형 웹 포트폴리오이다.
                </S.DetailText>
                <S.KeyFeatures></S.KeyFeatures>
                <S.Skills>
                  <CheckIcon />
                  사용기술
                  <br />
                  Next.js, Typescript ,Emotion, Material UI
                </S.Skills>
                <S.LinkWrapper>
                  <Link
                    href="https://github.com/woals7480/my-portfolio"
                    target="_blank"
                    style={{ display: "flex", textDecoration: "none" }}
                  >
                    <S.Readme backColor={"#4d4f65"} fontColor={"white"}>
                      ▶ 자세히보기(README)
                    </S.Readme>
                  </Link>
                  <Link
                    href="https://woals7480.github.io/my-portfolio/"
                    target="_blank"
                    style={{ display: "flex", textDecoration: "none" }}
                  >
                    <S.Url backColor={"#4d4f65"} fontColor={"white"}>
                      ▶ URL
                    </S.Url>
                  </Link>
                </S.LinkWrapper>
              </S.ProjectDetail>
            </S.ProjectText>
          </S.ProjectWrapper>
        </div>
      </Slider>
    </>
  );
}
