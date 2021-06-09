import React, { Component } from 'react';
import { ReactComponent as DiscordIcon } from '../../assets/brand_icons/discord.svg'

export default class DiscordCard extends Component {
    onClick = () => {
        navigator.clipboard.writeText(this.props.id);
    }

    render() {
        return (
            <div className="bg-bgGrayLight rounded-md w-48 py-3 shadow-md">
                <div className="flex flex-col flex-wrap justify-center text-center">
                    <h1 className="text-2xl p-1">Discord</h1>
                    <div>
                        <span className="flex justify-center gap-4">
                            <DiscordIcon className="fill-current w-6 h-6" />
                            <button className="text-blue-500 font-bold" title="Click to Copy" onClick={this.onClick} id="discordID">{this.props.id}</button>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}