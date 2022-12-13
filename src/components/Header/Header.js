import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../images/logo.svg';
import olga from '../../images/olga.jpg';
import ekaterina from '../../images/ekaterina.jpg';
import ilya from '../../images/ilya.jpg';
// import figures from '../../images/figures.svg';
// import rectangle from '../../images/yellow-rectangle.svg';
import rectangle from '../../images/figures-group.svg';
import figure1 from '../../images/circle-yellow-violet.svg';
import figure2 from '../../images/doble-circle-violet.svg';
import figure3 from '../../images/circle-violet.svg';
import figure4 from '../../images/circle-yellow.svg';



function Header() {

    const [isSideMenu, openSideMenu] = useState(false);


    function hideOrShowSideMenu() {
        if (isSideMenu === true) {
            openSideMenu(false)
        }
        else {
            openSideMenu(true)
        }

    }
    return (
        <>
            <section className='header'>

                <div className='header__nav-wrapper'>
                    <Link className='header__logo-link' to="/">
                        <img className='header__logo' src={logo} alt='Логотип'></img>
                    </Link>
                    <nav className='header__nav'>
                        <div className='header__nav-link-wrapper'>
                            <Link className='header__nav-link header__nav-link_main' to="/">Проект</Link>
                            {/* <Link className={`header__nav-link common__link header__nav-link_main`} to="/about" onMouseEnter={showDropdownMenu} onMouseLeave={hideDropdownMenu}> */}
                            <Link className={`header__nav-link common__link header__nav-link_about-us`} to="/about">
                                О нас
                            </Link>
                            <Link className='header__nav-link header__nav-link_cases common__link' to="/404">Кейсы</Link>
                        </div>
                    </nav>
                    <button className={`${isSideMenu ? 'header__close-button' : 'header__nav-button'}`} onClick={hideOrShowSideMenu} />
                    <nav className={`header__mobile-nav ${isSideMenu ? 'header__mobile-nav_open' : ''}`}>
                        {/* <button className='header__close-button'  onClick={hideOrShowSideMenu}/> */}
                        <Link className='header__mobile-nav-link header__mobile-nav-link_orange' to="/"><span className='header__mobile-nav-link-text '>Проект</span></Link>
                        <Link className='header__mobile-nav-link header__mobile-nav-link_violet' to="/about"><span className='header__mobile-nav-link-text '>О нас</span></Link>
                        <Link className='header__mobile-nav-link header__mobile-nav-link_blue' to="/404"><span className='header__mobile-nav-link-text '>Кейсы</span></Link>
                    </nav>
                </div>


                {/* <div className='header__rectangle-one-wrap'> */}
                <div className='header__rectangle-one' />
                {/* </div> */}
                <div className='header__rectangle-two'>
                    <div className='header__nav-and-title-wrapper'>
                        <img src={figure1} className='header__figure-one' alt="абстрактная геометрическая фигура" />

                        <div className='header__title-wrapper'>
                            <img src={figure2} className='header__figure-two' alt="абстрактная геометрическая фигура" />
                            <img src={figure3} className='header__figure-three' alt="абстрактная геометрическая фигура" />
                            <img src={figure4} className='header__figure-four' alt="абстрактная геометрическая фигура" />

                            
                            <h1 className='header__title'>
                                Мы - команда выпускников
                                Яндекс Практикума
                            </h1>
                            <p className='header__about-us'>
                                Нас объединили любовь к IT и желание создать интерактивное портфолио, которое расскажет о нас больше, чем резюме
                            </p>
                            <h2 className="header__about-us-cool">
                                <span>Мы -</span>
                                <div className="header__about-us-cool-words">
                                    <div className="word1">молодые</div>
                                    <div className="word2">амбициозные</div>
                                    <div className="word3">активные</div>
                                    <div className="word4">смелые</div>
                                    <div className="word5">готовы к работе</div>
                                    <div className="word1">молодые</div>
                                    </div>
                            </h2>
                        </div>
                    </div>
                    <div className='header__imgaes-block'>
                        <img className='header__images-face-olga' src={olga} alt='фото Ольги' />
                        <img className='header__images-face-ekaterina' src={ekaterina} alt='фото Екатерины' />
                        <img className='header__images-face-ilya' src={ilya} alt='фото Ильи' />
                    </div>
                </div>


            </section>
        </>
    )
}

export default Header