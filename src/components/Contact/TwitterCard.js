import React, { Component } from 'react';

import { ReactComponent as TwitterIcon } from '../../assets/brand_icons/twitter.svg'

export default class TwitterCard extends Component {
    render() {
        return (
            <div className="bg-bgGrayLight rounded-md w-48 py-3  shadow-md">
                <div className="flex flex-col flex-wrap justify-center text-center">
                    <h1 className="text-2xl p-1">Twitter</h1>
                    <div>
                        <span className="flex justify-center gap-4">
                            <TwitterIcon className="fill-current w-6 h-6"/>
                            <a href="https://twitter.com/f0rbit" className="text-blue-500">@f0rbit</a>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}