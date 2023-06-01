import { createGlobalStyle } from "styled-components";
import NotoSansR from "./NotoSansRegular.otf"
import AppleSDGothic from "./AppleSDGothicNeoR.ttf"


const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'AppleSDGothic';
        src: url(${AppleSDGothic}) format("ttff");
        font-weight: normal;
        font-style: normal;
    };
`

export default GlobalStyle;