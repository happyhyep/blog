import React from "react";
import NavBar from "../components/Common/NavBar";
import title from "../img/title.png";


export default function Home(){

    return (
        <>
            <NavBar></NavBar>
            <img alt="title" src={title} style={{width: '100%'}}></img>
        </>
    )
}
