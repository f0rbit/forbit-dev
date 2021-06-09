import React, { Component } from 'react'

import LanguageIcon from "../Icons"

export default class Tools extends Component {

    renderTools = () => {
        const languages = [
            "IntelliJ",
            "VSCode",
            "Photoshop",
            "Arch",

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
                    <h1 className="text-xl">Software - </h1>
                    <div className="flex gap-2 flex-wrap ">
                        {this.renderTools()}
                    </div>
                </div>
            </div>
        );
    }
}