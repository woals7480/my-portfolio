import { prefix } from "@/components/commons/config/config";
import * as S from "./skills.styles";

export default function SkillsPage() {
  return (
    <S.Wrapper>
      <S.SkillsTitle>SKILLS</S.SkillsTitle>
      <S.SkillsWrapper>
        <S.SkillsImage src={`${prefix}/skills/htmlcssjs.png`} />
        <S.SkillsImage src={`${prefix}/skills/ts.png`} />
        <S.SkillsImage src={`${prefix}/skills/react.png`} />
        <S.SkillsImage src={`${prefix}/skills/nextjs.png`} />
        <S.SkillsImage src={`${prefix}/skills/recoil.png`} />
        <S.SkillsImage src={`${prefix}/skills/emotion.jpg`} />
        <S.SkillsImage src={`${prefix}/skills/graphql.png`} />
        <S.SkillsImage src={`${prefix}/skills/apollo.png`} />
        <S.SkillsImage src={`${prefix}/skills/nodejs.png`} />
        <S.SkillsImage src={`${prefix}/skills/aws.png`} />
        <S.SkillsImage src={`${prefix}/skills/docker.png`} />
        <S.SkillsImage src={`${prefix}/skills/github.png`} />
      </S.SkillsWrapper>
    </S.Wrapper>
  );
}
