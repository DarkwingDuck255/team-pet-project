import React from "react";
import { a } from "react-router-dom";
import './Tools.css';

// Блок Инструментов
function Tools() {
    return (
        <section className="tools">
            <h2 className="tools__title">
                Инструменты
            </h2>
            <p className="tools__title-desciption">
                Которыми мы овладели в процессе обучения
            </p>

            <div className="tools__spoiler tools__spoiler_blue">
                <p className="tools__spoiler-title">
                    Дизайн
                </p>
                <button className="tools__spoiler-button" type="button" />
            </div>

            <div className="tools__spoiler tools__spoiler_violet">
                <p className="tools__spoiler-title">
                    Разработка
                </p>
                <button className="tools__spoiler-button" type="button" />
            </div>

            <div className="tools__spoiler tools__spoiler_orange">
                <p className="tools__spoiler-title">
                    Тестирование
                </p>
                <button className="tools__spoiler-button" type="button" />
            </div>

            <div className="tools__spoiler tools__spoiler_yellow">
                <p className="tools__spoiler-title">
                    Управление проектом
                </p>
                <button className="tools__spoiler-button" type="button" />
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