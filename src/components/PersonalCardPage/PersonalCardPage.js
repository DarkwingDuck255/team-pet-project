import { useMemo, useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import './PersonalCardPage.css';

import data from '../../data/team-data.json';

import PersonalCard from '../PersonalCard/PersonalCard';
import HeaderElipse from '../HeaderElipse/HeaderElipse';
//import HeaderShort from '../HeaderShort/HeaderShort';
import NotFound404 from '../NotFound404/NotFound404';
import Footer from '../Footer/Footer';

const PersonalCardPage = () => {
  const { id } = useParams();
  const { pathname } = useLocation();

  const teamMember = useMemo(()=>{
    if(data) {
      const member = data.team_members.find((member) => member._id === id);
      if (member) return member;
      return null;
    } else {
      return null;
    }
  }, [data, pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <>
      {
        teamMember ? (
          <div className='personal-card-page'>
            <HeaderElipse />
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
