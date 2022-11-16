import './AboutSlogan.css';

const AboutSlogan = () => {
  return (
    <div className='about_slogan'>
      <div className='about_slogan__slogan'>
        <div className='about_slogan__title'>
          <h1 className='about_slogan__title-1'>
            We can do everything!
          </h1>
          <div className='about_slogan__title-1 about_slogan__title-1-shadow'>
            We can do everything!
         </div>
        </div>
        <div className='about_slogan__text-container'>
          <div className='about_slogan__text'>
            <p className='about_slogan__text-p'>Мы молодые, амбициозные ребята и нам нравится наше дело</p>
          </div>
          <div className='about_slogan__text about_slogan__text-right'>
            <p className='about_slogan__text-p'>В процессе поиска работы мы решили объединиться и показать на деле, что мы умеем</p>
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
