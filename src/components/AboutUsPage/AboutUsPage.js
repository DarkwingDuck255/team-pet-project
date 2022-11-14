import { React, useState, useEffect } from 'react';

import './AboutUsPage.css';

import AboutSlogan from '../AboutSlogan/AboutSlogan';
import PersonalList from '../PersonalList/PersonalList';
import HeaderElipse from '../HeaderElipse/HeaderElipse';
import Footer from '../Footer/Footer';

const AboutUsPage = () => {
  const [isPad, setIsPad] = useState(false);
  const [isMob, setIsMob] = useState(false);
  const [isDesk, setIsDesk] = useState(false);
  
  const screenResize = () => {
    if (768 < window.innerWidth < 1440) {
      setIsPad(true);
      setIsMob(false);
      setIsDesk(false);
    }
    if (window.innerWidth <= 768) {
      setIsPad(false);
      setIsMob(true);
      setIsDesk(false);
    } 
    if (window.innerWidth > 1440) {
      setIsPad(false);
      setIsMob(false);
      setIsDesk(true);
    }
    //console.log({'width': window.innerWidth, isDesk, isPad, isMob});
  };
  
  
  useEffect(() => {
    screenResize();
    window.addEventListener('resize', screenResize);
    return () => window.removeEventListener('resize', screenResize);
  }, []);
  
  return (
    <div className='about-us-page'>
      <HeaderElipse />
      <AboutSlogan isDesk={isDesk} isPad={isPad} isMob={isMob} />
      <PersonalList isDesk={isDesk} isPad={isPad} isMob={isMob} />
      <Footer />
    </div>
  );
}
export default AboutUsPage;
