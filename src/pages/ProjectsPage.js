import React, { Component } from 'react';
import Menu from '../components/Menu'
import ProjectInfo from '../components/ProjectInfo'
import projects from '../assets/current_projects.json'

class ProjectsPage extends Component {

  renderProjects = (abandoned) => {
    const constList = [];
    for (var i = 0; i < projects.length; i++) {
      // render projects[i]
      if (abandoned && (projects[i].status !== "abandoned")) continue;
      if (!abandoned && projects[i].status === "abandoned") continue;
      if (projects[i].hidden) continue;
      constList.push(<ProjectInfo project={projects[i]} />)
    }
    return constList;
  }

  render() {
    return (
      <div className="font-sans font-bold bg-bgGray w-full h-screen overflow-hidden overflow-y-visible">
        <div className="">
          <Menu />
        </div>
        <div className="flex justify-center">
          <h1 className="text-center text-6xl py-5  text-transparent bg-clip-text bg-gradient-to-r from-forbitPink to-forbitBlue">Current Projects</h1>
        </div>
        <br />
        <div className="flex flex-wrap gap-6 w-screen justify-center p-3">
          {this.renderProjects(false)}
        </div>
        <div className="flex justify-center">
          <h1 className="text-center text-6xl py-5  text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-300">Abandoned Projects</h1>
        </div>
        <br />
        <div className="flex flex-wrap gap-6 w-screen justify-center p-3">
          {this.renderProjects(true)}
        </div>
        <div className="h-10" />
      </div>
    )
  };
}
export default ProjectsPage;