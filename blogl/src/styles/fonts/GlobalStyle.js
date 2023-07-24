import { createGlobalStyle } from "styled-components";
import NotoSansR from "./notosans.otf"
import applesdgothic from "./applesdgothic.ttf";
import redemption from "./redemption.ttf";

const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'applesdgothic';
        src: url(${applesdgothic}) format("woff2");
        font-weight: normal;
        font-style: normal;
    };
    @font-face {
        font-family: 'redemption';
        src: url(${redemption}) format("woff2");
        font-weight: normal;
        font-style: normal;
    };
`

export default GlobalStyle;