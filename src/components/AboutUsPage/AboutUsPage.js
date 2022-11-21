import { React, useState, useEffect } from 'react';

import './AboutUsPage.css';

import AboutSlogan from '../AboutSlogan/AboutSlogan';
import PersonalList from '../PersonalList/PersonalList';
import HeaderElipse from '../HeaderElipse/HeaderElipse';
import Footer from '../Footer/Footer';

const AboutUsPage = () => {
  return (
    <div className='about-us-page'>
      <HeaderElipse />
      <AboutSlogan />
      <PersonalList />
      <Footer />
    </div>
  );
}

export default AboutUsPage;
