import React, { Component } from 'react';

import { ReactComponent as EmailIcon } from '../../assets/brand_icons/mail.svg'

export default class EmaiLCard extends Component {
    render() {
        return (
            <div className="bg-bgGrayLight rounded-md w-64 py-3  shadow-md">
                <div className="flex flex-col flex-wrap justify-center text-center">
                    <h1 className="text-2xl p-1">Email</h1>
                    <div>
                        <span className="flex justify-center gap-4">
                            <EmailIcon className="fill-current w-6 h-6"/>
                            <a href="mailto:contact@forbit.dev" className="text-blue-500">contact@forbit.dev</a>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}