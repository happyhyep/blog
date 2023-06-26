import React, { useState, useEffect } from "react";
import NavBar from "../components/Common/NavBar"
import { NavLink } from "react-router-dom";
import {motion,  useScroll} from 'framer-motion';
import profile from "../img/profile.png";
import styled from "styled-components";
import pic1 from "../img/그림1.png";
import pic2 from "../img/그림2.png";
import pic3 from "../img/그림3.png";
import Footer from "../components/Common/Footer";

export default function Introduce() {
    const { scrollYProgress } = useScroll();

    const [landingTitle, setLandingTitle] = useState("");
    const [count, setCount] = useState(0);
    const [textNum, setTextNum] = useState(0);
    const textList = ["행복하게 매순간 최선을 다하는", "항상 열정이 넘치는", "긍정적으로 사고하는", "사용자의 편의를 생각하는", "주위 사람들까지 행복하게 만드는", "매순간 후회 없이 살아가는", "익숙함에 속지 않는"];
      
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
                        background: '#ffd400'
            }} />

            <div className="profile" style={{display:"flex", justifyContent: 'center', marginTop:'70px', marginBottom: '80px'}}><img alt="profile" src={profile} style={{width: '500px'}}></img></div>
            <div className="profile" style={{display:"flex", justifyContent: 'center', marginTop:'70px', marginBottom: '80px'}}>
                <Happyhyep>Jeong Hye In</Happyhyep>
            </div>
        
            <div className="introduce_myself" style={{marginTop: '50px', width: '60%', marginLeft: '25%'}}>
                <IntroduceText>안녕하세요,</IntroduceText>
                <IntroduceText>사용자들이 웹사이트나 애플리케이션을 사용할 때 좋은 경험을 제공하고자 하는 프론트엔드 개발자 정혜인입니다.</IntroduceText>
                <br />
                <IntroduceText>저는 사용자의 눈에 확 들어오게 하여 페이지를 각인시킴과 동시에 UI/UX에도 신경을 쓰는 것을 중요하게 생각합니다.</IntroduceText>
                <IntroduceText>사용자가 쉽게 이해하고 사용할 수 있는 직관적인 인터페이스를 구축하고,</IntroduceText>
                <IntroduceText>시각적으로 매력적이고 현대적인 디자인을 구현하는 것에 열정을 갖고 있습니다.</IntroduceText>
                <br />
                <IntroduceText>항상 창의적이고 협업을 중요시하는 개발자로서 최선을 다하고 있습니다.</IntroduceText>
                <IntroduceText>학생회장, 동아리 활동, 개발 협업 등을 진행하며 얻은 경험을 통해 다른 직무의 사람들과도 원활한 의사소통이 가능합니다.</IntroduceText>
                <br />
                <IntroduceText>매사에 행복하고 긍정적인 태도로 임하여</IntroduceText>
                <IntroduceText>단순한 코딩 뿐만 아니라 의사소통과 협업에서도 좋은 결과를 만들어낼 것입니다.</IntroduceText>
            </div>
            <div className="picture" style={{marginTop: '130px', display: "flex", justifyContent: 'center'}}>
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
const IntroduceText = styled.div`
    font-family: AppleSDGothic;
    font-size: 17px;
    color: #53354A;
    margin-top: 5px;
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
    color: #ffd400;
`