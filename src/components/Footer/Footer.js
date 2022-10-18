import React from "react";
import { Link } from 'react-router-dom';
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
                        {/* <p className="footer__project-list-item">
                            О нас
                        </p> */}
                        <p className="footer__project-list-item">
                            Наши принципы
                        </p>
                        <p className="footer__project-list-item">
                            Инструменты
                        </p>
                    </div>

                </div>

                <div className="footer__project">
                    <Link to='/about' className="footer__project-header common__link">
                        О нас
                    </Link>
                    <div className="footer__project-list">
                        <Link to={"/about/2"} className="footer__project-list-item common__link">
                            Ольга Никитина

                        </Link>
                        <Link to={"/about/3"} className="footer__project-list-item common__link">
                            Виталий Пичугин

                        </Link>
                        <Link to={"/about/1"} className="footer__project-list-item common__link">
                            Александра Сорокина

                        </Link>
                        <Link to={"/about/5"} className="footer__project-list-item common__link">
                            Арсен Абгарян


                        </Link>
                        <Link to={"/about/6"} className="footer__project-list-item common__link">
                            Олег Глухов


                        </Link>
                        <Link to={"/about/8"} className="footer__project-list-item common__link">
                            Илья Савин


                        </Link>
                        <Link to={"/about/7"} className="footer__project-list-item common__link">
                            Дарья Завитаева
                            

                        </Link>
                        <Link to={"/about/4"} className="footer__project-list-item common__link">

                            Екатерина Джексембаева

                        </Link>
                    </div>

                </div>

                <div className="footer__project">
                    <h4 className="footer__project-header">
                        Кейсы
                    </h4>
                    {/* <div className="footer__project-list">
                        <p className="footer__project-list-item">
                            Наш сайт
                        </p>
                        <p className="footer__project-list-item">
                            Виш-лист
                        </p>
                    </div> */}

                </div>
            </div>
            <div className="footer__contact-us">
                <h4 className="footer__contact-us-text">
                    Свяжитесь с нами
                </h4>
                <div className="footer__contact-us-wrapper">
                    <img className="footer__contact-us-image" alt="напишите нам" src={letter} />
                    <p className="footer__contact-us-email">wcde-studio@yandex.ru</p>
                </div>
            </div>

        </section>
    )
}

export default Footer