import { useState } from "react";
import * as S from "./projects.styles";
import Project1Page from "./project/project1/project1";

export default function ProjectsPage() {
  return (
    <S.Wrapper>
      <S.ProjectsTitle>Projects</S.ProjectsTitle>
      <Project1Page></Project1Page>
    </S.Wrapper>
  );
}
