import React from "react";
import './Principals.css';
import imageOne from '../../images/principals-1.svg';
import chemistry from '../../images/chemistry.svg';
import zooming from '../../images/zooming.svg';
import book from '../../images/book.svg';
import figure1 from '../../images/triangle-yellow.svg';
import figure2 from '../../images/circles-orange.svg';
import figure3 from '../../images/circle-yellow-reverse.svg';
import figure4 from '../../images/circle-blue.svg';
import figure5 from '../../images/triangle-violet.svg';

// Блок "принципы" на главной странице

function Principals() {

    return (
        <section className="principals" id="principals">
            <img src={figure1} className='principals__figure-one' alt="абстрактная геометрическая фигура" />
            <img src={figure2} className='principals__figure-two' alt="абстрактная геометрическая фигура" />
            <img src={figure3} className='principals__figure-three' alt="абстрактная геометрическая фигура" />
            <img src={figure4} className='principals__figure-four' alt="абстрактная геометрическая фигура" />
            <img src={figure5} className='principals__figure-five' alt="абстрактная геометрическая фигура" />

            <h2 className="principals__title">
                Наши принципы
            </h2>
            <div className="principals__right-sided-pic">
                <div className="principals__subtitle-and-descr">
                    <h4 className="principals__subtitle">
                        Творчество и технологии
                    </h4>
                    <p className="principals__descr">
                        Наши творческие умы постоянно генерируют разные идеи и решения на основе технологий и инноваций в digital сфере
                    </p>
                </div>
                <img className="principals__right-sided-image" alt="парень с девушкой рождают идеи" src={imageOne} />
            </div>
            <div className="principals__right-sided-pic">
                <div className="principals__subtitle-and-descr">
                    <h4 className="principals__subtitle">
                        Честность и открытость
                    </h4>
                    <p className="principals__descr">
                        Мы прекрасно понимаем, что ложь всегда вскрывается, поэтому мы открыты друг перед другом и честны в работе.
                        Так же мы честно и открыто говорим о своих личных и профессиональных качествах своим потенциальным работодателям
                    </p>
                </div>
                <img className="principals__right-sided-image" alt="девушка приветствует людей в интернете" src={zooming} />
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
                <img className="principals__right-sided-image" alt="ученый тестирует новую формулу" src={chemistry} />
            </div>

            <div className="principals__right-sided-pic">
                <div className="principals__subtitle-and-descr">
                    <h4 className="principals__subtitle">
                        Проактивность
                    </h4>
                    <p className="principals__descr">
                        Сидеть на месте - это не про нас.
                        Мы объединились, чтобы показать не только словом, но и делом, что мы умеем и приобрести конкурентное преимущество
                    </p>
                </div>
                <img className="principals__right-sided-image" alt="парень изучает что-то новое в интернете" src={book} />
            </div>
        </section>
    )
}

export default Principals