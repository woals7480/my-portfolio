import * as S from "./skills.styles";

export default function SkillsPage() {
  return (
    <S.Wrapper>
      <S.SkillsTitle>SKILLS</S.SkillsTitle>
      <S.SkillsWrapper>
        <S.SkillsImage src="https://woals7480.github.io/my-portfolio/skills/htmlcssjs.png" />
        <S.SkillsImage src="skills/ts.png" />
        <S.SkillsImage src="skills/react.png" />
        <S.SkillsImage src="skills/nextjs.png" />
        <S.SkillsImage src="skills/recoil.png" />
        <S.SkillsImage src="skills/emotion.jpg" />
        <S.SkillsImage src="skills/graphql.png" />
        <S.SkillsImage src="skills/apollo.png" />
        <S.SkillsImage src="skills/nodejs.png" />
        <S.SkillsImage src="skills/aws.png" />
        <S.SkillsImage src="skills/docker.png" />
        <S.SkillsImage src="skills/github.png" />
      </S.SkillsWrapper>
    </S.Wrapper>
  );
}
