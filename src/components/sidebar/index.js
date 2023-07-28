import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import Initials from '../../assets/images/initials.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCube, faHome, faLink, faShareAlt } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => (
    <div className="nav-bar">
      <Link className='logo' to='/'>
        <img src={Initials} alt="initials" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#575766" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
          <FontAwesomeIcon icon={faCube} color="#575766" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
          <FontAwesomeIcon icon={faLink} color="#575766" />
        </NavLink>
      </nav>
    </div>
)

export default Sidebar