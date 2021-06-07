import React from 'react';
import MenuButton from './MenuButton'
import Logo from '../assets/noback-shadow.png'
function Menu() {
    return(
        <div className="bg-bgGrayLight p-1 font-mono absolute w-screen h-min flex flex-nowrap flex-row">
            <div id="title" className="mr-auto">
                <div className="bg-bgGrayLighter rounded-xl w-max shadow-md">
                    <a href="/">
                        {/*<p className="px-4 text-xl font-bold">{"forbit{}"}</p>*/}
                        <img src={Logo} className="object-contain h-9" alt="forbit_logo" title="Home Page"/>
                    </a>
                </div>
            </div>
            <div id="buttons" className="flex flex-wrap flex-row justify-end text-white gap-2 place-items-center px-2">
                
                <MenuButton id="About Me" link="/about" />
                <MenuButton id="Projects" link="/projects" />
                <MenuButton id="Contact" link="/contact" />
                <MenuButton id="GitHub" link="https://github.com/f0rbit"/>
               
            </div>
        </div>
    )
}

export default Menu