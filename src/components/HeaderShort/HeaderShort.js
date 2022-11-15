import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './HeaderShort.css'
import logo from '../../images/logo.svg'
import elipse1 from '../../images/elipse-1.svg';

function HeaderShort() {
    const { pathname } = useLocation();
    const [ isColor, setColor ] = useState(true);

    useEffect(() => {
        if (pathname === '/about') {
            setColor(true)
            console.log('zzz')
        }
    }, [pathname])
    


    return (
        <div className='header-short'>
            <div className='header-short__nav-wrapper'>
                <Link className='header-short__logo-Link' to="/">
                     <img className='header-short__logo' src={logo} alt='Логотип'></img>
                </Link>
                <nav className='header-short__nav'>
                    <Link className='header-short__nav-link common__link' to="/">Проект</Link>
                    <Link className={`header-short__nav-link common__link ${isColor ? 'header__nav-link_about-us-page' : ''}`} to="/about">О нас</Link>
                    <Link className='header-short__nav-link common__link' to="cases">Кейсы</Link>
                </nav>
            </div>
        </div>
    )
}

export default HeaderShort