import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {motion,  useScroll, useInView} from 'framer-motion';
import NavBar from "../components/Common/NavBar";
import title from "../img/title.png";
import Footer from "../components/Common/Footer";
import pic3 from "../img/그림3.png";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { NavLink } from "react-router-dom";
import './Home.css';

export default function Home(){
    const { scrollYProgress } = useScroll();
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

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: .7, 
      }
      
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          } else {
            entry.target.classList.remove('active');
          }
        });
      }, options);
      const textAnimationList = document.querySelectorAll('.aaa');
      const imageAnimationList = document.querySelectorAll('.profile');
      // 반복문을 돌려 모든 DOM에 적용
      textAnimationList.forEach(el => observer.observe(el));
      imageAnimationList.forEach(el => observer.observe(el));
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
                        background: '#93C6D5'
            }} />
                <motion.img alt="title" src={title} style={{width: '100%'}}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1}}
                      transition={{
                        duration: 1,
                        delay: 0.5,
                        ease: [0, 0.2, 0.5, 1.01]
                      }}></motion.img>
                <div className="profile-box" style={{display: "flex", marginTop:'200px', marginBottom: '10px', marginLeft: '15%', marginRight: '15%', justifyContent:'space-between'}}>
                    <div className="profile" style={{}}>
                        <img alt="pic3" src={pic3} style={{width: '500px', borderRadius: '70px'}}></img>
                    </div>
                
                    <div className="interested">
                        <Contact className="aaa" style={{fontSize: '40px', marginTop: '40px'}}>안녕하세요!</Contact>
                        <Contact className="aaa" style={{fontSize: '30px', marginTop: '20px'}}><strong> 행복하게 매일을 살아가는 개발자,</strong></Contact>
                        <Contact className="aaa" style={{fontSize: '25px', marginTop: '10px'}}>정혜인 입니다.</Contact>
                        <Contact style={{fontSize: '18px', marginTop: '60px'}}>개발을 하며 힘들 때도 많지만, </Contact>
                        <Contact style={{fontSize: '18px', marginBottom: '50px'}}>구현해냈을 때의 희열은 계속 개발을 하게 만드는 원동력이 됩니다.</Contact>
                        <Contact style={{fontSize: '18px'}}>그 희열을 누구보다 잘 알기에</Contact>
                        <Contact style={{fontSize: '18px'}}>항상 공부하고, 성장해나갑니다.</Contact>
                        <Contact style={{fontSize: '18px', marginBottom: '50px'}}>희열을 느끼기 위해 앞으로도 끊임없이 공부할 것입니다.</Contact>
                        <Contact style={{fontSize: '15px', marginTop: '50px'}}>저에 대한 자세한 내용은 introduce 메뉴에서 확인 바랍니다.</Contact>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'end', marginRight: '100px'}}>
                    <Button to={`${process.env.PUBLIC_URL}/introduce`} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>to Introduce Menu</Button>
                </div>
            <Footer />

        </> 
    )
}


const Happyhyep = styled.div` 
    font-family: redemption;
    font-style: normal;
    font-weight: 400;
    font-size: 90px;
    line-height: 71px;
    text-align: center;
    letter-spacing: 0.175em;
`
const Contact = styled.div`
    font-family: applesdgothic;
    font-size: 20px;
    color: #53354A;
    margin-top: 5px;

`

const Typing = styled.div`
    color: #ffd700;
    display: inline;
    vertical-align: middle;
    border-right: .05em solid black;
    animation:  cursor 0.2s ease infinite;
`

const Button = styled(NavLink)`
    border-radius: 5px;
    border-width: 0.5px;
    width: 200px;
    height: 30px;
    background-color: #333;
    color: #fff;
    text-align: center;
    text-decoration: none;
`