import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import './PersonalCardPage.css';

import data from '../../data/team-data.json';

import PersonalCard from '../PersonalCard/PersonalCard';
import AboutUsHeader from '../AboutUsHeader/AboutUsHeader';
import NotFound404 from '../NotFound404/NotFound404';
import Footer from '../Footer/Footer';

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
    <>
      {
        teamMember ? (
          <div className='personal-card-page'>
            <AboutUsHeader />
            <PersonalCard member={teamMember} />
            <Footer />
          </div>
        ) : (
          <NotFound404/>
        )
      }
    </>
  );
}

export default PersonalCardPage;