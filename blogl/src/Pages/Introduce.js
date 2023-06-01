import React from "react";
import NavBar from "../components/Common/NavBar"
import introduce_self from '../img/introduce_self.png'
import styled from "styled-components";
import logo from "../img/logo.png";
import pic1 from "../img/그림1.png";

export default function Introduce() {
    return(
        <>
            <NavBar></NavBar>
            <div style={{display:"flex", justifyContent: 'center', marginTop:'70px', marginBottom: '80px'}}><img alt="introduce_self" src={introduce_self} style={{width: '500px'}}></img></div>
            <DashLine></DashLine>
            <div style={{display:"flex", justifyContent: 'center', marginBottom: '50px'}}><img alt="logo" src={logo} style={{width: '340px'}}></img></div>
            <div>
                <Text>열정이 넘치고 항상 밝은 사람으로, 주위 사람들까지 긍정적으로 만듭니다 😄</Text>
                <Text>‘익숙함에 속지 말자’와 ‘후회 없이 살아가자’는 신념으로 매순간 최선을 다하며 살아갑니다.</Text>
            </div>
            <div style={{marginTop: '70px', display: "flex", justifyContent: 'center'}}>
                <img alt="그림1" src={pic1} style={{width: "250px", margin: 'auto'}}></img>
            </div>

        </>
    )
}

const DashLine = styled.div`
    width: 100%;
    height: 0px;
    border: 1px dashed #000000;
    margin-bottom: 70px;
`

const Text = styled.div`
    text-align: center;
`