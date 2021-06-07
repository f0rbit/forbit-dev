import React, {Component} from 'react';
import Menu from '../components/Menu'

import DiscordCard from '../components/Contact/DiscordCard'
import TwitterCard from '../components/Contact/TwitterCard'
import EmailCard from '../components/Contact/EmailCard'
import LinkedInCard from '../components/Contact/LinkedCard'

class App extends Component {

  render() { return(
    <div className="font-sans font-bold bg-bgGray w-full h-screen overflow-hidden">
        <div className="w-screen fixed top-10">
          <div className="fixed overflow-auto h-screen top-0 w-full">
            <div className="h-20"/>
            <div className="flex justify-center">
              <h1 className="text-white text-center text-6xl">Contact</h1>
            </div>
            <div className="h-10"/>
            <div className="flex justify-center text-white gap-10 p-4 place-content-center place-items-center">
              <DiscordCard id="forbit#19884"/>
              <TwitterCard />
              <EmailCard />
              <LinkedInCard />
            </div>
            <div className="h-10"/>
            <div className="text-white text-center space-y-2">
              <h1 className="text-4xl font-serif font-normal">Contact Form</h1>
              <p> TODO</p>
            </div>
          </div>
        </div>
        <div className="relative h-auto w-screen">
            <Menu />
        </div>
    </div>
  )};
}
export default App;