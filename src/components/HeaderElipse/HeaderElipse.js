import { React, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './HeaderElipse.css'
import logo from '../../images/logo.svg'
import elipse1 from '../../images/Subtract.svg';
import elipse1_pad from '../../images/pad/Subtract.svg';

function HeaderElipse({isDesk, isPad, isMob}) {

  const { pathname } = useLocation();
 
  const getElipse = useCallback(() => {
    return pathname.indexOf('/about/') ? isDesk ? (
      <div className='header-elipse__elipse-wrapp'>
        <img className='header-elipse__elipse' src={elipse1}  alt="абстрактная геометрическая фигура"/>
      </div>
    ) : isPad ? (
      <div className='header-elipse__elipse-wrapp'>
        <img className='header-elipse__elipse' src={elipse1_pad}  alt="абстрактная геометрическая фигура"/>
      </div>
    ) : isMob ? (
      null
    ) : (
      null ) : (
      null
    )
  }, [pathname, isDesk, isPad, isMob]);


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
          {
            getElipse()
          }
        </div>
    )
}

export default HeaderElipse