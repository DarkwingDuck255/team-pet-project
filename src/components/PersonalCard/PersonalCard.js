import './PersonalCard.css';

import { React, useCallback } from 'react';
import { Link } from 'react-router-dom';
//      { <img src={require(`../../images/foto/${member.desktop_foto}`)} className='personal-card__card-img' /> }
const PersonalCard = ({ member }) => {

  const buttonLink = useCallback(() => {
    window.location.href = `${member.resume}`;
  }, []);

  return (
    <div className='personal-card'>
      <div className='personal-card__img-button'>
        <div className='personal-card__card-img-wrapper'>
          <div className='personal-card__card-img-background'
            style={{
              backgroundColor: `${member.img_color}`, 
              transform: `${member.img_transform}`,
              transformOrigin: `${member.img_transformOrigin}`
            }}>
          </div>
        {/* <div className='personal-card__card-img' style={{backgroundColor: 'red'}}> </div> */}
        { <img src={require(`../../images/foto/${member.desktop_foto}`)} className='personal-card__card-img' />}
        </div>
          <button className='personal-card__button' onClick={buttonLink} >Резюме</button>
      </div>

      <div className='personal-card__info'>
        <div className='personal-card__info-title'>
          <div className='personal-card__name-role'>
            <div className='personal-card__name'>{`${member.name}`}</div>
            <div className='personal-card__role'>{`${member.team_role}`}</div>
          </div>
          <div className='personal-card__connecting'>
            <div className='personal-card__connecting-text'>Связаться со мной</div>
            {
              member.connecting.map((item, index) => {
                return (
                  <div key= {index} className='personal-card__connecting-address'>{`${item.title}: ${item.text}`}</div>
                )
              })
            }

          </div>
        </div>
        <div className='personal-card__info-about-me'>
          <div className='personal-card__about-me-title'>Обо мне</div>
          {
            member.about_me.map((item, index) => {
              return (
                <div key={index} className='personal-card__about-me-text'>
                  <p className='personal-card__p'>{`${item.title}`}</p>
                  <span className='personal-card__span'>{`${item.text}`}</span>
                 </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default PersonalCard;
