import AboutPage from "../about/about";
import BannerPage from "../banner/banner";
import ProjectsPage from "../projects/projects";
import SkillsPage from "../skills/skills";
import * as S from "./navigation.styles";
import { Link } from "react-scroll";

export default function NavigationPage() {
  const NAVIGATION_MENUS = ["About", "Skills", "Projects"];
  return (
    <>
      <S.Wrapper>
        <S.NavBar>
          {NAVIGATION_MENUS.map((el) => (
            <Link key={el} to={el} spy={true} smooth={true}>
              <div>{el}</div>
            </Link>
          ))}
        </S.NavBar>
      </S.Wrapper>
      <BannerPage />
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
