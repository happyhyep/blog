import React from "react";
import NavBar from "../components/Common/NavBar";
import Footer from "../components/Common/Footer";
import styled from "styled-components";
import award1 from "../img/award1.png";
import award2 from "../img/award2.png";
import award3 from "../img/award3.png";
import award4 from "../img/award4.png";

export default function Awards(){
    return (
        <>
            <NavBar></NavBar>
            <div style={{display: "flex", justifyContent: 'center'}}>
                <Box>
                    <AwardImg alt="award4" src={award4}></AwardImg>
                    <div style={{display:"flex", justifyContent: 'center', marginBottom: '3%'}}>성적우수 장학, 밝은사회 장학, SW중심대학 장학 ... 외 다수 장학 수혜</div>
                </Box>
            </div>
            <div style={{display: "flex", justifyContent: 'center'}}>
                <Box>
                    <AwardImg alt="award1" src={award1}></AwardImg>
                    <div style={{display:"flex", justifyContent: 'center', marginBottom: '3%'}}>2023 San Jose State University Enterpreneurship Award 최우수</div>
                </Box>
            </div>
            <div style={{display: "flex", justifyContent: 'center'}}>
                <Box>
                    <AwardImg alt="award2" src={award2}></AwardImg>
                    <div style={{display:"flex", justifyContent: 'center', marginBottom: '3%'}}>2022 경희대학교 소프트웨어융합대학 동아리대항전 최우수</div>
                </Box>
            </div>
            <div style={{display: "flex", justifyContent: 'center'}}>
                <Box>
                    <AwardImg alt="award3" src={award3}></AwardImg>
                    <div style={{display:"flex", justifyContent: 'center', marginBottom: '3%'}}>2021 대학생 교육기부 공모전 장작 더하기 장려상</div>
                </Box>
            </div>
            <Footer />
        </>
    )
}


const Box = styled.div`
    width: 70%;
    margin-top: 3%;

    background: white;
    border-radius: 2rem;
    box-shadow: 3px 3px 20px 6px gray;

    font-family: applesdgothic;
    color: #53354a;
`

const AwardImg = styled.img`
    width: 50%;
    margin-top: 5%;
    margin-left: 25%;
    margin-bottom: 3%;
`