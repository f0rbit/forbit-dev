import { Component } from "react";

export default class Icons extends Component {
  getIcon = (language) => {
    switch (language) {
      case "GML":
      case "GameMaker":
        return (
          <svg
            className="h-6 w-6"
            title="Gamemaker Language"
            src="/public/assets/language_icons/gamemaker.svg"
          />
        );
      case "C++":
        return (
          <svg
            className="h-6 w-6"
            title="C++"
            src="/public/assets/language_icons/cpp.svg"
          />
        );
      case "Python":
        return (
          <svg
            className="h-6 w-6"
            title="Python"
            src="/public/assets/language_icons/python.svg"
          />
        );
      case "HTML":
        return (
          <svg
            className="h-6 w-6"
            title="HTML"
            src="/public/assets/language_icons/html.svg"
          />
        );
      case "React":
        return (
          <svg
            className="h-6 w-6"
            title="React"
            src="/public/assets/language_icons/react.svg"
          />
        );
      case "JavaScript":
        return (
          <svg
            className="h-6 w-6"
            title="JavaScript"
            src="/public/assets/language_icons/javascript.svg"
          />
        );
      case "Java":
        return (
          <svg
            className="h-6 w-6"
            title="Java"
            src="/public/assets/language_icons/java.svg"
          />
        );
      case "GitHub":
        return (
          <svg
            className="h-6 w-6"
            title="GitHub"
            src="/public/assets/language_icons/github.svg"
          />
        );
      case "Git":
        return (
          <svg
            className="h-6 w-6"
            title="Git"
            src="/public/assets/language_icons/git.svg"
          />
        );
      case "IntelliJ":
        return (
          <svg
            className="h-6 w-6"
            title="IntelliJ"
            src="/public/assets/language_icons/intellij.svg"
          />
        );
      case "VSCode":
        return (
          <svg
            className="h-6 w-6"
            title="VSCode"
            src="/public/assets/language_icons/vscode.svg"
          />
        );
      case "Photoshop":
        return (
          <svg
            className="h-6 w-6"
            title="Photoshop"
            src="/public/assets/language_icons/photoshop.svg"
          />
        );
      case "Tailwind":
        return (
          <svg
            className="h-6 w-6"
            title="Tailwind"
            src="/public/assets/language_icons/tailwind.svg"
          />
        );
      case "Arch":
        return (
          <svg
            className="h-6 w-6"
            title="Arch"
            src="/public/assets/language_icons/arch.svg"
          />
        );
      case "VisualBasic":
        return (
          <svg
            className="h-6 w-6"
            title="VisualBasic"
            src="/public/assets/language_icons/visualbasic.svg"
          />
        );
      case ".NET":
        return (
          <svg
            className="h-6 w-6"
            title=".NET"
            src="/public/assets/language_icons/dotnet.svg"
          />
        );
      default:
        return <p>null</p>;
    }
  };

  getColor = (language) => {
    var _col = "text-neutral-500";
    switch (language) {
      case "Java":
        _col = "text-red-300";
        break;
      case "GML":
        _col = "text-green-600";
        break;
      case "C++":
        _col = "text-blue-500";
        break;
      case "Python":
        _col = "text-yellow-200";
        break;
      case "HTML":
        _col = "text-red-500";
        break;
      case "React":
        _col = "text-blue-300";
        break;
      case "JavaScript":
        _col = "text-yellow-300";
        break;
      case "Git":
        _col = "text-yellow-700";
        break;
      case "GitHub":
        _col = "text-gray-600";
        break;
      default:
        break;
    }
    return _col;
  };

  render() {
    return (
      <div
        className={
          "hover: text-white" +
          this.getColor(this.props.language) +
          " fill-current"
        }
      >
        {this.getIcon(this.props.language)}
      </div>
    );
  }
}
