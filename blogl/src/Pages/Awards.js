import React from "react";
import NavBar from "../components/Common/NavBar";
import Footer from "../components/Common/Footer";

export default function Awards(){
    return (
        <>
            <NavBar></NavBar>
            <div className="profile" style={{display:"flex", justifyContent: 'center', marginTop:'70px', marginBottom: '80px'}}>페이지 준비중입니다 ...</div>
            <div className="profile" style={{display:"flex", justifyContent: 'center', marginTop:'20px'}}>2023 San Jose State University Enterpreneurship Award 최우수</div>
            <div className="profile" style={{display:"flex", justifyContent: 'center', marginTop:'20px'}}>2022 경희대학교 소프트웨어융합대학 동아리대항전 최우수</div>
            <div className="profile" style={{display:"flex", justifyContent: 'center', marginTop:'20px'}}>2021 대학생 교육기부 공모전 장작 더하기 장려상 </div>
            <Footer />
        </>
    )
}
