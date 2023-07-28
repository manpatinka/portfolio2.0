import './index.scss';
import Profile from '../../assets/images/profile.png';
import Skills from '../skills';
import Certification from '../../assets/certification/certification.pdf'
import { Triangle } from 'react-loader-spinner';

const Home = () => {

  const openCertification = () => {
    window.open(Certification);
  }

  return (
    <>
    <div className="container home-page">
    <div className="certification-container">
      <button onClick={openCertification}>See professional certification</button>
    </div>
      <div className="text-zone">
        <h1>Hi! My name is
          <span className='initial'>E</span>
          vgenia
          <span className="initial" id="y">Y</span>
          urkova.
        </h1>
        <h2>I'm a web developer from Vilnius, Lithuania.</h2>
        <Skills />
      </div>

      <div className="profile-pic">
        <img src={Profile} alt="profile picture" />
      </div>
    </div>

    <Triangle 
      color="#b90e75"
      height={100}
      width={100}
      wrapperClass='loader'
    />
    </>
  );
}

export default Home;