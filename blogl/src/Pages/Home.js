import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {motion,  useScroll, useInView} from 'framer-motion';
import NavBar from "../components/Common/NavBar";
import title from "../img/title.png";
import Footer from "../components/Common/Footer";
import pic3 from "../img/그림3.png";

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
                        background: '#ffd400'
            }} />
            <img alt="title" src={title} style={{width: '100%'}}></img>
            <div className="profile" style={{display:"flex", justifyContent: 'center', marginTop:'200px', marginBottom: '60px'}}>
                <img alt="pic3" src={pic3} style={{width: '500px', borderRadius: '100px'}}></img>
            </div>
            <Happyhyep>Jeong Hye In</Happyhyep>
            <div className="interested">
                <Contact style={{fontSize: '30px', marginTop: '100px'}}>안녕하세요!</Contact>
                <Contact style={{fontSize: '40px', marginTop: '10px'}}><strong><Typing>{landingTitle}</Typing> 개발자 정혜인 입니다.</strong></Contact>
                <Contact style={{fontSize: '18px', marginTop: '60px'}}>👩🏻‍💻 상상을 현실로 구현하는, <strong>프로그래밍</strong>을 좋아합니다.</Contact>
                <Contact style={{fontSize: '18px'}}>📸 아름다운 순간을 기록하는, <strong>사진 촬영</strong>을 좋아합니다.</Contact>
                <Contact style={{fontSize: '18px'}}>🥁 여러 악기가 하나의 음악이 되는, <strong>밴드 합주(드럼 연주)</strong>를 좋아합니다.</Contact>
                <Contact style={{fontSize: '15px', marginTop: '50px'}}>- 저에 대한 자세한 내용은 위의 메뉴를 참고해주세요! -</Contact>
            </div>
            <Footer />

        </> 
    )
}



const Happyhyep = styled.div`
    font-family: 'Redemption';
    font-style: normal;
    font-weight: 400;
    font-size: 90px;
    line-height: 71px;
    text-align: center;
    letter-spacing: 0.175em;
`
const Contact = styled.div`
    font-family: AppleSDGothic;
    font-size: 20px;
    text-align: center;
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