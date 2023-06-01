import React from "react";
import NavBar from "../components/Common/NavBar";
import title from "../img/title.png";
import Footer from "../components/Common/Footer";
import introduce_self from '../img/introduce_self.png';

export default function Home(){

    return (
        <>
            <NavBar></NavBar>
            <img alt="title" src={title} style={{width: '100%'}}></img>
            <div className="profile" style={{display:"flex", justifyContent: 'center', marginTop:'200px', marginBottom: '200px'}}><img alt="introduce_self" src={introduce_self} style={{width: '500px'}}></img></div>
            <Footer />

        </>
    )
}
