import './PersonalCard.css';

import { React, useCallback, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
//      { <img src={require(`../../images/foto/${member.desktop_foto}`)} className='personal-card__card-img' /> }

const PersonalCard = ({ member, isDesk, isPad, isMob}) => {
  const { pathname } = useLocation();

  const buttonLink = useCallback(() => {
    window.location.href = `${member.resume}`;
  }, [member, pathname]);

  const personalCardInfoAboutMe = useMemo(() => {
    return (
      <div className='personal-card__info-about-me'>
        <div className='personal-card__about-me-title'>Обо мне:</div>
          {
            member.about_me.map((item, index) => {
              return item.title.indexOf('?') === -1 ? (
                <div style={{display: 'inline-block'}} key= {index} className='personal-card__about-me-text'>
                  <span className='personal-card__span-bold'>{`${item.title}`}: </span>
                  <span className='personal-card__span'>{`${item.text}`}</span>
                </div>
                ) : (
                <div key={index} className='personal-card__about-me-text'>
                  <span className='personal-card__span-bold'>{`${item.title}`}</span>
                   <span className='personal-card__span'>{`${item.text}`}</span>
                </div>
                )
            })
          }
        </div>
    )
  }, [member, pathname]);
  
  const personalNameRole = useMemo(() => {
    return (
      <>
        <div className='personal-card__name'>{`${member.name}`}</div>
        <div className='personal-card__role'>{`${member.team_role}`}</div>
      </>
    );
  }, [member, pathname]);

  return (
    <div className='personal-card'>
      <div className='personal-card__info-wrapper'>
        <div className='personal-card__img-button'>
          <div className='personal-card__card-img-wrapper'>
            <div className='personal-card__card-img-background'
              style={{
                backgroundColor: `${member.img_color}`, 
                transform: `${member.img_transform}`,
                transformOrigin: `${member.img_transformOrigin}`
              }}>
            </div>
          { <img src={require(`../../images/foto/${member.desktop_foto}`)} className='personal-card__card-img'  alt="command person foto"/>}
          </div>
          { isMob ? (
            <div className='personal-card__name-role'>
              {
                personalNameRole
              }
              {
                isDesk ? personalCardInfoAboutMe : null
              }
            </div>
            ) : null
          }
          <button className='personal-card__button' onClick={buttonLink} >Резюме</button>
          {
            isMob ? personalCardInfoAboutMe : null
          }
        </div>
        <div className='personal-card__info'>
          <div className='personal-card__info-title'>
          { isMob ? null : (
            <div className='personal-card__name-role'>
              {
                personalNameRole
              }
              {
                isDesk ? personalCardInfoAboutMe : null
              }
            </div>
            )
          }
            <div className='personal-card__connecting'>
              <div className='personal-card__connecting-text'>Связаться со мной:</div>
              {
                member.connecting.map((item, index) => {
                return (
                    <div style={{display: 'inline-block'}} key= {index} className='personal-card__connecting-address'>
                      <span className='personal-card__span-bold'>{`${item.title}`}: </span>
                      <span className='personal-card__span'>{`${item.text}`}</span>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>

      </div>
        {
          isPad ? personalCardInfoAboutMe : null
        }
    </div>
  );
}

export default PersonalCard;
