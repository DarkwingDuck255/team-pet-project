import { React, useCallback } from 'react';
import './NotFound404.css';

import notFoundImg from '../../images/Page Not Found 4 by Streamlinehq.png';
import { Link } from 'react-router-dom';

const NotFound404 = () => {

  // const buttonMain = useCallback(() => {
  //   window.location.href = '/';
  // }, []);
  // const buttonTeam = useCallback(() => {
  //   window.location.href = '/about';
  // }, []);

  return (
    <div className='notFound404'>
      <img src={notFoundImg} className='notFound404-img'/>
      <h1 className='notFound404__title'>Кто-то украл эту страницу!</h1>
      <p className='notFound404__text'>Мы в этом разберемся!</p>
      <p className='notFound404__text'>А пока посмотрите на нашу замечательную команду ;)</p>
      <div className='notFound404__button-block'>
        <Link className='notFound404__button-main' to='/'>
          На главную
        </Link>
        <Link className='notFound404__button-team' to='/about'>
          Посмотрель команду
        </Link>
      </div>
    </div>
  );
}

export default NotFound404;
