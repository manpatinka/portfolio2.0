import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faGitAlt, faJsSquare, faReact, faNode } from '@fortawesome/free-brands-svg-icons';


const Skills = () => {

  return (
    <ul className='skills-list'>
    
    <li><FontAwesomeIcon className="skill" id="html" icon={faHtml5} title="HTML5" /></li>
    <li><FontAwesomeIcon className="skill" id="css" icon={faCss3} title="CSS3" /></li>
      <li><FontAwesomeIcon className="skill" id="react" icon={faReact} title="React" /></li>
      <li><FontAwesomeIcon className="skill" id="js" icon={faJsSquare} title="JavaScript" /></li>
      <li><FontAwesomeIcon className="skill" id="git" icon={faGitAlt} title="Git" /></li>
    </ul>
  );
}

export default Skills;