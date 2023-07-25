import { createGlobalStyle } from "styled-components";
import NotoSansR from "./notosans.otf"
import applesdgothic from "./applesdgothic.ttf";
import redemption from "./redemption.ttf";

const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: "applesdgothic";
        src: url("./applesdgothic.ttf") format("woff2");
        font-weight: normal;
        font-style: normal;
    };
    @font-face {
        font-family: "redemption";
        transform: skew(-0.001deg);
        src:url("./redemption.woff2") format("woff2"),
        url("./redemption.woff") format("woff"),
        url("./redemption.ttf") format("truetype");
    };

`

export default GlobalStyle;
