import React from 'react';
import MenuButton from './MenuButton'
function Menu() {
    return(
        <div className="bg-bgGrayLighter py-1 font-mono sticky top-0 w-screen">
            <div id="title" className="w-32 flex-initial absolute left-0">
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-forbitPink to-forbitBlue">
                    <a href="/">
                        <p className="px-4 text-xl font-bold">{"forbit{}"}</p>
                    </a>
                </div>
            </div>
            <div id="buttons" className="flex flex-initial flex-wrap flex-row text-white justify-end ml-32 space-x-2 px-3">
                
                <MenuButton id="About Me" link="/about" />
                <MenuButton id="Projects" link="/projects" />
                <MenuButton id="Contact" link="/contact" />
                <MenuButton id="GitHub" link="https://github.com/f0rbit"/>
               
            </div>
        </div>
    )
}

export default Menu