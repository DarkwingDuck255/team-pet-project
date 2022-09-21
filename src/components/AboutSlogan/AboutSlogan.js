import './AboutSlogan.css';

import circle1 from '../../images/elipse-1.svg';

const AboutSlogan = () => {
  return (
    <div className='about-slogan'>
        <img src={circle1}></img>
      <div className='slogan'>
          <span>Мы молодые, амбициозные ребята и нам нравится наше дело В процессе поиска работы мы решили объединиться и показать на деле, что мы умеем делать </span>
      </div>
    </div>
  );
}

export default AboutSlogan;
