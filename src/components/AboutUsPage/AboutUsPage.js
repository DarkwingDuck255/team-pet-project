import './AboutUsPage.css';

import AboutSlogan from '../AboutSlogan/AboutSlogan';
import PersonalList from '../PersonalList/PersonalList';
import AboutUsHeader from '../AboutUsHeader/AboutUsHeader';
import Footer from '../Footer/Footer';

const AboutUsPage = () => {
  return (
    <div className='about-us-page'>
      <AboutUsHeader/>
      <AboutSlogan/>
      <PersonalList/>
      <Footer />
    </div>
  );
}
export default AboutUsPage;
