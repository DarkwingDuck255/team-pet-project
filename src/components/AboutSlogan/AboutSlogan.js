import './AboutSlogan.css';

import elipse1 from '../../images/elipse-1.svg';
//<img className='about_slogan__elipse' src={elipse1}></img>
const AboutSlogan = () => {
  return (
    <div className='about_slogan'>
      <div className='about_slogan__slogan'>
        <div className='about__slogan-wrapp'>
          <img className='about_slogan__elipse' src={elipse1} />
        </div>
        <h1 className='about_slogan__title-1'>
          We can do everything!
        </h1>
        <div className='about_slogan__text-container'>
          <div className='about_slogan__text'>
            <p>Мы молодые, амбициозные ребята и нам нравится наше дело</p>
          </div>
          <div className='about_slogan__text'>
            <p>В процессе поиска работы мы решили объединиться и показать на деле, что мы умеем делать</p>
          </div>
        </div>
        <div className='about_slogan__title-2'>
          <p>Наша Dream team</p>
        </div>
      </div>
    </div>
  );
}

export default AboutSlogan;
