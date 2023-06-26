import { useState } from "react";
import * as S from "./htmlcss.styles";
import CheckIcon from "@mui/icons-material/Check";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HtmlCssPage() {
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
            title={"kokoatalk"}
            imgst={"png"}
            webapp={"app"}
          >
            <S.ProjectBackground
              isOver={isOver}
              gradient={["#6CB645", "#85BB65"]}
            ></S.ProjectBackground>
            <S.ProjectText isOver={isOver}>
              <S.ProjectTitle>코코아톡</S.ProjectTitle>
              <S.ProjectDetail>
                <S.DetailText>
                  HTML,CSS를 기반으로 한 카카오톡 클론코딩 사이트이다.
                </S.DetailText>
                <S.KeyFeatures></S.KeyFeatures>
                <S.Skills>
                  <CheckIcon />
                  사용기술
                  <br />
                  HTML, CSS
                </S.Skills>
                <S.LinkWrapper>
                  <Link
                    href="https://github.com/woals7480/kokoa-clone-2021/"
                    target="_blank"
                    style={{ display: "flex", textDecoration: "none" }}
                  >
                    <S.Readme backColor={"#365B22"} fontColor={"white"}>
                      ▶ 자세히보기(README)
                    </S.Readme>
                  </Link>
                  <Link
                    href="https://woals7480.github.io/kokoa-clone-2021/"
                    target="_blank"
                    style={{ display: "flex", textDecoration: "none" }}
                  >
                    <S.Url backColor={"#365B22"} fontColor={"white"}>
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
            title={"htmlcss"}
            imgst={"png"}
            webapp={"web"}
          >
            <S.ProjectBackground
              isOver={isOver}
              gradient={["gold", "#e8e88f"]}
            ></S.ProjectBackground>
            <S.ProjectText isOver={isOver}>
              <S.ProjectTitle>홈 화면 코딩</S.ProjectTitle>
              <S.ProjectDetail>
                <S.DetailText>
                  HTML,CSS를 이용한 각종 홈페이지 홈 화면 코딩모음 사이트이다.
                </S.DetailText>
                <S.KeyFeatures></S.KeyFeatures>
                <S.Skills>
                  <CheckIcon />
                  사용기술
                  <br />
                  HTML, CSS, JS
                </S.Skills>
                <S.LinkWrapper>
                  <Link
                    href="https://github.com/woals7480/htmlcss/"
                    target="_blank"
                    style={{ display: "flex", textDecoration: "none" }}
                  >
                    <S.Readme backColor={"#ea7602"} fontColor={"white"}>
                      ▶ 자세히보기(README)
                    </S.Readme>
                  </Link>
                  <Link
                    href="https://woals7480.github.io/htmlcss/"
                    target="_blank"
                    style={{ display: "flex", textDecoration: "none" }}
                  >
                    <S.Url backColor={"#ea7602"} fontColor={"white"}>
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
