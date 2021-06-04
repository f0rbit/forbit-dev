import React, { Component } from 'react';

export default class Button extends Component {
    render() {
        return (
        <div className="rounded-lg bg-gradient-to-r bg-bgGrayLight hover:from-forbitPink hover:to-forbitBlue px-3 shadow-md py-1">
            <button className="font-sans font-semibold focus:outline-none">{this.props.id}</button>
        </div>
        )
    }
}