import './PersonalCard.css';

const PersonalCard = ({ member }) => {

  return (
    <div className='personal-card'>
      {`${member._id}`}
      <img src={require(`../../images/foto/${member.desktop_foto}`)}></img>
    </div>
  );
}

export default PersonalCard;
