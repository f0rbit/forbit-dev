import React, { Component } from 'react';
import Menu from '../components/Menu'
import ProjectInfo from '../components/ProjectInfo'
import currentProjects from '../assets/current_projects.json'
import LanguageIcon from '../components/Icons'
import languages from '../assets/languages.json'

class LanguagePage extends Component {

    getProjectList = (language) => {
        const objectList = [];
        for (var i = 0; i < currentProjects.length; i++) {
            if (currentProjects[i].language.indexOf(language) >= 0) {
                objectList.push(
                    <ProjectInfo project={currentProjects[i]} />
                );
            }
        }
        return objectList;
    }

    getProjects = (language) => {
        return (
            <div className="flex flex-wrap flex-col gap-3">
                <div className="flex flex-row gap-4 justify-center items-center">

                    <LanguageIcon language={language} />
                    <h1 className="text-2xl">
                        {language} Projects
                </h1>
                </div>
                <div className="flex flex-row flex-wrap justify-center  gap-4">
                    {this.getProjectList(language)}
                </div>
            </div >
        )
    }

    list = (languages) => {
        const objects = [];
        for (var i = 0; i < languages.length; i++) {
            console.log("language: " + languages[i]);
            objects.push(
                <div id={languages[i]} className="bg-bgGrayDark rounded-xl p-5">
                    {this.getProjects(languages[i])}
                </div>
            );
        }
        return objects;
    }

    render() {
        return (
            <div className="font-sans font-bold bg-bgGray overflow-x-hidden">
                <div className="h-auto">
                    <Menu />
                </div>
                <div className="flex flex-wrap flex-col text-white text-center gap-4 justify-center p-4 items-center">
                    {this.list(languages)}
                </div>
                <div className="h-24" />
            </div>
        );
    }
}
export default LanguagePage;