import React from 'react';
import About from './components/About';
import Card from './components/Card';
import Menu from './components/Menu'

function App() {
  return (
      <div className="font-sans font-bold bg-bgGray">
        <Menu />
        <br />
        <div className="bg-bgGray">
          <Card />
          <About />
          <About />
          <About />
          <About />
          <About />
        </div>
      </div>
  );
}
export default App;