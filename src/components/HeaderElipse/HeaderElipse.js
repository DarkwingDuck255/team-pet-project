import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderElipse.css'
import logo from '../../images/logo.svg'
import elipse1 from '../../images/elipse-1.svg';

function HeaderElipse() {
    return (
        <div className='header-elipse'>
            <div className='header-elipse__nav-wrapper'>
                <Link className='header-elipse__logo-Link' to="/">
                     <img className='header-elipse__logo' src={logo} alt='Логотип'></img>
                </Link>
                <nav className='header-elipse__nav'>
                    <Link className='header-elipse__nav-link common__link' to="/">Проект</Link>
                    <Link className='header-elipse__nav-link common__link' to="/about">О нас</Link>
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