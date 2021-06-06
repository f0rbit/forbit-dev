import React, {Component} from 'react'
import { ReactComponent as Java} from '../assets/language_icons/java.svg'
import { ReactComponent as GML } from '../assets/language_icons/gamemaker.svg'
import { ReactComponent as CPP }from '../assets/language_icons/cpp.svg'
import { ReactComponent as JavaScript } from '../assets/language_icons/javascript.svg'
import { ReactComponent as ReactIcon } from '../assets/language_icons/react.svg'
import { ReactComponent as HTMLIcon }  from '../assets/language_icons/html.svg'
import { ReactComponent as Python } from '../assets/language_icons/python.svg'
export default class Projects extends Component {
    
  getIcon = (language) => {
      switch(language) {
        case 'GML': return <GML className="w-6 h-6" title="GameMaker Language"/>;
        case 'C++': return <CPP className="w-6 h-6" title="C++ (by Freepik)"/>;
        case 'Python': return <Python className="w-6 h-6" title="Python"/>;
        case 'HTML': return <HTMLIcon className="w-6 h-6" title="HTML5"/>;
        case 'React': return <ReactIcon className="w-6 h-6" title="React.js"/>;
        case 'JavaScript': return <JavaScript className="w-6 h-6" title="JavaScript"/>;
        case 'Java': return <Java className="w-6 h-6" title="Java"/>;
        default: return <p>null</p>
      }
  }

  getColor = (language) => {
    var _col = "text-fgGray";
    switch (language) {
      case 'Java': 
        _col = "text-red-300";
        break;
      case 'GML': ;
        _col = "text-green-600"
        break;
      case 'C++': ;
        _col = "text-blue-500"
        break;
      case 'Python':
        _col = "text-yellow-200";
        break;
      case 'HTML': ;
        _col = "text-red-500"
        break;
      case 'React': ;
        _col = "text-blue-300";
        break;
      case 'JavaScript':
        _col = "text-yellow-300";
        break;
      default:
        break;
    }
    return _col;
  }

    render() {
        return(
          <div className={"text-white hover:"+ (this.getColor(this.props.language))+" fill-current"}>
              {this.getIcon(this.props.language)}
          </div>
          
        );
    }
}