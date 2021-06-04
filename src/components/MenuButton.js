import React, { Component } from 'react';

export default class Button extends Component {
    render() {
        return (
        <div className="rounded-lg bg-gradient-to-r bg-bgGrayLight hover:from-forbitPink hover:to-forbitBlue px-3">
            <button className="font-bold focus:outline-none">{this.props.id}</button>
        </div>
        )
    }
}