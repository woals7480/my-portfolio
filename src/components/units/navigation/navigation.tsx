/* eslint-disable react/no-unescaped-entities */
import { useRouter } from "next/router";
import AboutPage from "../about/about";
import BannerPage from "../banner/banner";
import ProjectsPage from "../projects/projects";
import SkillsPage from "../skills/skills";
import * as S from "./navigation.styles";
import { Link, animateScroll as scroll } from "react-scroll";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import ContactsPage from "../contacts/contacts";

export default function NavigationPage() {
  const router = useRouter();
  const NAVIGATION_MENUS = ["Home", "About", "Skills", "Projects", "Contacts"];

  const onClickLogo = () => {
    router.push("/");
  };

  const onClickTop = () => {
    scroll.scrollToTop();
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
      <div id="Contacts">
        <ContactsPage />
      </div>
      <S.TopButton onClick={onClickTop}>
        <KeyboardDoubleArrowUpIcon />
      </S.TopButton>
    </>
  );
}
