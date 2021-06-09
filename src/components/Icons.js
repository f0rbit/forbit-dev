import React, { Component } from 'react'
import { ReactComponent as Java } from '../assets/language_icons/java.svg'
import { ReactComponent as GML } from '../assets/language_icons/gamemaker.svg'
import { ReactComponent as CPP } from '../assets/language_icons/cpp.svg'
import { ReactComponent as JavaScript } from '../assets/language_icons/javascript.svg'
import { ReactComponent as ReactIcon } from '../assets/language_icons/react.svg'
import { ReactComponent as HTMLIcon } from '../assets/language_icons/html.svg'
import { ReactComponent as Python } from '../assets/language_icons/python.svg'
import { ReactComponent as GitHub } from '../assets/brand_icons/github.svg'
import { ReactComponent as Git } from '../assets/brand_icons/git.svg'
import { ReactComponent as IntelliJ } from '../assets/brand_icons/intellij.svg'
import { ReactComponent as VSCode } from '../assets/brand_icons/vscode.svg'
import { ReactComponent as Photoshop } from '../assets/brand_icons/photoshop.svg'
import { ReactComponent as Arch } from '../assets/brand_icons/arch.svg'
import { ReactComponent as Tailwind } from '../assets/brand_icons/tailwind.svg'

export default class Icons extends Component {

  getIcon = (language) => {
    switch (language) {
      case 'GML': case "GameMaker": return <GML className="w-6 h-6" title="GameMaker Language" />;
      case 'C++': return <CPP className="w-6 h-6" title="C++ (by Freepik)" />;
      case 'Python': return <Python className="w-6 h-6" title="Python" />;
      case 'HTML': return <HTMLIcon className="w-6 h-6" title="HTML5" />;
      case 'React': return <ReactIcon className="w-6 h-6" title="React.js" />;
      case 'JavaScript': return <JavaScript className="w-6 h-6" title="JavaScript" />;
      case 'Java': return <Java className="w-6 h-6" title="Java" />;
      case 'GitHub': return <GitHub className="w-6 h-6" title="GitHub" />;
      case 'Git': return <Git className="w-6 h-6" title="Git" />;
      case 'IntelliJ': return <IntelliJ className="w-6 h-6" title="IntelliJ" />;
      case 'VSCode': return <VSCode className="w-6 h-6" title="VS Code" />;
      case 'Photoshop': return <Photoshop className="w-6 h-6" title="Photoshop" />;
      case 'Tailwind': return <Tailwind className="w-6 h-6" title="Tailwind CSS" />;
      case 'Arch': return <Arch className="w-6 h-6" title="Arch Linux" />;
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
      case 'Git':
        _col = "text-yellow-700"
        break;
      case 'GitHub':
        _col = "text-gray-600"
        break;
      default:
        break;
    }
    return _col;
  }

  render() {
    return (
      <div className={"text-white hover:" + (this.getColor(this.props.language)) + " fill-current"}>
        {this.getIcon(this.props.language)}

      </div>

    );
  }
}