import React from "react";
import './Principals.css';
import imageOne from '../../images/principals-1.svg';
import chemistry from '../../images/chemistry.svg';
import zooming from '../../images/zooming.svg';
import book from '../../images/book.svg';
// Блок "принципы" на главной странице

function Principals() {

    return (
        <section className="principals">
            <h2 className="principals__title">
                Наши принципы
            </h2>
            <div className="principals__right-sided-pic">
                <div className="principals__subtitle-and-descr">
                    <h4 className="principals__subtitle">
                        Творчество и технологии
                    </h4>
                    <p className="principals__descr">
                        Наши творческие умы постоянно генерируют разные идеи и решения на основе технологий и иноваций в digital сфере
                    </p>
                </div>
                <img className="principals__right-sided-image" alt="парень с девушкой рождают идеи" src={imageOne}/>
            </div>
            <div className="principals__right-sided-pic">
                <div className="principals__subtitle-and-descr">
                    <h4 className="principals__subtitle">
                    Стремление к развитию
                    </h4>
                    <p className="principals__descr">
                    Пытливость наших умов зашла дальше изучения материалов, изложенных нам на курсах. И после окончания курсов, мы продолжаем изучать новую литературу, технологии, осваивать новые инструменты для работы
                    </p>
                </div>
                <img className="principals__right-sided-image" alt="девушка приветствует людей в интернете" src={zooming}/>
            </div>

            <div className="principals__right-sided-pic">
                <div className="principals__subtitle-and-descr">
                    <h4 className="principals__subtitle">
                    Стремление к развитию
                    </h4>
                    <p className="principals__descr">
                    Пытливость наших умов зашла дальше изучения материалов, изложенных нам на курсах. И после окончания курсов, мы продолжаем изучать новую литературу, технологии, осваивать новые инструменты для работы
                    </p>
                </div>
                <img className="principals__right-sided-image" alt="ученый тестирует новую формулу" src={chemistry}/>
            </div>

            <div className="principals__right-sided-pic">
                <div className="principals__subtitle-and-descr">
                    <h4 className="principals__subtitle">
                    Стремление к развитию
                    </h4>
                    <p className="principals__descr">
                    Пытливость наших умов зашла дальше изучения материалов, изложенных нам на курсах. И после окончания курсов, мы продолжаем изучать новую литературу, технологии, осваивать новые инструменты для работы
                    </p>
                </div>
                <img className="principals__right-sided-image" alt="парень изучает что-то новое в интернете" src={book}/>
            </div>
        </section>
    )
}

export default Principals