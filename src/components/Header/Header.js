import React, { useEffect, useState } from 'react';
import './Header.css'
import logo from '../../images/logo.svg'
import figures from '../../images/figures.svg'
import rectangle from '../../images/yellow-rectangle.svg'



function Header() {
    let [isText, setText] = React.useState('молодые');
    let [counter, setCounter] = React.useState(0);

    const text = [
        'молодые',
        'амбициозные, а разраб - дебил',
        'активные',
        'смелые',
        'готовы к работе'
    ];

    // console.log(text.length)


    function changeText() {
        setText(text[counter])
        setCounter(counter + 1);
        // console.log(isText);
        // return () => {
        if (counter >= text.length - 1) {
            setCounter(0);
            setText(text[counter])
            return
        }
    }
    // }


    useEffect(() => {
        setTimeout(changeText, 3000)
    }, [counter])

    return (
        <>
            <section className='header'>
                {/* <div className='header__rectangle-one-wrap'> */}
                <div className='header__rectangle-one' />
                {/* </div> */}
                <div className='header__rectangle-two'>
                    <div className='header__nav-and-title-wrapper'>
                        <div className='header__nav-wrapper'>
                            <a className='header__logo-link' to="#">
                                <img className='header__logo' src={logo} alt='Логотип'></img>
                            </a>
                            <nav className='header__nav'>
                                <a className='header__nav-link common__link' to="#">Проект</a>
                                <a className='header__nav-link common__link' to="#">О нас</a>
                                <a className='header__nav-link common__link' to="#">Кейсы</a>
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
                            <h2 className='header__about-us-cool'>Мы - {isText}

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