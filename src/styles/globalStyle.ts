import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: normalFont;
  }

  @font-face {
    font-family: "bannerFont";
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-01@1.0/omyu_pretty.woff2') format('woff2');
  }

  @font-face {
    font-family: "normalFont";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/SUITE-Regular.woff2")
      format("woff2");
  }

  @font-face {
    font-family: "logoFont";
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/HSJiptokki-Round.woff2') format('woff2');
  }

  @font-face{
    font-family: "titleFont"
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-01@1.0/MBC1961GulimM.woff2') format('woff2');
  }
`;
