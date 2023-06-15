import { useMemo, useState } from "react";
import * as S from "./banner.styles";
import { useInterval } from "@/components/commons/hooks/useInterval";

export default function BannerPage() {
  const completedTitle = useMemo(() => {
    return `안녕하세요.\nFrontend 개발자 정재민입니다.`;
  }, []);

  const [landingTitle, setLandingTitle] = useState("");
  const [count, setCount] = useState(0);

  useInterval(() => {
    if (count >= completedTitle.length) return;

    setLandingTitle((prev) => {
      let result = prev ? prev + completedTitle[count] : completedTitle[0];

      setCount(count + 1);

      return result;
    });
  }, 150);

  return (
    <S.BannerWarpper>
      <S.BannerText>{landingTitle}</S.BannerText>
      <S.BannerHr></S.BannerHr>
      <S.LandingText>
        배우는 것을 좋아하고 새로운 것을 잘 받아드립니다.
      </S.LandingText>
    </S.BannerWarpper>
  );
}
