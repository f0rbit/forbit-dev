import React, { Component } from 'react'

import Status from './ProjectStatus'

import LanguageIcon from '../components/LanguageIcon'
import DarkDungeonIcon from '../assets/project_icons/dark_dungeon.png'
import BitQuestIcon from '../assets/project_icons/bit_quest.png'
import PixelFlyIcon from '../assets/project_icons/pixel_fly.png'
import ForbitDevIcon from '../assets/project_icons/forbit_dev.png'

export default class ProjectInfo extends Component {

    getPicture = (icon) => {
        switch(icon) {
            case 'dark_dungeon.png': return DarkDungeonIcon;
            case 'bit_quest.png': return BitQuestIcon;
            case 'pixel_fly.png': return PixelFlyIcon;
            case 'forbit_dev.png': return ForbitDevIcon;
            default: return null;
        }
    }

    getIcon = (project) => {
        var _icon = this.getPicture(project.icon);
        if (_icon) return <img className="object-contain w-16 h-16" src={_icon} alt="Project Icon" />
        return <div className="h-16" />

    }

    getLink = (project) => {
        var _link = "";
        var _text = "";
        if (project.link) {
            _link = project.link;
            _text = "Project Link"
        } else if (project.repo) {
            _link = project.repo;
            _text = "GitHub repo";
        }

        return _link ? <a className="text-blue-400" href={_link}>{_text}</a> : null
    }

    getLinkObject = (project) => {
        var _link = this.getLink(project);
        if (_link) {
            return (
                <div className="p-3 bg-bgGrayLighter rounded-md w-max shadow-md">
                    {this.getLink(this.props.project)}
                </div>
            );
        } else {
            return null;
        }
    }

    renderLanguages = (languages) => {
        const constList = [];
        for (var i = 0; i < languages.length; i++) {
            constList.push(<LanguageIcon language={languages[i]} />)
        }
        return constList;
    }

    render() {
        return(
            <div className="bg-bgGrayLight rounded-md py-5 px-5 w-96 shadow-md">
                <div className="text-white h-full">
                    <div className="bg-bgGrayLighter rounded-2xl px-5 shadow-xl h-min min-w-min py-2">
                        <span className="flex justify-center items-center align-center gap-2">
                            <div className="flex-shrink-0">
                                {this.getIcon(this.props.project)}
                            </div>
                            <h1 className="text-3xl text-center ">{this.props.project.name}</h1>
                        </span>
                    </div>
                    {/*this.getPicture(this.props.project)*/}
                    <p className="font-light text-fgGray text-xl font-sans text-center p-3">{this.props.project.description}</p>
                    <br />
                    <br />
                    <span className="flex flex-row flex-wrap justify-center gap-4 items-center">
                        <div className="p-3 bg-bgGrayLighter rounded-md w-min shadow-md">
                            <Status status={this.props.project.status} />
                        </div>
                        {this.getLinkObject(this.props.project)}
                        <div className="flex flex-row p-3 bg-bgGrayLighter rounded-md gap-3 shadow-md">
                            {this.renderLanguages(this.props.project.language)}
                        </div>
                    </span>
                </div>
            </div>
        );
    }
}

