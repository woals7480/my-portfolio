import { useState } from "react";
import * as S from "./vanila.styles";
import CheckIcon from "@mui/icons-material/Check";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function VanilaPage() {
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
            title={"chrome"}
            imgst={"png"}
          >
            <S.ProjectBackground
              isOver={isOver}
              gradient={["#84B0C1", "#6C7E84"]}
            ></S.ProjectBackground>
            <S.ProjectText isOver={isOver}>
              <S.ProjectTitle>웹사이트</S.ProjectTitle>
              <S.ProjectDetail>
                <S.DetailText>
                  Vanila JS를 기반으로 한 웹사이트이다.
                </S.DetailText>
                <S.KeyFeatures>
                  <CheckIcon />
                  주요기능
                  <br />
                  현재 시간, 현재 날씨, 메모하기 기능
                </S.KeyFeatures>
                <S.Skills>
                  <CheckIcon />
                  사용기술
                  <br />
                  HTML, CSS, JS
                </S.Skills>
                <S.LinkWrapper>
                  <Link
                    href="https://github.com/woals7480/JS-Chrome/"
                    target="_blank"
                    style={{ display: "flex", textDecoration: "none" }}
                  >
                    <S.Readme backColor={"#4d4f65"} fontColor={"white"}>
                      ▶ 자세히보기(README)
                    </S.Readme>
                  </Link>
                  <Link
                    href="https://woals7480.github.io/JS-Chrome/"
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
            title={"paint"}
            imgst={"png"}
          >
            <S.ProjectBackground
              isOver={isOver}
              gradient={["#F6F9FC", "#fff"]}
            ></S.ProjectBackground>
            <S.ProjectText isOver={isOver}>
              <S.ProjectTitle>그림판</S.ProjectTitle>
              <S.ProjectDetail>
                <S.DetailText>Vanila JS를 기반으로 그림판이다.</S.DetailText>
                <S.KeyFeatures>
                  <CheckIcon />
                  주요기능
                  <br />
                  그림 그리기, 저장하기 기능
                </S.KeyFeatures>
                <S.Skills>
                  <CheckIcon />
                  사용기술
                  <br />
                  HTML, CSS, JS
                </S.Skills>
                <S.LinkWrapper>
                  <Link
                    href="https://github.com/woals7480/paintjs/"
                    target="_blank"
                    style={{ display: "flex", textDecoration: "none" }}
                  >
                    <S.Readme backColor={"#4d4f65"} fontColor={"white"}>
                      ▶ 자세히보기(README)
                    </S.Readme>
                  </Link>
                  <Link
                    href="https://woals7480.github.io/paintjs/"
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
