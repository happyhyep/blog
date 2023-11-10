import React from "react";
import styled from "styled-components";
import NavBar from "@src/components/Common/NavBar";
import Footer from "@src/components/Common/Footer";

export default function Gallery(){
    return (
        <>
            <NavBar></NavBar>
            <div style={{display:"flex", justifyContent: 'center', marginTop:'70px', marginBottom: '80px'}}>페이지 준비중입니다 ...</div>
            <Box>페이지 준비중입니다.</Box>
            <Footer />
        </> 
    )
}
 
const Box = styled.div`
    @property --gradient-angle {
        syntax: "<angle>";
        initial-value: 0deg;
        inherits: false;
    }

    inset: -.5rem;
    width: 100%;


    background: conic-gradient(
        from var(--gradient-angle),
        #01C7B7,
        #21BCD6,
        #1779BB
    );
    animation: rotation 20s linear infinite;
    @keyframes rotation{
        0% { --gradient-angle: 0deg; }
        100% { --gradient-angle: 360deg; }
    }
`