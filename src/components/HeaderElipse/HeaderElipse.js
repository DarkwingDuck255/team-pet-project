import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './HeaderElipse.css'
import logo from '../../images/logo.svg'
import elipse1 from '../../images/elipse-1.svg';

function HeaderElipse() {
    const { pathname } = useLocation();
    const [ isColor, setColor ] = useState(true);

    useEffect(() => {
        if (pathname === '/about') {
            setColor(true)
            console.log('zzz')
        }
    }, [pathname])
    
    return (
        <div className='header-elipse'>
            <div className='header-elipse__nav-wrapper'>
                <Link className='header-elipse__logo-Link' to="/">
                     <img className='header-elipse__logo' src={logo} alt='Логотип'></img>
                </Link>
                <nav className='header-elipse__nav'>
                    <Link className='header-elipse__nav-link common__link' to="/">Проект</Link>
                    <Link className={`header-elipse__nav-link common__link ${isColor ? 'header__nav-link_about-us-page' : ''}`} to="/about">О нас</Link>
                    <Link className='header-elipse__nav-link common__link' to="cases">Кейсы</Link>
                </nav>
            </div>
            <div className='header-elipse__elipse-wrapp'>
              <img className='header-elipse__elipse' src={elipse1}  alt="абстрактная геометрическая фигура"/>
            </div>
        </div>
    )
}

export default HeaderElipse