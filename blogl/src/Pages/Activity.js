import React from "react";
import NavBar from "../components/Common/NavBar";
import Footer from "../components/Common/Footer";
import styled from "styled-components";

const TextAnimationBlock = styled.div`
  display: flex;
  justify-content: center;

  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 12vmin;
    margin: 0;
  }

  .animated-text {
    color: transparent;
    width: 40vmax;

    cursor: pointer;

    background: conic-gradient(
      #c6c6ff 22%,
      #ffcccb 22%,
      #ffe670 33%,
      #84ed9a 33%,
      #64e986 62%,
      #ffb9c7 62%,
      #ffb9c7 73%,
      #a6e7ff 73%,
      #a6e7ff 82%,
      #f7d1ba 82%
    );

    // text 모양 마스크 씌워줌
    background-size: 70%;
    background-clip: text;
    -webkit-background-clip: text;

    animation: expand-rev 0.5s ease forwards;

    &:hover {
      animation: expand 0.5s ease forwards;
    }
  } 

  @keyframes expand {
    0% {
      background-size: 40%;
      background-position: 0 0;
    }
    20% {
      background-size: 55%;
      background-position: 0 1em;
    }
    100% {
      background-size: 325%;
      background-position: -15em -1em;
    }
  }

  @keyframes expand-rev {
    0% {
      background-size: 325%;
      background-position: -10em -4em;
    }
    20% {
      background-size: 55%;
      background-position: 0 2em;
    }
    100% {
      background-size: 30%;
      background-position: 2em 0.1em;
    }
  }
`;

export default function Activities(){
    return (
        <>
            <NavBar></NavBar>
            <div className="profile" style={{display:"flex", justifyContent: 'center', marginTop:'70px', marginBottom: '80px'}}>페이지 준비중입니다 ...</div>
                <TextAnimationBlock>
                <h1 class="animated-text">Hello World!</h1>
                </TextAnimationBlock>
            <Footer />
        </>
    )
} 
