import { React, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './NotFound404.css';

import notFoundImg from '../../images/Page Not Found 4 by Streamlinehq.png';

const NotFound404 = () => {
  return (
    <div className='notFound404'>
      <img src={notFoundImg} className='notFound404-img'  alt="404 image"/>
      <h1 className='notFound404__title'>Кто-то украл эту страницу!</h1>
      <p className='notFound404__text'>Мы в этом разберемся!</p>
      <p className='notFound404__text'>А пока посмотрите на нашу замечательную команду ;)</p>
      <div className='notFound404__button-block'>
        <Link className='header__nav-link common__link' to="/">
          <button className='notFound404__button-main'>
            На главную
          </button>
        </Link>
        <Link className='header__nav-link common__link' to="/about">
          <button className='notFound404__button-team'>
            Посмотреть команду
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound404;
