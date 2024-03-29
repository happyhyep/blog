import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @charset "utf-8";
    @font-face {
        font-family: "applesdgothic", applesdgothic;
        src: url("./applesdgothic.ttf") format("woff2");
        font-weight: normal;
        font-style: normal;
    };
    @font-face {
        font-family: 'iceJaram-Rg';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-2@1.0/iceJaram-Rg.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'UhBeeRice';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_five@.2.0/UhBeeRice.woff') format('woff');
        font-weight: normal;
        font-style: normal;
        }

    @font-face {
        font-family: 'Redemption';
        font-style: normal;
        font-weight: 400;
        src: local('Redemption'), url('https://fonts.cdnfonts.com/s/23565/Redemption.woff') format('woff');
    }
        

`

export default GlobalStyle;
