import { createGlobalStyle } from "styled-components";
import NotoSansR from "./NotoSansRegular.otf"
import AppleSDGothic from "./AppleSDGothicNeoR.ttf"
import Redemption from "./fonts/Redemption.ttf"

const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'AppleSDGothic';
        src: url(${AppleSDGothic}) format("ttff");
        font-weight: normal;
        font-style: normal;
    };
    @font-face {
        font-family: 'Redemption';
        src: url(${Redemption}) format("ttff");
        font-weight: normal;
        font-style: normal;
    };
`

export default GlobalStyle;