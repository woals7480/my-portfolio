import { useState } from "react";
import * as S from "./react.styles";
import CheckIcon from "@mui/icons-material/Check";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ReactPage() {
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
            title={"movie"}
            imgst={"png"}
          >
            <S.ProjectBackground
              isOver={isOver}
              gradient={["#eff3f7", "#fff"]}
            ></S.ProjectBackground>
            <S.ProjectText isOver={isOver}>
              <S.ProjectTitle>추천영화</S.ProjectTitle>
              <S.ProjectDetail>
                <S.DetailText>
                  React를 기반으로 한 영화추천 페이지이다.
                  <br />
                  추천영화목록 페이지와 영화상세 페이지로 구성되어있다.
                </S.DetailText>
                <S.KeyFeatures>
                  <CheckIcon />
                  주요기능
                  <br />
                  REST API를 이용한 평점 높은 영화추천 기능
                </S.KeyFeatures>
                <S.Skills>
                  <CheckIcon />
                  사용기술
                  <br />
                  React
                </S.Skills>
                <S.LinkWrapper>
                  <Link
                    href="https://github.com/woals7480/react_movie_practice"
                    target="_blank"
                    style={{ display: "flex", textDecoration: "none" }}
                  >
                    <S.Readme backColor={"#darkgray"}>
                      ▶ 자세히보기(README)
                    </S.Readme>
                  </Link>
                  <Link
                    href="https://woals7480.github.io/react_movie_practice/"
                    target="_blank"
                    style={{ display: "flex", textDecoration: "none" }}
                  >
                    <S.Url backColor={"#darkgray"}>▶ URL</S.Url>
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
