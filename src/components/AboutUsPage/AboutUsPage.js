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
  
  
  useEffect(() => {
    screenResize();
    window.addEventListener('resize', screenResize);
    return () => window.removeEventListener('resize', screenResize);
  }, []);
  
  return (
    <div className='about-us-page'>
      <HeaderElipse isDesk={isDesk} isPad={isPad} isMob={isMob} />
      <AboutSlogan isDesk={isDesk} isPad={isPad} isMob={isMob} />
      <PersonalList isDesk={isDesk} isPad={isPad} isMob={isMob} />
      <Footer />
    </div>
  );
}
export default AboutUsPage;
