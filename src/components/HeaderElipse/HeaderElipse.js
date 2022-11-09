import { React, useCallback, useMemo, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './HeaderElipse.css'
import logo from '../../images/logo.svg'
import elipse1 from '../../images/Subtract.svg';
import elipse1_pad from '../../images/pad/Subtract.svg';
import menu from '../../images/mob/Menu.svg';
import close from '../../images/mob/Close.svg';


const  HeaderElipse = ({isDesk, isPad, isMob}) => {
  const { pathname } = useLocation();
  const refNav = useRef();
  
  const [menuOpen, setMenu] = useState(false);
  
  const elipseFigure = useMemo(() => {
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

  const onClickMenu = useCallback(() => {
      if(menuOpen) {
        setMenu(false);
        refNav.current.style.transform ='translateX(100%)';
      } else {
        setMenu(true);
        refNav.current.style.transform ='translateX(0%)';
      }
     
  }, [menuOpen, refNav]);

  const navMenu = useMemo(() => {
    return (
      <nav className='header-elipse__nav' ref={refNav}>
        <Link 
          style={isMob ? {backgroundColor: 'rgba(244, 106, 20, 1)'} : null} 
          className='header-elipse__nav-link common__link' to="/"
        >
          Проект
        </Link>
        <Link 
          style={isMob ? {backgroundColor: 'rgba(104, 82, 217, 1)'} : null} 
          className='header-elipse__nav-link common__link' to="/about"
        >
          О нас
        </Link>
        <Link 
        style={isMob ? {backgroundColor: 'rgba(97, 151, 255, 1)'} : null} 
        className='header-elipse__nav-link common__link' to="cases"
        >
          Кейсы
        </Link>
      </nav>
    )
  }, [pathname, isDesk, isPad, isMob]);

    return (
        <div className='header-elipse'>
          <div className='header-elipse__nav-wrapper' >
            <Link className='header-elipse__logo-Link' to="/">
              <img className='header-elipse__logo' src={logo} alt='Логотип'></img>
            </Link>
            {
              isMob ? (
              <div className={'header-elipse__nav-menu-wrapper'}>
                <button onClick={onClickMenu} className={'header-elipse__nav-menu-button'}>
                  <img className={'header-elipse__nav-img'} src={menuOpen ? close : menu} alt='menu-img-close'></img>
                </button>
                {
                  navMenu
                }
              </div>
              ) : (
                navMenu
              )
            }
          </div>
          {
            elipseFigure
          }
        </div>
    )
}

export default HeaderElipse