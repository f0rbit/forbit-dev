import React, {Component} from 'react';
import Card from '../components/Card'
import Menu from '../components/Menu'
import Background from '../assets/2fuS10.gif'
import Projects from '../components/Projects'

class HomePage extends Component {


  render() { return(
      <div className="font-sans font-bold bg-bgGray overflow-x-hidden overflow-y-hidden overscroll-none h-screen">
        <div className="relative w-screen h-auto">
          <Menu />
        </div>
        <div className="bg-bgGray fixed">
          <img className="object-fill object-center h-screen w-screen" src={Background} alt="Background"/>
        </div>
        <div className="fixed h-screen w-screen top-10 bg-gradient-to-r from-bgGray via-bgGray to-none opacity-95 backdrop-filter backdrop-blur-xl" />
          <div className="fixed flex flex-wrap top-20 left-10 w-1/2 h-85s min-w-min px-4 justify-center content-start overflow-auto scrollbar-thin scrollbar-thumb-bgGrayLight scrollbar-track-bgGray ">
            <div className="py-4">
              <Card />
            </div>
            <div>
              <Projects />
            </div>
        </div>
      </div>
  )};
}
export default HomePage;