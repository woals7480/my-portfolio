import { useState } from "react";
import * as S from "./project1.styles";
import CheckIcon from "@mui/icons-material/Check";
import Link from "next/link";

export default function Project1Page() {
  const [isOver, setIsOver] = useState(false);

  const onMouseOverProject = () => {
    setIsOver(true);
  };

  const onMouseOutProject = () => {
    setIsOver(false);
  };

  return (
    <>
      <S.ProjectWrapper
        onMouseOver={onMouseOverProject}
        onMouseOut={onMouseOutProject}
      >
        <S.ProjectBackground isOver={isOver}></S.ProjectBackground>
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
              <S.Readme>▶자세히보기(README)</S.Readme>
            </Link>
          </S.ProjectDetail>
        </S.ProjectText>
      </S.ProjectWrapper>
    </>
  );
}
