import { useState } from "react";
import * as S from "./reactnative.styles";
import CheckIcon from "@mui/icons-material/Check";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ReactNativePage() {
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
            title={"weather"}
            imgst={"gif"}
          >
            <S.ProjectBackground
              isOver={isOver}
              gradient={["#8C83B4", "#d5d0f4"]}
            ></S.ProjectBackground>
            <S.ProjectText isOver={isOver}>
              <S.ProjectTitle>날씨예보</S.ProjectTitle>
              <S.ProjectDetail>
                <S.DetailText>
                  ReactNative를 기반으로 한 날씨예보 앱이다.
                  <br />
                  일주일 간 날씨예보를 볼 수 있다.
                </S.DetailText>
                <S.KeyFeatures>
                  <CheckIcon />
                  주요기능
                  <br />
                  REST API를 이용한 날씨예보 기능
                </S.KeyFeatures>
                <S.Skills>
                  <CheckIcon />
                  사용기술
                  <br />
                  ReactNative, Expo
                </S.Skills>
                <S.LinkWrapper>
                  <Link
                    href="https://github.com/woals7480/weather_app/"
                    target="_blank"
                    style={{ display: "flex", textDecoration: "none" }}
                  >
                    <S.Readme backColor={"#4d4f65"} fontColor={"white"}>
                      ▶ 자세히보기(README)
                    </S.Readme>
                  </Link>
                  <Link
                    href="https://woals7480.github.io/weather_app/"
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
            title={"todos"}
            imgst={"png"}
          >
            <S.ProjectBackground
              isOver={isOver}
              gradient={["#999", "darkgray"]}
            ></S.ProjectBackground>
            <S.ProjectText isOver={isOver}>
              <S.ProjectTitle>할 일 메모</S.ProjectTitle>
              <S.ProjectDetail>
                <S.DetailText>
                  ReactNative를 기반으로 할 일 메모앱이다.
                  <br />
                  해야 할 일 메모페이지와 여행 갈 곳 메모페이지로 구성되어있다.
                </S.DetailText>
                <S.KeyFeatures>
                  <CheckIcon />
                  주요기능
                  <br />
                  해야 할 일 등록, 삭제, 완료 버튼 등으로 구성되어있다.
                </S.KeyFeatures>
                <S.Skills>
                  <CheckIcon />
                  사용기술
                  <br />
                  ReactNative, Expo
                </S.Skills>
                <S.LinkWrapper>
                  <Link
                    href="https://github.com/woals7480/todos_app/"
                    target="_blank"
                    style={{ display: "flex", textDecoration: "none" }}
                  >
                    <S.Readme backColor={"#4d4f65"} fontColor={"white"}>
                      ▶ 자세히보기(README)
                    </S.Readme>
                  </Link>
                  <Link
                    href="https://woals7480.github.io/todos_app/"
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
