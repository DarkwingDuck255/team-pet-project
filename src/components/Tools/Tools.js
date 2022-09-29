import React, { useState } from "react";
import { a } from "react-router-dom";
import './Tools.css';

// Блок Инструментов
function Tools() {
    const [isClicked, setClicked] = useState(false)


    function openSpoiler() {
        if (isClicked === false) {
            setClicked(true)
        }
        else {
            setClicked(false)
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

            <div className="tools__spoiler tools__spoiler_blue">
                <div className="tools__spoiler-title-and-btn-wrapp">
                    <p className="tools__spoiler-title">
                        Дизайн
                    </p>
                    <button className="tools__spoiler-button" type="button" onClick={openSpoiler} />
                </div>

                <div className={`tools__spoiler-description-wrapp ${isClicked ? 'tools__spoiler-description-wrapp_open' : ''}`}>
                    <ul className="tools__spoiler_blue tools__spoiler-description">
                        <li className="tools__spoiler-description-item">Figma</li>
                        <li className="tools__spoiler-description-item">Miro</li>
                        <li className="tools__spoiler-description-item">CustDev</li>
                        <li className="tools__spoiler-description-item">Конкурентный анализ</li>
                        <li className="tools__spoiler-description-item">UX-тестирование</li>
                    </ul>
                    <ul className="tools__spoiler tools__spoiler_blue tools__spoiler-description">
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

            {/* <div className="tools__spoiler tools__spoiler_violet">
                <p className="tools__spoiler-title">
                    Разработка
                </p>
                <button className="tools__spoiler-button" type="button" />
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