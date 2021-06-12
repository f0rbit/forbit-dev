import React, { Component } from 'react';
import Menu from '../components/Menu'
import emailjs from "emailjs-com"

import DiscordCard from '../components/Contact/DiscordCard'
import TwitterCard from '../components/Contact/TwitterCard'
import EmailCard from '../components/Contact/EmailCard'
import LinkedInCard from '../components/Contact/LinkedCard'

class App extends Component {

  sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
      .then((result) => {
      });
    e.target.reset()
  }

  render() {
    return (
      < div className="font-sans font-bold bg-bgGray w-screen h-screen overflow-hidden overflow-y-visible" >
        <div className="">
          <Menu />
        </div>
        <div className="h-10" />
        <div className="flex justify-center">
          <h1 className="text-white text-center text-6xl">Contact</h1>
        </div>
        <div className="flex justify-center text-white gap-10 p-4 place-content-center place-items-center flex-wrap">
          <DiscordCard id="forbit#6902" />
          <TwitterCard />
          <EmailCard />
          <LinkedInCard />
        </div>
        <div className="h-10" />
        <div className="flex justify-center items-center">
          <div className="text-white text-center space-y-2 flex flex-col justify-center items-center gap-2 w-min max-w-screen p-2">
            <h1 className="text-4xl font-serif font-normal">Contact Form</h1>
            <form onSubmit={this.sendEmail}>
              <div className="p-6  bg-bgGrayDark rounded-xl flex flex-wrap flex-col gap-3">
                <div className="flex flex-row gap-4 items-center">
                  <h1 className="text-2xl">Name</h1>
                  <input type="text" className="text-fgGray bg-bgGrayLight p-2 rounded-md ml-4" placeholder="Name" name="name" />
                </div>
                <div className="flex flex-row gap-4 items-center ">
                  <h1 className="text-2xl">Email</h1>
                  <input type="email" className="text-fgGray bg-bgGrayLight p-2 rounded-md ml-6" placeholder="Email Address" name="email" />
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <h1 className="text-2xl">Subject</h1>
                  <input type="text" className="text-fgGray bg-bgGrayLight p-2 rounded-md " placeholder="Subject" name="subject" />
                </div>
                <div className="">
                  <textarea className="text-fgGray bg-bgGrayLight p-2 rounded-md font-serif w-96 h-48" placeholder="Message" name="message" />
                </div>
                <div>
                  <div className>
                    <input type="submit" value="Send message" className=" bg-bgGrayLighter hover:from-forbitPink hover:to-forbitBlue bg-gradient-to-r p-2 rounded-md cursor-pointer" />
                  </div>
                </div>
              </div>

            </form>
          </div>
        </div>

        <div className="h-10" />
      </div >
    )
  };
}
export default App;