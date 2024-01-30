import './index.scss';
import Profile from '../../assets/images/profile.png';
import Skills from '../skills';
import Certification from '../../assets/certification/certification.pdf'
import { Triangle } from 'react-loader-spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuperpowers } from '@fortawesome/free-brands-svg-icons';
import { faCircle, faCircleArrowDown, faCircleDot, faCircleExclamation, faCircleNodes } from '@fortawesome/free-solid-svg-icons';

const Home = () => {

  const openCertification = () => {
    window.open(Certification);
  }

  const profilePic = <div className="profile-pic">
    <img src={Profile} alt="profile picture" />
  </div>

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
          <h4>I believe that understanding your unique needs and vision is the key to creating a successful project. I'm committed to open communication, attention to detail, and delivering results that exceed your expectations.</h4>
          <div className="offer">
            <ul className='services'>
              <li><FontAwesomeIcon icon={faCircleNodes} color="#086d66" width={10} />&nbsp;  Full Website Development</li>
              <li><FontAwesomeIcon icon={faCircleNodes} color="#086d66" width={10} />&nbsp;  Responsive Design for Mobile Devices</li>
              <li><FontAwesomeIcon icon={faCircleNodes} color="#086d66" width={10} />&nbsp;  Custom Web Applications</li>
            </ul>

          </div>
        </div>

        <div className="right-side">
          <Skills />
        </div>


      </div>

      <Triangle
        color="#b90e75"
        height={150}
        width={150}
        wrapperClass='loader'
      />
    </>
  );
}

export default Home;