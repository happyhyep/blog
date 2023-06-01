import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import github from '../../icons/github.png';
import instagram from '../../icons/instagram.png';
import gmail from '../../icons/gmail.png';

const Footer = () => {
    return (
        <div className='Footer' style={{backgroundColor: 'black', height: '175px', marginTop: '100px'}}>
            <div className='footer-icons' style={{display: 'flex', justifyContent: 'space-between', margin: 'auto', width: '200px'}}>
                <NavLink to='https://github.com/happyhyep'><img alt="github" src={github} style={{width: '45px', marginTop: '40px'}}></img></NavLink>
                <NavLink to='https://www.instagram.com/happyhyep_day/'><img alt="instagram" src={instagram} style={{width: '45px', marginTop: '40px'}}></img></NavLink>
                <NavLink to="mailto:jhi2359@gmail.com" ><img alt="gmail" src={gmail} style={{width: '45px', marginTop: '40px'}}></img></NavLink>
            </div>
            <div className='copyright' style={{marginTop: '30px', fontFamily: 'AppleSdGothic', color: 'white', textAlign: 'center'}} >© 2023. Jeong Hye In. All rights reserved.</div>
        </div>
    )
}

export default Footer;

