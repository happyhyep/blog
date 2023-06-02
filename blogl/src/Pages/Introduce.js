import React, { useState, useMemo, useEffect } from "react";
import NavBar from "../components/Common/NavBar"
import { NavLink } from "react-router-dom";
import introduce_self from '../img/introduce_self.png'
import styled from "styled-components";
import pic1 from "../img/그림1.png";
import pic2 from "../img/그림2.png";
import pic3 from "../img/그림3.png";
import pic4 from "../img/그림4.jpg";
import pic5 from "../img/그림5.jpg";
import pic6 from "../img/그림6.jpg";
import pic7 from "../img/그림7.jpg";
import Footer from "../components/Common/Footer";

export default function Introduce() {
    const [landingTitle, setLandingTitle] = useState("");
    const [count, setCount] = useState(0);
    const [textNum, setTextNum] = useState(0);
    const textList = ["행복하게 매순간 최선을 다하는", "항상 열정이 넘치는", "긍정적으로 사고하는", "사용자의 편의를 생각하는"];
      
    useEffect(() => {
        const completedTitle = textList[textNum];

        const interval = (count<=(completedTitle.length-1)) ? setInterval(()=>{
            setLandingTitle((prev) => {
                let result = prev ? prev + completedTitle[count] : completedTitle[0];
                setCount((prev) => count + 1);
                return result;
            });
        }, 150) : null
        if (count === completedTitle.length) {
            setTimeout(() => {
                clearInterval(interval);
                setLandingTitle("");
                textNum===textList.length-1 ? setTextNum(0) : setTextNum(textNum+1);
                setCount(0);
            }, 1000);
        }
        return () => clearInterval(interval); 
    }, [count])
      
    return(
        <>
            <NavBar></NavBar>
            <div className="profile" style={{display:"flex", justifyContent: 'center', marginTop:'70px', marginBottom: '80px'}}><img alt="introduce_self" src={introduce_self} style={{width: '500px'}}></img></div>
            <div style={{display:"flex", justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px'}}><DashLine /><Happyhyep style={{width: '20%'}}>happyhyep</Happyhyep><DashLine /></div>
            <div className="introduce_myself">
                <Text>열정이 넘치고 항상 밝은 사람으로, 주위 사람들까지 긍정적으로 만듭니다 😄</Text>
                <Text>‘익숙함에 속지 말자’와 ‘후회 없이 살아가자’는 신념으로 매순간 최선을 다하며 살아갑니다.</Text>
            </div>
            <div className="picture" style={{marginTop: '70px', display: "flex", justifyContent: 'center'}}>
                <img alt="그림1" src={pic1} style={{width: "250px", margin: 'auto', marginLeft: '40px', marginRight: '40px'}}></img>
                <img alt="그림2" src={pic2} style={{width: "250px", margin: 'auto', marginLeft: '40px', marginRight: '40px'}}></img>
                <img alt="그림3" src={pic3} style={{width: "250px", margin: 'auto', marginLeft: '40px', marginRight: '40px'}}></img>
            </div>
            <div className="interested">
                <Contact style={{fontSize: '25px', marginTop: '100px'}}>안녕하세요!</Contact>
                <Contact style={{fontSize: '30px', marginTop: '5px'}}><strong><Typing>{landingTitle}</Typing> 개발자 정혜인 입니다.</strong></Contact>
                <Contact style={{fontSize: '18px', marginTop: '60px'}}>👩🏻‍💻 상상을 현실로 구현하는, <strong>프로그래밍</strong>을 좋아합니다.</Contact>
                <Contact style={{fontSize: '18px'}}>📸 아름다운 순간을 기록하는, <strong>사진 촬영</strong>을 좋아합니다.</Contact>
                <Contact style={{fontSize: '18px'}}>🥁 여러 악기가 하나의 음악이 되는, <strong>밴드 합주(드럼 연주)</strong>를 좋아합니다.</Contact>
            </div>
            <div className="contact" style={{marginTop: '100px'}}>
                <Contact>📧 CONTACT | jhi2359@gmail.com</Contact>
                <Contact>🐱 GITHUB |  <Link to='https://github.com/happyhyep'>@happyhyep</Link></Contact>
            </div>
            <div style={{display:"flex", justifyContent: 'space-between', alignItems: 'center', marginTop: '70px', marginBottom: '40px'}}><DashLine /><Happyhyep style={{width: '20%'}}>Education</Happyhyep><DashLine /></div>
                <Contact>- 경희대학교 컴퓨터공학과 (2021~)</Contact>
                <Contact>- 포항 장성 고등학교 (2018 ~ 2020)</Contact>
                <Contact>- 경상북도교육청 과학 영재 교육원 (2019)</Contact>
            <div style={{display:"flex", justifyContent: 'space-between', alignItems: 'center', marginTop: '70px', marginBottom: '40px'}}><DashLine /><Happyhyep style={{width: '20%'}}>Skills</Happyhyep><DashLine /></div>
            <div style={{display:"flex",  justifyContent: 'space-between', margin: 'auto', width:'170px', marginTop: '10px', marginBottom: '10px'}} >
                <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white" />
                <img src="https://img.shields.io/badge/JS-F7DF1E?style=flat&logo=JavaScript&logoColor=black" />
                <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=black" />
            </div>
            <div style={{display:"flex",  justifyContent: 'space-between', margin: 'auto', width:'200px', marginTop: '10px', marginBottom: '10px'}} >
                <img src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=Python&logoColor=white"/>
                <img src="https://img.shields.io/badge/C++-00599C?style=flat&logo=C&logoColor=white"/>
                <img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=black" />
            </div>
            <div style={{display:"flex",  justifyContent: 'space-between', margin: 'auto', width:'175px', marginTop: '10px', marginBottom: '10px'}} >
                <img src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=Docker&logoColor=white"/> 
                <img src="https://img.shields.io/badge/Amazon AWS-232F3E?style=flat&logo=amazonaws&logoColor=white"/> 
            </div>
            <div style={{display:"flex",  justifyContent: 'space-between', margin: 'auto', width:'250px', marginTop: '10px', marginBottom: '10px'}} >
                <img src="https://img.shields.io/badge/figma-F24E1E?style=flat&logo=figma&logoColor=white"/>
                <img src="https://img.shields.io/badge/styledComponents-DB7093?style=flat&logo=styled-components&logoColor=white"/>
                <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white"/>
            </div>
            <div style={{display:"flex",  justifyContent: 'space-between', margin: 'auto', width:'400px', marginTop: '10px', marginBottom: '10px'}} >
                <img src="https://img.shields.io/badge/Adobe Photoshop-31A8FF?style=flat&logo=Adobe Photoshop&logoColor=black"/>
                <img src="https://img.shields.io/badge/Adobe Premiere Pro-9999FF?style=flat&logo=Adobe Premiere Pro&logoColor=black"/>
                <img src="https://img.shields.io/badge/Adobe After Effects-9999FF?style=flat&logo=Adobe After Effects&logoColor=black"/>
            </div>
            <Footer/>
        </>
    )
}

const DashLine = styled.div`
    width: 30%;
    height: 0px;
    border: 1px dashed #000000;
    margin-bottom: 70px;
    margin-top: 70px;
`

const Text = styled.div`
    font-family: AppleSDGothic;
    font-size: 24px;
    text-align: center;
    color: #53354A;
    margin-top: 20px;
`

const Contact = styled.div`
    font-family: AppleSDGothic;
    font-size: 20px;
    text-align: center;
    color: #53354A;
    margin-top: 5px;
`

const Link = styled(NavLink)`
    text-decoration: none;
    color: #53354A;
`

const Happyhyep = styled.div`
    font-family: 'Redemption';
    font-style: normal;
    font-weight: 400;
    font-size: 90px;
    line-height: 71px;
    text-align: center;
    letter-spacing: 0.175em;
`

const Typing = styled.div`
    display: inline;
    vertical-align: middle;
    border-right: .05em solid black;
    animation:  cursor 0.2s ease infinite;
`