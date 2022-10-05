import React, { useState } from "react";
import { a } from "react-router-dom";
import './Tools.css';

// Блок Инструментов
function Tools() {
    const [isClickedBlue, setClickedBlue] = useState(false)
    const [isClickedViolet, setClickedViolet] = useState(false)
    const [isClickedOrange, setClickedOrange] = useState(false)
    const [isClickedYellow, setClickedYellow] = useState(false)


    // Открытие спойлеров по цветам

    function openSpoilerBlue() {
        if (isClickedBlue === false) {
            setClickedBlue(true)
        }
        else {
            setClickedBlue(false)
        }
    }

    function openSpoilerViolet() {
        if (isClickedViolet === false) {
            setClickedViolet(true)
        }
        else {
            setClickedViolet(false)
        }
    }

    function openSpoilerOrange() {
        if (isClickedOrange === false) {
            setClickedOrange(true)
        }
        else {
            setClickedOrange(false)
        }
    }

    function openSpoilerYellow() {
        if (isClickedYellow === false) {
            setClickedYellow(true)
        }
        else {
            setClickedYellow(false)
        }
    }

    return (
        <section className="tools">
            <h2 className="tools__title">
                Инструменты
            </h2>
            <p className="tools__title-desciption">
                Которыми мы овладели в процессе обучения
            </p>
            <div className="tools__spoilers-wrap">


                <div className={`tools__spoiler tools__spoiler_blue ${isClickedBlue ? 'tools__spoiler_open' : 'tools__spoiler_close'}`}>
                    <div className="tools__spoiler-title-and-btn-wrapp" onClick={openSpoilerBlue}>
                        <p className="tools__spoiler-title">
                            Дизайн
                        </p>
                        <button className={`tools__spoiler-button ${isClickedBlue ? 'tools__spoiler-button_open' : 'tools__spoiler-button_close'}`} type="button" onClick={openSpoilerBlue} />
                    </div>

                    <div className={`tools__spoiler-description-wrapp ${isClickedBlue ? 'tools__spoiler-description-wrapp_open' : 'tools__spoiler-description-wrapp_close'}`}>
                        <ul className="tools__spoiler-description">
                            <li className="tools__spoiler-description-item">Figma</li>
                            <li className="tools__spoiler-description-item">Miro</li>
                            <li className="tools__spoiler-description-item">CustDev</li>
                            <li className="tools__spoiler-description-item">Конкурентный анализ</li>
                            <li className="tools__spoiler-description-item">UX-тестирование</li>
                            <li className="tools__spoiler-description-item">JTBD</li>
                            <li className="tools__spoiler-description-item">CJM
                            </li>
                            <li className="tools__spoiler-description-item">Гайдлайны IOS и Android
                            </li>
                            <li className="tools__spoiler-description-item">FigJam</li>
                            <li className="tools__spoiler-description-item">Notion
                            </li>
                        </ul>
                    </div>



                </div>


                <div className={`tools__spoiler tools__spoiler_violet ${isClickedViolet ? 'tools__spoiler_open' : 'tools__spoiler_close'}`}>
                    <div className="tools__spoiler-title-and-btn-wrapp" onClick={openSpoilerViolet}>
                        <p className="tools__spoiler-title">
                            Разработка
                        </p>
                        <button className={`tools__spoiler-button ${isClickedViolet ? 'tools__spoiler-button_open' : 'tools__spoiler-button_close'}`} type="button" onClick={openSpoilerViolet} />
                    </div>

                    <div className={`tools__spoiler-description-wrapp ${isClickedViolet ? 'tools__spoiler-description-wrapp_open' : 'tools__spoiler-description-wrapp_close'}`}>
                        <ul className="tools__spoiler-description">
                            <li className="tools__spoiler-description-item">HTML</li>
                            <li className="tools__spoiler-description-item">CSS</li>
                            <li className="tools__spoiler-description-item">MongoDB</li>
                            <li className="tools__spoiler-description-item">Git</li>
                            <li className="tools__spoiler-description-item">JavaScript</li>
                            <li className="tools__spoiler-description-item">NodeJS</li>
                            <li className="tools__spoiler-description-item">Redux
                            </li>
                            <li className="tools__spoiler-description-item">TypeScript
                            </li>
                            <li className="tools__spoiler-description-item">React</li>
                            <li className="tools__spoiler-description-item">Nginx
                            </li>
                            <li className="tools__spoiler-description-item">Jest
                            </li>
                            <li className="tools__spoiler-description-item">Figma
                            </li>
                            <li className="tools__spoiler-description-item">Postman
                            </li>
                            <li className="tools__spoiler-description-item">State Management
                            </li>
                            <li className="tools__spoiler-description-item">Рефакторинг
                            </li>
                            <li className="tools__spoiler-description-item">WebSocket
                            </li>
                            <li className="tools__spoiler-description-item">Express.js
                            </li>
                            <li className="tools__spoiler-description-item">Деплой
                            </li>

                        </ul>
                    </div>



                </div>


                <div className={`tools__spoiler tools__spoiler_orange ${isClickedOrange ? 'tools__spoiler_open' : 'tools__spoiler_close'}`}>
                    <div className="tools__spoiler-title-and-btn-wrapp" onClick={openSpoilerOrange}>
                        <p className="tools__spoiler-title">
                            Тестирование
                        </p>
                        <button className={`tools__spoiler-button ${isClickedOrange ? 'tools__spoiler-button_open' : 'tools__spoiler-button_close'}`} type="button" onClick={openSpoilerOrange} />
                    </div>

                    <div className={`tools__spoiler-description-wrapp ${isClickedOrange ? 'tools__spoiler-description-wrapp_open' : 'tools__spoiler-description-wrapp_close'}`}>
                        <ul className="tools__spoiler-description">
                            <li className="tools__spoiler-description-item">Cygwin
                            </li>
                            <li className="tools__spoiler-description-item">Postman
                            </li>
                            <li className="tools__spoiler-description-item">Charles
                            </li>
                            <li className="tools__spoiler-description-item">Android Studio
                            </li>
                            <li className="tools__spoiler-description-item">Apidoc
                            </li>
                            <li className="tools__spoiler-description-item">Swagger
                            </li>
                            <li className="tools__spoiler-description-item">DevTools
                            </li>
                            <li className="tools__spoiler-description-item">Jira
                            </li>
                            <li className="tools__spoiler-description-item">Яндекс.Трекер
                            </li>
                            <li className="tools__spoiler-description-item">Screen Recoder
                            </li>
                            <li className="tools__spoiler-description-item">Notion
                            </li>                        <li className="tools__spoiler-description-item">Trello
                            </li>
                            <li className="tools__spoiler-description-item">Figma
                            </li>
                            <li className="tools__spoiler-description-item">Draw.io
                            </li>
                            <li className="tools__spoiler-description-item">Miro
                            </li>
                        </ul>
                    </div>



                </div>


                <div className={`tools__spoiler tools__spoiler_yellow ${isClickedYellow ? 'tools__spoiler_open' : 'tools__spoiler_close'}`}>
                    <div className="tools__spoiler-title-and-btn-wrapp" onClick={openSpoilerYellow}>
                        <p className="tools__spoiler-title">
                            Управление проектом
                        </p>
                        <button className={`tools__spoiler-button ${isClickedYellow ? 'tools__spoiler-button_open' : 'tools__spoiler-button_close'}`} type="button" onClick={openSpoilerYellow} />
                    </div>

                    <div className={`tools__spoiler-description-wrapp ${isClickedYellow ? 'tools__spoiler-description-wrapp_open' : 'tools__spoiler-description-wrapp_close'}`}>
                        <ul className="tools__spoiler-description">
                            <li className="tools__spoiler-description-item">Figma
                            </li>
                            <li className="tools__spoiler-description-item">Miro
                            </li>
                            <li className="tools__spoiler-description-item">GanttPro
                            </li>
                            <li className="tools__spoiler-description-item">Kaiten
                            </li>
                            <li className="tools__spoiler-description-item">Agile
                            </li>
                            <li className="tools__spoiler-description-item">Kanban
                            </li>
                            <li className="tools__spoiler-description-item">Notion
                            </li>
                            <li className="tools__spoiler-description-item">Scrum
                            </li>
                            <li className="tools__spoiler-description-item">Waterfall
                            </li>
                            <li className="tools__spoiler-description-item">Управление командой
                            </li>
                            <li className="tools__spoiler-description-item"> Управление проектом
                            </li>
                            <li className="tools__spoiler-description-item">Яндекс. Трекер

                            </li>
                            <li className="tools__spoiler-description-item">Google Документы

                            </li>

                        </ul>
                    </div>



                </div>

                {/* <div className="tools__spoiler tools__spoiler_violet">
                <p className="tools__spoiler-title">
                    Разработка
                </p>
                <button className="tools__spoiler-button" type="button" onClick={openSpoiler} />
                <div className={`tools__spoiler-description-wrapp ${isClicked ? 'tools__spoiler-description-wrapp_open' : ''}`}>
                    <ul className="tools__spoiler tools__spoiler_violet tools__spoiler-description">
                        <li className="tools__spoiler-description-item"></li>
                        <li className="tools__spoiler-description-item"></li>
                        <li className="tools__spoiler-description-item"></li>
                        <li className="tools__spoiler-description-item"></li>
                        <li className="tools__spoiler-description-item"></li>
                    </ul>
                    <ul className="tools__spoiler tools__spoiler_violet tools__spoiler-description">
                        <li className="tools__spoiler-description-item"></li>
                        <li className="tools__spoiler-description-item"></li>
                        <li className="tools__spoiler-description-item"></li>
                        <li className="tools__spoiler-description-item"></li>
                        <li className="tools__spoiler-description-item"></li>
                    </ul>
                </div>
            </div>

            <div className="tools__spoiler tools__spoiler_orange">
                <p className="tools__spoiler-title">
                    Тестирование
                </p>
                <button className="tools__spoiler-button" type="button" />
                <ul className="tools__spoiler tools__spoiler_orange tools__spoiler-description">
                    <li className="tools__spoiler-description-item"></li>
                    <li className="tools__spoiler-description-item"></li>
                    <li className="tools__spoiler-description-item"></li>
                    <li className="tools__spoiler-description-item"></li>
                    <li className="tools__spoiler-description-item"></li>
                </ul>
                <ul className="tools__spoiler tools__spoiler_orange tools__spoiler-description">
                    <li className="tools__spoiler-description-item"></li>
                    <li className="tools__spoiler-description-item"></li>
                    <li className="tools__spoiler-description-item"></li>
                    <li className="tools__spoiler-description-item"></li>
                    <li className="tools__spoiler-description-item"></li>
                </ul>
            </div>

            <div className="tools__spoiler tools__spoiler_yellow">
                <p className="tools__spoiler-title">
                    Управление проектом
                </p>
                <button className="tools__spoiler-button" type="button" />
                <ul className="tools__spoiler tools__spoiler_yellow tools__spoiler-description">
                    <li className="tools__spoiler-description-item"></li>
                    <li className="tools__spoiler-description-item"></li>
                    <li className="tools__spoiler-description-item"></li>
                    <li className="tools__spoiler-description-item"></li>
                    <li className="tools__spoiler-description-item"></li>
                </ul>
                <ul className="tools__spoiler tools__spoiler_yellow tools__spoiler-description">
                    <li className="tools__spoiler-description-item"></li>
                    <li className="tools__spoiler-description-item"></li>
                    <li className="tools__spoiler-description-item"></li>
                    <li className="tools__spoiler-description-item"></li>
                    <li className="tools__spoiler-description-item"></li>
                </ul>
            </div> */}
            </div>
            <div className="tools__summary">
                <p className="tools__summary-text" >
                    Больше о нас расскажут
                </p>
                <a className="tools__summary-link" to='/our-cases'>Наши кейсы →</a>
            </div>
        </section>
    )
}

export default Tools