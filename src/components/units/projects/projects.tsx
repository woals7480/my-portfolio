import * as S from "./projects.styles";
import Nextjs from "./project/nextjs/nextjs";
import ReactPage from "./project/react/react";
import ReactNativePage from "./project/reactnative/reactnative";
import VanilaPage from "./project/vanila/vanila";
import HtmlCssPage from "./project/htmlcss/htmlcss";

export default function ProjectsPage() {
  return (
    <S.Wrapper>
      <S.ProjectsTitle>Projects</S.ProjectsTitle>
      <S.ProjectWrapper>
        <S.ProjectTitle>Next.js</S.ProjectTitle>
        <Nextjs></Nextjs>
      </S.ProjectWrapper>
      <S.ProjectWrapper>
        <S.ProjectTitle>React</S.ProjectTitle>
        <ReactPage></ReactPage>
      </S.ProjectWrapper>
      <S.ProjectWrapper>
        <S.ProjectTitle>ReactNative</S.ProjectTitle>
        <ReactNativePage></ReactNativePage>
      </S.ProjectWrapper>
      <S.ProjectWrapper>
        <S.ProjectTitle>Vanila JS</S.ProjectTitle>
        <VanilaPage></VanilaPage>
      </S.ProjectWrapper>
      <S.ProjectWrapper>
        <S.ProjectTitle>HTML/CSS</S.ProjectTitle>
        <HtmlCssPage></HtmlCssPage>
      </S.ProjectWrapper>
    </S.Wrapper>
  );
}
