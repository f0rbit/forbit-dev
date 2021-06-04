import React, { Component } from 'react'
import Typical from 'react-typical'
class Card extends Component {
  render() {
    return (
      <div>
      <div className="absolute left-72 top-20 w-1/3 font-normal max-w-md">
          <div className="flex flex-col flex-wrap justify-center py-6 px-6 bg-bgGrayLight rounded text-center text-white bg-opacity-50">
            <h1 className="font-bold text-xl border-b-2">Hi There!</h1>
            <div>
              <span>My name is </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-forbitPink to-forbitBlue font-bold">Tom Materne, </span>
              <span>and I am </span>
              <Typical loop={Infinity} wrapper='b' steps={[
                  'a developer.', 1000,
                  'a game designer.', 1000,
                  'an open source contributer.', 1000,
                  'a computer science student.', 1000,
                  'passionate about tech.', 1000,
                  'a gamer.', 1000,

              ]} className="font-normal"></Typical>
            </div>
          </div>
        </div>
      </div>
    );
    
  }
}

export default Card;
// function Card() {

//   return (
//     <div className="w-full">
//       <div className="flex flex-col justify-center max-w-xs bg-bgGrayLight mx-auto shadow-xl rounded-xl p-5">
//         <div className="text-center mt-5">
//           <p className="text-xl sm:text-2xl font-semibold text-white">
//             Forbit
//           </p>
//           <ul className="text-xs sm:text-base text-gray-400 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
//             <li>Developer</li>
//             <li>Student</li>
//             <li>Aspiring GameDev</li>
//           </ul>
//           <div className="flex align-center justify-center mt-4">
//             <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-600 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300" href="https://github.com/BraydenTW">
//               <FaGithub />
//               <span class="sr-only">Github</span>
//             </a>
//             <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-pink-600 hover:bg-pink-600 rounded-full hover:text-white transition-colors duration-300" href="https://github.com/BraydenTW">
//               <FaDribbble />
//               <span class="sr-only">Dribble</span>
//             </a>
//             <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300" href="https://github.com/BraydenTW">
//               <FaTwitter />
//               <span class="sr-only">Twitter</span>  
//             </a>
//             <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-500 hover:bg-teal-500 rounded-full hover:text-white transition-colors duration-300" href="https://github.com/BraydenTW">
//               <FaRegEnvelope />
//               <span class="sr-only">Email</span>  
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
