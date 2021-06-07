import React, {Component} from 'react'
import projects from '../assets/current_projects.json'
import ProjectCard from './ProjectCard'

export default class Projects extends Component {
    
  renderProjects = () => {
    const constList = [];
    for (var i = 0; i < projects.length; i++) {
      // render projects[i]
      constList.push(<ProjectCard project={projects[i]} />)
    }
    return constList;
  }

    render() {
        return(
            <div>
                <h1 className="text-center text-white font-bold text-4xl py-4 border-b-4">Projects</h1>
                <br />
                <div className="flex flex-wrap gap-4 justify-center items-stretch">
                    {this.renderProjects()}
                </div>
            </div>
        );
    }
}