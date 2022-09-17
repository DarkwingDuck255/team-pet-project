import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../images/logo.svg'
import figures from '../../images/figures.svg'
import rectangle from '../../images/yellow-rectangle.svg'

function Header() {
    return (
        <>
            <section className='header'>
                {/* <div className='header__rectangle-one-wrap'> */}
                    <div className='header__rectangle-one'/>
                {/* </div> */}
                <div className='header__rectangle-two'>
                    <div className='header__nav-and-title-wrapper'>
                        <div className='header__nav-wrapper'>
                            <Link className='header__logo-Link' to="#">
                                <img className='header__logo' src={logo} alt='Логотип'></img>
                            </Link>
                            <nav className='header__nav'>
                                <Link className='header__nav-Link common__Link' to="#">Проект</Link>
                                <Link className='header__nav-Link common__Link' to="#">О нас</Link>
                                <Link className='header__nav-Link common__Link' to="#">Кейсы</Link>
                            </nav>
                        </div>
                        <div className='header__title-wrapper'>
                            <h1 className='header__title'>
                                Мы - команда выпускников
                                Яндекс Практикума
                            </h1>
                            <p className='header__about-us'>
                                Нас объединили любовь к IT и желание создать интерактивное портфолио, которое расскажет о нас больше, чем резюме
                            </p>
                            <h2 className='header__about-us-cool'>Мы - смелые

                                {/* {тут будет меняющийся текст}  */}
                            </h2>
                        </div>
                    </div>
                    <div className='header__imgaes-block'>
                        {/* <div className='header__images-block-wrapper'> */}
                        <img className='header__image-figures' src={figures} alt='набор нестандартных фигур' />
                        <img className='header__image-yellow-rectangle' src={rectangle} alt='нестандартная фоновая фигура' />
                        {/* </div> */}
                    </div>
                </div>


            </section>
        </>
    )
}

export default Header