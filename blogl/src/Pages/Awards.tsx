import React from "react";
import NavBar from "src/components/Common/NavBar";
import Footer from "src/components/Common/Footer";
import styled from "styled-components";
import award_sanjose from "src/assets/images/awards/award_sanjose.png";
import award_dcom from "src/assets/images/awards/award_dcom.png";
import award_edu from "src/assets/images/awards/award_edu.png";
import award_money from "src/assets/images/awards/award_money.png";
import {motion, useScroll} from 'framer-motion';
// import './Awards.css';

export default function Awards(){
    const { scrollYProgress } = useScroll();
    
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: .7, 
    }
      
    // const observer = new IntersectionObserver(entries => {
    //     entries.forEach(entry => {
    //       if (entry.isIntersecting) {
    //         console.log("active");
    //         entry.target.classList.add('active');
    //       } else {
    //         console.log("no")
    //         entry.target.classList.remove('active');
    //       }
    //     });
    //   }, options);

    //   const award4Box = document.querySelectorAll('.award4-box');
    //   const award3Box = document.querySelectorAll('.award3-box');
    //   const award2Box = document.querySelectorAll('.award2-box');
    //   const award1Box = document.querySelectorAll('.award1-box');


    //   award4Box.forEach(el => observer.observe(el));
    //   award3Box.forEach(el => observer.observe(el));
    //   award2Box.forEach(el => observer.observe(el));
    //   award1Box.forEach(el => observer.observe(el));



    return (
        <>
            <NavBar></NavBar>
            <motion.div className="bar"
                style={{ scaleX: scrollYProgress,
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        width: '100%',
                        height: '5px',
                        transformOrigin: 0, 
                        transform: 'translate3d(0, 0, 0)',
                        background: '#000000',
            }} />
            <div style={{display: "flex", justifyContent: 'center'}}>
                <Box className="award4-box">
                    <AwardImg alt="award_money" src={award_money}></AwardImg>
                    <div style={{display:"flex", justifyContent: 'center', marginBottom: '3%'}}>성적우수 장학, 밝은사회 장학, SW중심대학 장학 ... 외 다수 장학 수혜</div>
                </Box>
            </div>
            <div style={{display: "flex", justifyContent: 'center'}}>
                <Box className="award3-box">
                    <AwardImg alt="award_sanjose" src={award_sanjose}></AwardImg>
                    <div style={{display:"flex", justifyContent: 'center', marginBottom: '3%'}}>2023 San Jose State University Enterpreneurship Award 최우수</div>
                </Box>
            </div>
            <div style={{display: "flex", justifyContent: 'center'}}>
                <Box className="award2-box">
                    <AwardImg alt="award_dcom" src={award_dcom}></AwardImg>
                    <div style={{display:"flex", justifyContent: 'center', marginBottom: '3%'}}>2022 경희대학교 소프트웨어융합대학 동아리대항전 최우수</div>
                </Box>
            </div>
            <div style={{display: "flex", justifyContent: 'center'}}>
                <Box className="award1-box">
                    <AwardImg alt="award_edu" src={award_edu}></AwardImg>
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