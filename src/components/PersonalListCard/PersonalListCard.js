import './PersonalListCard.css';
import { Link } from 'react-router-dom';
//        <img src={require(`../../images/foto/${item.desktop_foto}`)} className='card-img' />
//              item._id === '2' ? (<div  className='card-img-figure'></div>) : ''

const PersonalListCard = ({item, onClickCard}) => {
  return (
    <div className='personal-list-card'>
      <div className='card-img-wrapper'>
        <div className='card-img-background'
          style={{
            backgroundColor: `${item.img_color}`, 
            transform: `rotate(${item.img_deg}deg)`
          }}>

            {

            }

            <img src={require(`../../images/foto/${item.desktop_foto}`)} className='card-img' />
        </div>
 
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