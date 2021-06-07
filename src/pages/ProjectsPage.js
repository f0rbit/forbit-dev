import React, {Component} from 'react';
import Menu from '../components/Menu'
import ProjectInfo from '../components/ProjectInfo'
import projects from '../assets/current_projects.json'

class ProjectsPage extends Component {

  renderProjects = () => {
    const constList = [];
    for (var i = 0; i < projects.length; i++) {
      // render projects[i]
      constList.push(<ProjectInfo project={projects[i]} />)
    }
    return constList;
  }

  render() { return(
    <div className="font-sans font-bold bg-bgGray w-full h-screen overflow-hidden">
        <div className="w-screen fixed top-10">
          <div className="fixed overflow-auto h-screen top-0">
            <div className="h-20" />
            <div className="flex justify-center">
              <h1 className="text-center text-6xl py-5 w-min text-transparent bg-clip-text bg-gradient-to-r from-forbitPink to-forbitBlue">Projects</h1>
            </div>
            <br />
            <div className="relative flex flex-wrap gap-6 w-screen justify-center p-3">
              {this.renderProjects()}
            </div>
          </div>
        </div>
        <div className="relative h-auto w-screen">
            <Menu />
        </div>
    </div>
  )};
}
export default ProjectsPage;