import React from "react";
import NavBar from "../components/Common/NavBar";
import Footer from "../components/Common/Footer";
import styled from "styled-components";
import {motion,  useScroll, useInView} from 'framer-motion';

export default function Projects(){
    const { scrollYProgress } = useScroll();

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

            <div style={{display:"flex", justifyContent: 'space-between', alignItems: 'center', marginTop: '70px', marginBottom: '40px'}}>
              <DashLine /><Happyhyep style={{width: '20%'}}>Design</Happyhyep><DashLine />
            </div>
            <Footer />
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

const Happyhyep = styled.div`
    font-family: 'Redemption';
    font-style: normal;
    font-weight: 400;
    font-size: 90px;
    line-height: 71px;
    text-align: center;
    letter-spacing: 0.175em;
`