import React from "react";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Footer.css';
import letter from '../../images/letter.svg';

function Footer() {

    return (
        <section className="footer">
            <div className="footer__project-wrapepr">



                <div className="footer__project">
                    <Link to='/' className="footer__project-header common__link">
                        Проект
                    </Link>
                    <div className="footer__project-list">
                        {/* <p className="footer__project-list-item">
                            О нас
                        </p> */}
                        <HashLink to='/#principals' className="footer__project-list-item common__link">
                            Наши принципы
                        </HashLink>
                        <HashLink to='/#tools' className="footer__project-list-item common__link">
                            Инструменты
                        </HashLink>
                    </div>

                </div>

                <div className="footer__project">
                    <Link to={'/about'} className="footer__project-header common__link">
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
                    <Link to="/404" className="footer__project-header common__link">
                        Кейсы
                    </Link>
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
                    <a href="mailto:wcde-studio@yandex.ru" className="footer__contact-us-email common__link">wcde-studio@yandex.ru</a>
                </div>
            </div>

        </section>
    )
}

export default Footer