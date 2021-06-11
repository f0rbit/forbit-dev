import React, { Component } from 'react';
import Card from '../components/Card'
import Menu from '../components/Menu'
import Projects from '../components/Projects'

class HomePage extends Component {


  render() {
    return (
      <div className="font-sans font-bold bg-bgGray h-screen overflow-x-hidden">
        <div>
          <Menu />
        </div>
        <div className="h-10" />
        {/*<div className="fixed h-screen w-screen top-10 bg-gradient-to-r from-bgGray via-bgGray to-none opacity-95 backdrop-filter backdrop-blur-xl" />*/}
        <div className="flex flex-col px-10 justify-center items-center">
          <div className="py-4">
            <Card />
          </div>
          <div>
            <Projects />
          </div>
        </div>

        <div className="h-10" />
      </div>
    )
  };
}
export default HomePage;