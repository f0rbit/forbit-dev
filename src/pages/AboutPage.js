import React, { Component } from 'react';
import Menu from '../components/Menu'
import Languages from '../components/About Me/Languages'
import Technologies from '../components/About Me/Technologies';
import Tools from '../components/About Me/Tools';
class App extends Component {

  render() {
    return (
      <div className="font-sans font-bold bg-bgGray overflow-x-hidden overflow-y-hidden overscroll-none h-screen">
        <div className="w-screen fixed top-10">
          <div className="fixed overflow-auto h-screen top-0">
            <div className="h-20" />
            <div className="flex justify-center">
              <h1 className="text-center text-6xl py-5 text-transparent bg-clip-text bg-gradient-to-r from-forbitPink to-forbitBlue">About Me</h1>
            </div>
            <br />
            <div className="relative flex flex-wrap flex-col gap-6 w-screen justify-center p-3 text-center items-center">
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
        </div>


        <div className="relative w-screen h-auto">
          <Menu />
        </div>

      </div >

    )
  };
}
export default App;