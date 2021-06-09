import React, { Component } from 'react'

import LanguageIcon from "../Icons"

export default class Technologies extends Component {

    renderTechnologies = () => {
        const languages = [
            "React",
            "GitHub",
            "Git",
            "GameMaker",
            "Tailwind",
        ]
        const objects = [];
        for (var i = 0; i < languages.length; i++) {
            objects.push((
                <div className="w-min">
                    <LanguageIcon language={languages[i]} />
                </div>
            ));
        }
        return objects;
    }

    render() {
        return (
            <div>
                <div className="text-fgGray flex flex-wrap gap-2 justify-center items-center bg-bgGrayLight rounded-full py-4 px-8">
                    <h1 className="text-xl">Technologies - </h1>
                    <div className="flex gap-2 flex-wrap ">
                        {this.renderTechnologies()}
                    </div>
                </div>
            </div>
        );
    }
}