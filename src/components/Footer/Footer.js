import React from "react";
import './Footer.css';
import letter from '../../images/letter.svg';

function Footer() {

    return (
        <section className="footer">
            <div className="footer__project-wrapepr">



                <div className="footer__project">
                    <h4 className="footer__project-header">
                        Проект
                    </h4>
                    <div className="footer__project-list">
                        <p className="footer__project-list-item">
                            О нас
                        </p>
                        <p className="footer__project-list-item">
                            Наши принципы
                        </p>
                        <p className="footer__project-list-item">
                            Инструменты
                        </p>
                    </div>

                </div>

                <div className="footer__project">
                    <h4 className="footer__project-header">
                        Наша команда
                    </h4>
                    <div className="footer__project-list">
                        <p className="footer__project-list-item">
                            Ольга Никитина

                        </p>
                        <p className="footer__project-list-item">
                            Виталий Пичугин

                        </p>
                        <p className="footer__project-list-item">
                            Александра Сорокина

                        </p>
                        <p className="footer__project-list-item">
                            Арсен Абгарян


                        </p>
                        <p className="footer__project-list-item">
                            Олег Глухов


                        </p>
                        <p className="footer__project-list-item">
                            Илья Савин


                        </p>
                        <p className="footer__project-list-item">
                            Дарья Завитаева
                            

                        </p>
                        <p className="footer__project-list-item">

                            Екатерина Джексембаева

                        </p>
                    </div>

                </div>

                <div className="footer__project">
                    <h4 className="footer__project-header">
                        Кейсы
                    </h4>
                    <div className="footer__project-list">
                        <p className="footer__project-list-item">
                            Наш сайт
                        </p>
                        <p className="footer__project-list-item">
                            Виш-лист
                        </p>
                    </div>

                </div>
            </div>
            <div className="footer__contact-us">
                <p className="footer__contact-us-text">
                    Свяжитесь с нами
                </p>
                <div className="footer__contact-us-wrapper">
                    <img className="footer__contact-us-image" alt="напишите нам" src={letter} />
                    <p className="footer__contact-us-email">wcde-studio@yandex.ru</p>
                </div>
            </div>

        </section>
    )
}

export default Footer