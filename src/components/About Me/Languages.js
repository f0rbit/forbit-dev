import React, { Component } from 'react'

import LanguageIcon from "../Icons"

export default class Languages extends Component {
    renderLanguages = (languages) => {
        const objects = [];
        for (var i = 0; i < languages.length; i++) {
            objects.push((
                <div className="w-min">
                    <a href={"/projects/list#" + languages[i]}>
                        <LanguageIcon language={languages[i]} />
                    </a>
                </div>
            ));
        }
        return objects;
    }

    render() {
        return (
            <div>
                <div className="text-fgGray flex flex-wrap gap-2 justify-center items-center bg-bgGrayLight rounded-full py-4 px-8">
                    <h1 className="text-xl">Languages - </h1>
                    <div className="flex flex-wrap flex-row gap-2" >
                        {this.renderLanguages(this.props.languages)}
                    </div>
                </div>
            </div>
        );
    }
}