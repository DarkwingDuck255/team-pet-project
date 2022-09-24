import './PersonalListCard.css';

import { useCallback } from 'react';
import { Link } from 'react-router-dom';

import Ellipse_44 from '../../images/Ellipse-44.svg';
import Ellipse_45 from '../../images/Ellipse-45.svg';
import Ellipse_46 from '../../images/Ellipse-46.svg';

import Rectangle_73 from '../../images/Rectangle-73.svg';
import Rectangle_74 from '../../images/Rectangle-74.svg';

const PersonalListCard = ({item, onClickCard}) => {
  
  const getFigure = useCallback((item) => {
    const id = item._id;
    switch (id) {
      case '1': return (<img className='card-img-background_ellipse-44' src={Ellipse_44}/>);
      case '2': return (
        <div className='card-img-background_ellipse-45-46'>
          <img className='card-img-background_ellipse-45' src={Ellipse_45}/>
          <img className='card-img-background_ellipse-46' src={Ellipse_46}/>
        </div>
      );
      case '3': return ('');
      case '4': return (<img className='card-img-background_rectangle-73' src={Rectangle_73}/>);
      case '5': return (<img className='card-img-background_rectangle-74' src={Rectangle_74}/>);
      case '6': return ('');
      case '7': return ('');
      case '8': return ('');
      default: return ('')
    }
  }, [item]);

  return (
    <div className='personal-list-card'>
      <div className='card-img-wrapper'>
        <div className='card-img-background'
          style={{
            backgroundColor: `${item.img_color}`, 
            transform: `${item.img_transform}`
          }}>
        </div>
        {
          getFigure(item)
        }
{        <img src={require(`../../images/foto/${item.desktop_foto}`)} className='card-img' /> }
      </div>
      
      <div className='card-text-wrapper'>
        <div className='card-text-name'>
          <Link to ={`/about/${item._id}`}>
            <span >{`${item.name}`}</span>
          </Link>
        </div>
        <div className='card-text-team-role'>
          <span>{`${item.team_role}`}</span>
        </div>
        
      </div>
    </div>
  );
}

export default PersonalListCard;