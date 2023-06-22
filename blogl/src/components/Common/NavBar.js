import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from '../../img/logo.png'

const NavBar = () => {

    return (
        <div className='NavBar' style={{width: '100%'}}>
            <TopMenu>
                    <div><NavTextLogo to={`${process.env.PUBLIC_URL}`}><Happyhyep className='animated-text'>happyhyep</Happyhyep></NavTextLogo></div>
                    <div style={{width: '450px', display: 'flex'}}>
                        <NavText to={`${process.env.PUBLIC_URL}/introduce`}>Introduce</NavText>
                        <NavText to={`${process.env.PUBLIC_URL}/awards`}>Awards</NavText>
                        <NavText to={`${process.env.PUBLIC_URL}/projects`}>Projects</NavText>
                        <NavText to={`${process.env.PUBLIC_URL}/activities`}>Activities</NavText>
                        <NavText to={`${process.env.PUBLIC_URL}/gallery`}>Gallery</NavText>
                    </div>
            </TopMenu>
        </div>
    )
}

export default NavBar;

const TopMenu = styled.div`
    height: 70px;
    display: flex;
    border-bottom-color: black;
    border-bottom-style: solid;
    border-bottom-width: 2px;
    justify-content: space-between;
    background-color: white;
    width: 100%;
`

const NavTextLogo = styled(NavLink)`
    text-decoration: none;


  .animated-text {
    color: transparent;
    width: 40vmax;

    cursor: pointer;

    background: conic-gradient(
      #00A6C6 10%,
      #01C7B7 20%,
      #F3ECDC 30%,
      #DFDBCE 35%,
      #B8B8B5 62%,
      #90796E 62%,
      #033468 75%,
      #21BCD6 75%,
      #1779BB 85%,
      #768FD6 85%
    );

    background-size: 50%;
    background-clip: text;
    -webkit-background-clip: text;

    animation: expand-rev 1s ease forwards;

    &:hover {
      animation: expand 1s ease forwards;
    }
  } 

  @keyframes expand {
    0% {
      background-size: 30%;
      background-position: 0 0;
    }
    20% {
      background-size: 55%;
      background-position: 0 1em;
    }
    100% {
      background-size: 325%;
      background-position: -15em -1em;
    }
  }

  @keyframes expand-rev {
    0% {
      background-size: 325%;
      background-position: -10em -4em;
    }
    20% {
      background-size: 55%;
      background-position: 0 2em;
    }
    100% {
      background-size: 30%;
      background-position: 2em 0.1em;
    }
  }
`

const NavText = styled(NavLink)`
    margin-left: 0rem;
    margin-right: 28px;
    display: flex;
    align-items: center;

    font-size: 16px;
    font-family: AppleSDGothic;
    color: rgb(0,0,0);
    text-decoration: none;
`;

const Happyhyep = styled.div` 
    margin-left: 30px;
    align-items: center;
    letter-spacing: 0.09em;

    font-family: 'Redemption';

    font-weight: 400;
    font-size: 60px;
    
`