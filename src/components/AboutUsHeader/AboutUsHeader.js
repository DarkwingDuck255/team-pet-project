import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUsHeader.css'
import logo from '../../images/logo.svg'

function AboutUsHeader() {
    return (
        <div>
            <div className='header__nav-wrapper'>
                <Link className='header__logo-Link' to="#">
                     <img className='header__logo' src={logo} alt='Логотип'></img>
                </Link>
                <nav className='header__nav'>
                    <Link className='header__nav-Link common__Link' to="/">Проект</Link>
                    <Link className='header__nav-Link common__Link' to="/about">О нас</Link>
                     <Link className='header__nav-Link common__Link' to="#">Кейсы</Link>
                </nav>
            </div>
        </div>
    )
}

export default AboutUsHeader