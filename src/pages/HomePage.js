import React, { Component } from 'react';
import Card from '../components/Card'
import Menu from '../components/Menu'
import Background from '../assets/2fuS10.gif'
import Projects from '../components/Projects'

class HomePage extends Component {


  render() {
    return (
      <div className="font-sans font-bold bg-bgGray overflow-x-hidden overflow-y-hidden overscroll-none h-screen">
        <div className="fixed z-10 w-screen h-auto">
          <Menu />
        </div>
        <div className="bg-bgGray fixed">
          <img className="object-fill object-center h-screen w-screen" src={Background} alt="Background" />
        </div>
        <div className="fixed h-screen w-screen top-10 bg-gradient-to-r from-bgGray via-bgGray to-none opacity-95 backdrop-filter backdrop-blur-xl" />
        <div className="fixed flex flex-wrap top-20 max-w-940 h-85s min-w-min px-10 justify-center content-start overflow-auto scrollbar-thin scrollbar-thumb-bgGrayLight scrollbar-track-bgGray ">
          <div className="py-4">
            <Card />
          </div>
          <div>
            <Projects />
          </div>
        </div>
      </div>
    )
  };
}
export default HomePage;