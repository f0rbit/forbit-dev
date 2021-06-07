import React, { Component } from 'react';

import { ReactComponent as LinkedIcon } from '../../assets/brand_icons/linkedin.svg'

export default class LinkedInCard extends Component {
    render() {
        return (
            <div className="bg-bgGrayLight rounded-md w-48 py-3  shadow-md">
                <div className="flex flex-col flex-wrap justify-center text-center">
                    <h1 className="text-2xl p-1">LinkedIn</h1>
                    <div>
                        <span className="flex justify-center gap-4">
                            <LinkedIcon className="fill-current w-6 h-6"/>
                            <a href="https://www.linkedin.com/in/tom-materne-001" className="text-blue-500">Tom Materne</a>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}