import React from "react";
import NavBar from "../components/Common/NavBar";
import Footer from "../components/Common/Footer";
import styled from "styled-components";

export default function Awards(){
    return (
        <>
            <NavBar></NavBar>
            {/* <div className="profile" style={{display:"flex", justifyContent: 'center', marginTop:'70px', marginBottom: '80px'}}>페이지 준비중입니다 ...</div>
            <div className="profile" style={{display:"flex", justifyContent: 'center', marginTop:'20px'}}>2023 San Jose State University Enterpreneurship Award 최우수</div>
            <div className="profile" style={{display:"flex", justifyContent: 'center', marginTop:'20px'}}>2022 경희대학교 소프트웨어융합대학 동아리대항전 최우수</div>
            <div className="profile" style={{display:"flex", justifyContent: 'center', marginTop:'20px'}}>2021 대학생 교육기부 공모전 장작 더하기 장려상 </div> */}
            <Box>
            <div className="profile" style={{display:"flex", justifyContent: 'center', marginTop:'20px'}}>2023 San Jose State University Enterpreneurship Award 최우수</div>
            </Box>
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