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
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/TTWanjudaedunsancheB.woff2")
      format("woff2");
  }

  @font-face {
    font-family: "normalFont";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/SUITE-Regular.woff2")
      format("woff2");
  }

  @font-face {
    font-family: "logoFont";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2210-EF@1.0/EF_jejudoldam.woff2")
      format("woff2");
  }
`;
