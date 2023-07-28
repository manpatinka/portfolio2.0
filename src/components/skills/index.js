import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faGitAlt, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';


const Skills = () => {

    return ( 
        <ul className='skills-list'>
          <li><FontAwesomeIcon className="skill" id="first"  icon={faHtml5} title="HTML5" /></li>
          <li><FontAwesomeIcon className="skill" id="second" icon={faCss3} title="CSS3" /></li>
          <li><FontAwesomeIcon className="skill" id="third" icon={faReact} title="React" /></li>
          <li><FontAwesomeIcon className="skill" id="fourth" icon={faJsSquare} title="JavaScript" /></li>
          <li><FontAwesomeIcon className="skill" id="fifth" icon={faGitAlt} title="Git" /></li>
        </ul>
     );
}
 
export default Skills;