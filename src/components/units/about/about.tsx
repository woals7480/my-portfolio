import { useRouter } from "next/router";
import * as S from "./about.styles";

import { Person, Cake, Home, Mail, School, GitHub } from "@mui/icons-material";

export default function AboutPage() {
  const router = useRouter();

  const onClickMyGit = () => {
    router.push("https://github.com/woals7480");
  };

  return (
    <S.Wrapper>
      <S.AboutWrapper>
        <S.AboutTitleWrapper>
          <S.AboutTitle>ABOUT ME</S.AboutTitle>
        </S.AboutTitleWrapper>
        <S.ProfileWrapper>
          <S.ProfileImgWrapper>
            <S.ProfileImg src="/profile.jpg" />
          </S.ProfileImgWrapper>
          <S.ProfileTextWrapper>
            <S.ProfileText>
              <Person style={{ fontSize: "2rem", color: "gray" }} />
              <S.Text>정재민</S.Text>
            </S.ProfileText>
            <S.ProfileText>
              <Cake style={{ fontSize: "2rem", color: "gray" }} />
              <S.Text>1995.02.13</S.Text>
            </S.ProfileText>
            <S.ProfileText>
              <Home style={{ fontSize: "2rem", color: "gray" }} />
              <S.Text>부산광역시 연제구</S.Text>
            </S.ProfileText>
            <S.ProfileText>
              <Mail style={{ fontSize: "2rem", color: "gray" }} />
              <S.Text>woals7480@gmail.com</S.Text>
            </S.ProfileText>
            <S.ProfileText>
              <School style={{ fontSize: "2rem", color: "gray" }} />
              <S.Text>창원대학교(의류학과)</S.Text>
            </S.ProfileText>
            <S.ProfileText style={{ cursor: "pointer" }} onClick={onClickMyGit}>
              <GitHub style={{ fontSize: "2rem", color: "gray" }} />
              <S.Text>Git</S.Text>
            </S.ProfileText>
          </S.ProfileTextWrapper>
        </S.ProfileWrapper>
      </S.AboutWrapper>
    </S.Wrapper>
  );
}
