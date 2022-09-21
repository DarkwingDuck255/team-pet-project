import './AboutUsPage.css';

import AboutSlogan from '../AboutSlogan/AboutSlogan';
import PersonalList from '../PersonalList/PersonalList';
import AboutUsHeader from '../AboutUsHeader/AboutUsHeader';

const AboutUsPage = () => {
  return (
    <div className='about-us-page'>
      <AboutUsHeader/>
      <AboutSlogan/>
      <PersonalList/>
    </div>
  );
}
export default AboutUsPage;
