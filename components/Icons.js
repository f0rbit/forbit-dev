import { Component } from "react";

import {
  CppIcon,
  DotnetIcon,
  GamemakerIcon,
  HtmlIcon,
  JavaIcon,
  JavascriptIcon,
  PythonIcon,
  ReactIcon,
} from "../icons/language_icons";

export default class Icons extends Component {
  getIcon = (tech) => {
    switch (tech["name"].toLowerCase()) {
      case "gml":
      case "gameMaker":
        return GamemakerIcon();
      case "c++":
      case "cpp":
        return CppIcon();
      case "python":
        return PythonIcon();
      case "html":
        return HtmlIcon();
      case "react":
      case "reactjs":
        return ReactIcon();
      case "javascript":
        return JavascriptIcon();
      case "java":
        return JavaIcon();
      case "github":
        return (
          <svg
            className="h-6 w-6"
            title="GitHub"
            src="/public/assets/language_icons/github.svg"
          />
        );
      case "git":
        return (
          <svg
            className="h-6 w-6"
            title="Git"
            src="/public/assets/language_icons/git.svg"
          />
        );
      case "intellij":
        return (
          <svg
            className="h-6 w-6"
            title="IntelliJ"
            src="/public/assets/language_icons/intellij.svg"
          />
        );
      case "vscode":
        return (
          <svg
            className="h-6 w-6"
            title="VSCode"
            src="/public/assets/language_icons/vscode.svg"
          />
        );
      case "photoshop":
        return (
          <svg
            className="h-6 w-6"
            title="Photoshop"
            src="/public/assets/language_icons/photoshop.svg"
          />
        );
      case "tailwind":
        return (
          <svg
            className="h-6 w-6"
            title="Tailwind"
            src="/public/assets/language_icons/tailwind.svg"
          />
        );
      case "arch":
        return (
          <svg
            className="h-6 w-6"
            title="Arch"
            src="/public/assets/language_icons/arch.svg"
          />
        );
      case "visualbasic":
        return (
          <svg
            className="h-6 w-6"
            title="VisualBasic"
            src="/public/assets/language_icons/visualbasic.svg"
          />
        );
      case ".net":
        return DotnetIcon();
      default:
        return <p>{tech["name"]}</p>;
    }
  };

  render() {
    return (
      <div className={"text-white" + " h-5 w-5 fill-current"}>
        {this.getIcon(this.props.technology)}
      </div>
    );
  }
}
