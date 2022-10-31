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

  const [isPad, setIsPad] = useState(false);
  const [isMob, setIsMob] = useState(false);
  const [isDesk, setIsDesk] = useState(false);
  
  const screenResize = () => {
    if (window.innerWidth <= 768) {
      setIsPad(true);
      setIsMob(false);
      setIsDesk(false);
    }
    if (window.innerWidth <= 375) {
      setIsPad(false);
      setIsMob(true);
      setIsDesk(false);
    } 
    if (window.innerWidth > 768) {
      setIsPad(false);
      setIsMob(false);
      setIsDesk(true);
    }
//    console.log(window.innerWidth);
  };

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

  useEffect(() => {
    screenResize();
    window.addEventListener('resize', screenResize);
    return () => window.removeEventListener('resize', screenResize);
  }, [data, pathname]);

  return (
    <>
      {
        teamMember ? (
          <div className='personal-card-page'>
            <HeaderElipse isDesk={isDesk} isPad={isPad} isMob={isMob}/>
            <PersonalCard member={teamMember} isDesk={isDesk} isPad={isPad} isMob={isMob} />
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
