import React, { Component } from 'react'

export default class ProjectCard extends Component {
    
    clickFunction = () => {
        if (this.props.project.repo != null) {
            // open repo
            console.log("open repo");
            window.open(this.props.project.repo);
            return;
        } else if (this.props.project.link != null) {
            //open link
            console.log("open link");
            window.open(this.props.project.link);
            return;
        }
        console.log("no link or repo");
        return;
    }

    render() {
        return(
            <div>
            <button className="w-full bg-bgGrayLight rounded px-8 sm:py-1 lg:py-4 xl:py-8  bg-gradient-to-r hover:from-forbitPink hover:to-forbitBlue shadow-md" onClick={this.clickFunction}>
                <p className="text-white font-sans font-bold text-sm lg:text-base xl:text-lg ">{this.props.project.name}</p>
                <p className="w-48 text-gray-300 text-xs lg:text-s xl:text-base font-light">{this.props.project.description}</p>
            </button>
            </div>
        );
    }
}

