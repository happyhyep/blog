import { createGlobalStyle } from "styled-components";
import NotoSansR from "./NotoSansRegular.otf"
import AppleSDGothic from "./AppleSDGothicNeoR.ttf"
import redemption from "./fonts/Redemption.ttf"

const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'AppleSDGothic';
        src: url(${AppleSDGothic}) format("ttff");
        font-weight: normal;
        font-style: normal;
    };
    @font-face {
        font-family: 'redemption';
        src: url(${redemption}) format("ttff");
        font-weight: normal;
        font-style: normal;
    };
`

export default GlobalStyle;