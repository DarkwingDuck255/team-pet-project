import React, { useEffect, useState } from 'react';
import './Header.css'
import logo from '../../images/logo.svg';
import olga from '../../images/olga.jpg';
import ekaterina from '../../images/ekaterina.jpg';
import ilya from '../../images/ilya.jpg';
import figures from '../../images/figures.svg';
import rectangle from '../../images/yellow-rectangle.svg';
import figure1 from '../../images/circle-yellow-violet.svg';
import figure2 from '../../images/doble-circle-violet.svg';
import figure3 from '../../images/circle-violet.svg';
import figure4 from '../../images/circle-yellow.svg';



function Header() {
    // let [isText, setText] = React.useState('молодые');
    // let [counter, setCounter] = React.useState(0);
    // const [isChanged, setChanged] = useState(false)

    // const text = [
    //     'молодые',
    //     'амбициозные',
    //     'активные',
    //     'смелые',
    //     'готовы к работе'
    // ];

// Функция смены текста из массива

    // function changeText() {
    //     setText(text[counter])
    //     setCounter(counter + 1);
    //     setChanged(true)
    //     // console.log(isChanged)
    //     // console.log(isText);
    //     // return () => {
    //     if (counter >= text.length - 1) {
    //         setCounter(0);
    //         setText(text[counter])
    //         return
    //     }
    // }



    // Запуск функции выше по тафмауту в 3 секунды
    
    // useEffect(() => {
    //     setTimeout(changeText, 3000)
    //     setChanged(false)
    //     console.log(isChanged, 'a?')
    // }, [counter])

    return (
        <>
            <section className='header'>
                <img src={figure1} className='header__figure-one'/>
                <img src={figure2} className='header__figure-two'/>
                <img src={figure3} className='header__figure-three'/>
                <img src={figure4} className='header__figure-four'/>
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
                            <h2 className='header__about-us-cool'>Мы -&nbsp;
                            <span className='header__about-us-cool-words'/>

                            {/* тут вариант реализации через функцию, но прикрутить к ней анимацию у меня не вышло, поэтому реализовал через кейфреймы */}


                            {/* <span key={text} className={`header__about-us-cool-words ${isChanged ? 'header__about-us-cool-words_animate' : ''}`}> {isText}</span> */}
                            </h2>
                        </div>
                    </div>
                    <div className='header__imgaes-block'>
                        <img className='header__images-face-olga' src={olga}/>
                        <img className='header__images-face-ekaterina' src={ekaterina}/>
                        <img className='header__images-face-ilya' src={ilya}/>
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