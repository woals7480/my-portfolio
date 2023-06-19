/* eslint-disable react/no-unescaped-entities */
import { useRouter } from "next/router";
import AboutPage from "../about/about";
import BannerPage from "../banner/banner";
import ProjectsPage from "../projects/projects";
import SkillsPage from "../skills/skills";
import * as S from "./navigation.styles";
import { Link } from "react-scroll";

export default function NavigationPage() {
  const router = useRouter();
  const NAVIGATION_MENUS = ["Home", "About", "Skills", "Projects"];

  const onClickLogo = () => {
    router.push("/");
  };
  return (
    <>
      <S.Wrapper>
        <S.NavWrapper>
          <S.Logo onClick={onClickLogo}>JM'S</S.Logo>
          <S.NavBar>
            {NAVIGATION_MENUS.map((el) => (
              <Link key={el} to={el} spy={true} smooth={true}>
                <S.NavList>{el}</S.NavList>
              </Link>
            ))}
          </S.NavBar>
        </S.NavWrapper>
      </S.Wrapper>
      <div id="Home">
        <BannerPage />
      </div>
      <div id="About">
        <AboutPage />
      </div>
      <div id="Skills">
        <SkillsPage />
      </div>
      <div id="Projects">
        <ProjectsPage />
      </div>
    </>
  );
}
