import React, { Component } from 'react';
import Menu from '../components/Menu'
import Languages from '../components/About Me/Languages'
import Technologies from '../components/About Me/Technologies';
import Tools from '../components/About Me/Tools';

import description from '../assets/description.json'

class App extends Component {

  loadDescription = () => {
    var text = description.text;
    const objectList = [];
    while (text.includes("#")) {
      console.log("found #");
      var index = text.indexOf("#");
      var txt = text.substring(0, index);
      objectList.push(<p>{txt}</p>);
      //objectList.push(<br />);
      text = text.substr(index + 1);
    }
    objectList.push(<p>{text}</p>);
    return objectList;
  }

  render() {
    return (
      <div className="font-sans font-bold bg-bgGray overflow-x-hidden overflow-y-hidden overscroll-none h-screen">
        <div className="w-screen fixed top-10">
          <div className="fixed overflow-auto h-screen top-0 w-screen">
            <div className="h-20" />
            <div className="flex justify-center">
              <h1 className="text-center text-6xl py-5 text-transparent bg-clip-text bg-gradient-to-r from-forbitPink to-forbitBlue">About Me</h1>
            </div>
            <br />
            <div className="relative flex justify-center flex-wrap items-center align-middle px-4">
              <div className="bg-bgGrayLight w-48rem rounded-lg p-5 text-white font-normal">
                <h1 className="text-white text-center text-3xl font-bold">Description</h1>
                <br />
                <div className="text-fgGray font-normal font-serif">
                  {this.loadDescription()}
                </div>

              </div>
              <div className="relative flex flex-wrap flex-col w-48rem gap-6 justify-center p-3 text-center items-center">
                <div className="flex gap-4 flex-col">
                  <h1 className="text-white text-bold text-2xl">My Tech Stack</h1>
                  <Languages />
                  <Technologies />
                  <Tools />
                </div>
                <div className="flex gap-4 flex-col ">
                  <h1 className="text-white text-bold text-2xl">Tech I want to learn</h1>
                  <div className="text-white flex justify-center bg-bgGrayLight rounded-lg p-4">
                    <ul className="list-disc text-left">
                      <li>TypeScript</li>
                      <li>Vue</li>
                      <li>Node.js</li>
                      <li>C#</li>
                      <li>Rust</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-screen h-20" />
            <div>
              <div className="flex justify-center">
                <h1 className="text-center text-3xl text-transparent bg-clip-text bg-gradient-to-r from-forbitPink to-forbitBlue">Projects</h1>
              </div>
              {/* PROJECT BASED ON LANGUAGE SELECTED COMPONENT */}
            </div>

          </div>
        </div>


        <div className="relative w-screen h-auto">
          <Menu />
        </div>

      </div >

    )
  };
}
export default App;