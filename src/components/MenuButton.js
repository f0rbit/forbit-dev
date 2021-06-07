import React, { Component } from 'react';

export default class Button extends Component {
    render() {
        return (
        <div className="rounded-lg bg-gradient-to-r bg-bgGrayLighter hover:from-forbitPink hover:to-forbitBlue px-3 shadow-md py-1">
            <a href={this.props.link}>
                <button className="font-sans font-semibold focus:outline-none">{this.props.id}</button>
            </a>
        </div>
        )
    }
}