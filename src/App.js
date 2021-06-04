import React from 'react';
import Card from './components/Card'
import Menu from './components/Menu'
import Background from './assets/2fuS10.gif'

function App() {
  return (
      <div className="font-sans font-bold bg-bgGray overflow-x-hidden overflow-y-hidden overscroll-none h-screen">
      
        <div className="relative w-screen">
          <Menu />
        </div>
        <div className="bg-bgGray relative">
          <img className="object-fill object-center h-screen w-screen" src={Background} alt="Background"/>
        </div>
        <div className="fixed h-screen w-screen top-10 bg-gradient-to-r from-bgGray via-bgGray to-none opacity-95 backdrop-filter backdrop-blur-xl">
          
        </div>
        <div>
          <Card />
        </div>
      </div>
  );
}
export default App;