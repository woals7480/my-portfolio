/* eslint-disable react/no-unescaped-entities */
import { useRouter } from "next/router";
import AboutPage from "../about/about";
import BannerPage from "../banner/banner";
import ProjectsPage from "../projects/projects";
import SkillsPage from "../skills/skills";
import * as S from "./navigation.styles";
import { Link, animateScroll as scroll } from "react-scroll";
import { KeyboardDoubleArrowUp, Menu } from "@mui/icons-material";
import ContactsPage from "../contacts/contacts";
import { useState } from "react";

export default function NavigationPage() {
  const router = useRouter();
  const NAVIGATION_MENUS = ["About", "Skills", "Projects", "Contacts"];
  const [view, setView] = useState(false);

  const onClickLogo = () => {
    router.push("/");
  };

  const onClickTop = () => {
    scroll.scrollToTop();
  };

  const onClickNav = () => {
    setView((prev) => !prev);
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
          <S.MobileNav>
            <Menu
              style={{ fontSize: "3rem", cursor: "pointer" }}
              onClick={onClickNav}
            />
            {view && (
              <S.MobileNavListUl>
                {NAVIGATION_MENUS.map((el) => (
                  <Link key={el} to={el} spy={true} smooth={true}>
                    <S.MobileNavListLi>{el}</S.MobileNavListLi>
                  </Link>
                ))}
              </S.MobileNavListUl>
            )}
          </S.MobileNav>
        </S.NavWrapper>
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
      <div id="Contacts">
        <ContactsPage />
      </div>
      <S.TopButton onClick={onClickTop}>
        <KeyboardDoubleArrowUp />
      </S.TopButton>
    </>
  );
}
