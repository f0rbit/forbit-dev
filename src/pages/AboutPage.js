import React, { Component } from 'react';
import Menu from '../components/Menu'
import Languages from '../components/About Me/Languages'
import Technologies from '../components/About Me/Technologies';
import Tools from '../components/About Me/Tools';
import languages from '../assets/languages.json'
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
      <div className="font-sans font-bold bg-bgGray w-screen h-screen overflow-hidden overflow-y-visible">
        <div className="">
          <Menu />
        </div>
        <div className="">
          <div className="flex justify-center">
            <h1 className="text-center text-6xl py-5 text-transparent bg-clip-text bg-gradient-to-r from-forbitPink to-forbitBlue">About Me</h1>
          </div>
          <br />
          <div className="flex justify-center flex-wrap items-center align-middle px-4">
            <div className="bg-bgGrayLight rounded-lg w-48rem p-5 text-white font-normal">
              <h1 className="text-white text-center text-3xl font-bold">Description</h1>
              <br />
              <div className="text-fgGray font-normal font-serif">
                {this.loadDescription()}
              </div>

            </div>
            <div className="flex flex-wrap flex-col w-48rem gap-6 justify-center p-3 text-center items-center">
              <div className="flex gap-4 flex-col">
                <h1 className="text-white text-bold text-2xl">My Tech Stack</h1>
                <Languages languages={languages} />
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
        </div>
      </div >

    )
  };
}
export default App;