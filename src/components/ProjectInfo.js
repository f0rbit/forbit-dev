import React, { Component } from 'react'

import Status from './ProjectStatus'

import LanguageIcon from '../components/LanguageIcon'
import DarkDungeonIcon from '../assets/project_icons/dark_dungeon.png'
import BitQuestIcon from '../assets/project_icons/bit_quest.png'
import PixelFlyIcon from '../assets/project_icons/pixel_fly.png'

export default class ProjectInfo extends Component {

    getPicture = (icon) => {
        switch(icon) {
            case 'dark_dungeon.png': return DarkDungeonIcon;
            case 'bit_quest.png': return BitQuestIcon;
            case 'pixel_fly.png': return PixelFlyIcon;
            default: return null;
        }
    }

    getIcon = (project) => {
        var _icon = this.getPicture(project.icon);
        if (_icon) return <img className="object-contain w-16" src={_icon} alt="Project Icon" />

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
                <div className="p-3 bg-bgGrayLighter rounded-md w-max">
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
            <div className="bg-bgGrayLight rounded-md py-5 px-5 w-96">
                <div className="text-white h-full">
                    <span className="flex flex-row justify-center items-center align-center gap-2 h-16">
                        {this.getIcon(this.props.project)}
                        <h1 className="text-3xl">{this.props.project.name}</h1>
                    </span>
                    {/*this.getPicture(this.props.project)*/}
                    <p className="font-light text-fgGray text-xl font-serif">{this.props.project.description}</p>
                    <br />
                    <br />
                    <span className="flex flex-row flex-wrap justify-center gap-4 items-center">
                        <div className="p-3 bg-bgGrayLighter rounded-md w-min">
                            <Status status={this.props.project.status} />
                        </div>
                        {this.getLinkObject(this.props.project)}
                        <div className="flex flex-row p-3 bg-bgGrayLighter rounded-md gap-3">
                            {this.renderLanguages(this.props.project.language)}
                        </div>
                    </span>
                </div>
            </div>
        );
    }
}

