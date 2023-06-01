import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from '../../img/logo.png'

const NavBar = () => {

    return (
        <div className='NavBar'>
            <TopMenu>
                    <NavTextLogo to='/'><img alt="logo" src={logo} style={{width: '160px'}}></img></NavTextLogo>
                    <NavText to='/introduce'>Introduce</NavText>
                    <NavText to='/awards'>Awards</NavText>
                    <NavText to='/projects'>Projects</NavText>
                    <NavText to='/activities'>Activities</NavText>
                    <NavText to='/gallery'>Gallery</NavText>
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
    justify-content: center;
    background-color: white;
    width: 100%;
`

const NavTextLogo = styled(NavLink)`
    display: flex;
    width:100%;
    max-width: 1600px;
    margin-left: 30px;
    align-items: center;
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
`