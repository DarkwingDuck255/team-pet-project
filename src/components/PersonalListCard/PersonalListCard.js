import './PersonalListCard.css';

import { useCallback } from 'react';
import { Link } from 'react-router-dom';

import Ellipse_44 from '../../images/Ellipse-44.svg';
import Ellipse_45 from '../../images/Ellipse-45.svg';
import Ellipse_46 from '../../images/Ellipse-46.svg';

import Rectangle_73 from '../../images/Rectangle-73.svg';
import Rectangle_74 from '../../images/Rectangle-74.svg';

import Ellipse_44_pad from '../../images/pad/Ellipse-44.svg';
import Ellipse_45_pad from '../../images/pad/Ellipse-45.svg';
import Ellipse_46_pad from '../../images/pad/Ellipse-46.svg';

import Rectangle_73_pad from '../../images/pad/Rectangle-73.svg';
import Rectangle_74_pad from '../../images/pad/Rectangle-74.svg';


const PersonalListCard = ({ item }) => {

  const getFigure = useCallback((item) => {
    const id = item._id;
    switch (id) {
      case '1': return (<img className='personal-list-card__img-background_ellipse-44' src={Ellipse_44} alt="абстрактная геометрическая фигура"></img>);
      case '2': return (
        <div className='personal-list-card__img-background_ellipse-45-46'>
          <img className='personal-list-card__img-background_ellipse-45' src={Ellipse_45} alt="абстрактная геометрическая фигура"></img>
          <img className='personal-list-card__img-background_ellipse-46' src={Ellipse_46} alt="абстрактная геометрическая фигура"></img>
        </div>
      );
      case '3': return ('');
      case '4': return (<img className='personal-list-card__img-background_rectangle-73' src={Rectangle_73} alt="абстрактная геометрическая фигура"></img>);
      case '5': return (<img className='personal-list-card__img-background_rectangle-74' src={Rectangle_74} alt="абстрактная геометрическая фигура"></img>);
      case '6': return ('');
      case '7': return ('');
      case '8': return ('');
      default: return ('')
    }
  }, [item]);

  const getFigurePad = useCallback((item) => {
    const id = item._id;
    switch (id) {
      case '1': return (<img className='personal-list-card__img-background_ellipse-44-pad' src={Ellipse_44_pad} alt="абстрактная геометрическая фигура"></img>);
      case '2': return (
        <div className='personal-list-card__img-background_ellipse-45-46'>
          <img className='personal-list-card__img-background_ellipse-45-pad' src={Ellipse_45_pad} alt="абстрактная геометрическая фигура"></img>
          <img className='personal-list-card__img-background_ellipse-46-pad' src={Ellipse_46_pad} alt="абстрактная геометрическая фигура"></img>
        </div>
      );
      case '3': return ('');
      case '4': return (<img className='personal-list-card__img-background_rectangle-73-pad' src={Rectangle_73_pad} alt="абстрактная геометрическая фигура"></img>);
      case '5': return (<img className='personal-list-card__img-background_rectangle-74-pad' src={Rectangle_74_pad} alt="абстрактная геометрическая фигура"></img>);
      case '6': return ('');
      case '7': return ('');
      case '8': return ('');
      default: return ('')
    }
  }, [item]);


  return (
    <div className='personal-list-card'>
      <div className='personal-list-card__img-wrapper'>
        <div className='personal-list-card__img-background'
          style={{
            backgroundColor: `${item.img_color}`, 
            transform: `${item.img_transform}`,
            transformOrigin: `${item.img_transformOrigin}`
          }}>
        </div>
        {
          getFigure(item)
        }
        {
          getFigurePad(item)
        }
        <img src={require(`../../images/foto/${item.desktop_foto}`)} className='personal-list-card__img'></img>
      </div>
      <div className='personal-list-card__text-wrapper'>
        <div className='personal-list-card__text-name'>
          <Link to ={`/about/${item._id}`} className='personal-list-card__text-name-link'>
            <span className='personal-list-card__text-name-link-span'>{`${item.name}`}</span>
          </Link>
        </div>
        <div className='personal-list-card__text-team-role'>
          <span>{`${item.team_role}`}</span>
        </div>
        
      </div>
    </div>
  );
}

export default PersonalListCard;