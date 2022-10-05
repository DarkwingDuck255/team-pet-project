import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUsHeader.css'
import logo from '../../images/logo.svg'

function AboutUsHeader() {
    return (
        <div className='about_us_header'>
            <div className='about_us_header__nav-wrapper'>
                <Link className='about_us_header__logo-Link' to="/">
                     <img className='about_us_header__logo' src={logo} alt='Логотип'></img>
                </Link>
                <nav className='about_us_header__nav'>
                    <Link className='about_us_header__nav-link common__link' to="/">Проект</Link>
                    <Link className='about_us_header__nav-link common__link' to="/about">О нас</Link>
                     <Link className='about_us_header__nav-link common__link' to="#">Кейсы</Link>
                </nav>
            </div>
        </div>
    )
}

export default AboutUsHeader