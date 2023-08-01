import './index.scss';
import { Triangle } from 'react-loader-spinner';
import data from '../../data/projects.json';
import Project from '../project';

const Projects = () => {

    const projects = data.projects.map((project) => {
        return (<Project
            key={project.id}
            screenshot={project.screenshot}
            name={project.name}
            tools={project.tools}
            link={project.link}
            githubrepo={project.githubrepo}
        />
        )
    })


    return (
        <>
            <div className="projects-page">
                <h2>Projects</h2>
                <div className="projects-container">
                    {projects}
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

export default Projects;