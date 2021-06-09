import React, { Component } from "react";

export default class ProjectCard extends Component {
    getLink = (project) => {
        if (project.repo) {
            return project.repo;
        } else if (project.link) {
            return project.link;
        } else {
            return "#";
        }
    };

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
    };

    render() {
        return (
            <div>
                <a href={this.getLink(this.props.project)}>
                    <button className="w-64 h-full bg-bgGrayLight rounded-xl px-8 py-6 bg-gradient-to-r hover:from-forbitPink hover:to-forbitBlue shadow-md">
                        <div className="flex flex-col flex-wrap items-center">
                            <div className="bg-bgGrayLighter rounded-xl px-4 py-2">
                                <p className="text-white font-sans font-bold text-2xl">
                                    {this.props.project.name}
                                </p>
                            </div>
                            <div>
                                <p className="text-fgGrayLigther font-light py-2">
                                    {this.props.project.description}
                                </p>
                            </div>
                        </div>
                    </button>
                </a>
            </div>
        );
    }
}
