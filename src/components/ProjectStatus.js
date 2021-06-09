import React, { Component } from 'react'

import { ReactComponent as Live } from '../assets/status_icons/live.svg'
import { ReactComponent as Development } from '../assets/status_icons/development.svg'
import { ReactComponent as Stopped } from '../assets/status_icons/stopped.svg'
import { ReactComponent as Released } from '../assets/status_icons/released.svg'
import { ReactComponent as Abandoned } from '../assets/status_icons/abandoned.svg'
export default class ProjectStatus extends Component {


    getLiveCard = () => {
        return (
            <div className="text-green-600 relative flex gap-4 justify-center w-min">
                <div>
                    <Live className="fill-current w-6 h-6" />
                </div>
                <p> Live </p>
            </div>
        )
    }
    getDevelopmentCard = () => {
        return (
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-forbitBlue to-forbitPink relative flex gap-4 justify-center w-min">
                <div>
                    <Development className="text-forbitBlue fill-current w-6 h-6" />
                </div>
                <p> Development </p>
            </div>
        )
    }
    getStoppedCard = () => {
        return (
            <div className="text-red-400 relative flex gap-4 justify-center w-min" >
                <div>
                    <Stopped className="fill-current w-6 h-6" />
                </div>
                <p> Stopped </p>
            </div>
        )
    }
    getReleasedCard = () => {
        return (
            <div className="text-green-500 relative flex gap-4 justify-center w-min">
                <div>
                    <Released className="fill-current w-6 h-6" />
                </div>
                <p> Released </p>
            </div>
        )
    }
    getAbandonedCard = () => {
        return (
            <div className="text-red-400 relative flex gap-4 justify-center w-min">
                <div>
                    <Abandoned className="fill-current w-6 h-6" />
                </div>
                <p> Abandoned </p>
            </div>
        )
    }

    getStatus = (status) => {
        switch (status) {
            case "live": return this.getLiveCard();
            case "development": return this.getDevelopmentCard();
            case "stopped": return this.getStoppedCard();
            case "released": return this.getReleasedCard();
            case "abandoned": return this.getAbandonedCard();
            default: return this.getDevelopmentCard();
        }
    }

    render() {
        return (
            <div>
                {this.getStatus(this.props.status)}
            </div>
        );
    }
}

