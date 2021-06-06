import React, {Component} from 'react';
import Menu from '../components/Menu'
class App extends Component {

  render() { return(
    <div className="font-sans font-bold bg-bgGray overflow-x-hidden overflow-y-hidden overscroll-none h-screen">
        <div className="relative w-screen h-auto">
            <Menu />
        </div>
        <div>
            <h1>About me</h1>
        </div>
    </div>
  )};
}
export default App;