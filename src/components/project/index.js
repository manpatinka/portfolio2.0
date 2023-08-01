import { Link } from 'react-router-dom';
import './index.scss';

const Project = ({ screenshot, name, tools, link, githubrepo }) => {
    return ( 
        
        <>
          <div className="project-container">
            <div className="image-container">
              <img src={screenshot} alt="screenshot" />
            </div>
            <div className="info">
              <h3 className='title'>{name}</h3>
              <p className="links"><Link to={link} className='link'>Live</Link> || 
               <Link to={githubrepo} className='githubrepo'>GitHub Repository</Link>
           </p>
               </div>
          </div>
        </> );
}
 
export default Project;