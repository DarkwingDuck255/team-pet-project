import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import './PersonalCardPage.css';

import data from '../../data/team-data.json';

import PersonalCard from '../PersonalCard/PersonalCard';
import AboutUsHeader from '../AboutUsHeader/AboutUsHeader';

const PersonalCardPage = () => {
  const { id } = useParams();

  const teamMember = useMemo(()=>{
    if(data) {
      const member = data.team_members.find((member) => member._id === id);
      if (member) return member;
      return null;
    } else {
      return null;
    }
  }, [data])


  return (
    <div className='personal-card-page'>
{      <AboutUsHeader /> }
{   teamMember ? (<PersonalCard member={teamMember} />) : ( window.location.href = '/*')}
    </div>
  );
}

export default PersonalCardPage;