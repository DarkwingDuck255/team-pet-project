import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderShort.css'
import logo from '../../images/logo.svg'
import elipse1 from '../../images/elipse-1.svg';

function HeaderShort() {
    return (
        <div className='header-short'>
            <div className='header-short__nav-wrapper'>
                <Link className='header-short__logo-Link' to="/">
                     <img className='header-short__logo' src={logo} alt='Логотип'></img>
                </Link>
                <nav className='header-short__nav'>
                    <Link className='header-short__nav-link common__link' to="/">Проект</Link>
                    <Link className='header-short__nav-link common__link' to="/about">О нас</Link>
                    <Link className='header-short__nav-link common__link' to="cases">Кейсы</Link>
                </nav>
            </div>
        </div>
    )
}

export default HeaderShort