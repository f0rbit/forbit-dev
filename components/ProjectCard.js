import Icon from "../components/Icons";
import Status from "./Status";
import Image from "next/image";

import dark_dungeon from "../public/assets/project_icons/dark_dungeon.png";
import bit_quest from "../public/assets/project_icons/bit_quest.png";

function getIcon(project) {
  switch (project.icon) {
    case "dark_dungeon.png":
      return (
        <Image width={64} height={64} src={dark_dungeon} alt="Project Icon" />
      );
    case "bit_quest.png":
      return (
        <Image width={2048} height={1024} src={bit_quest} alt="Project Icon" />
      );
    default:
      return null;
  }
}

function getLink(project) {
  var _link = "";
  var _text = "";
  if (project.link) {
    _link = project.link.url;
    _text = project.link.text;
  } else if (project.repo) {
    _link = project.repo;
    _text = "GitHub repo";
  }

  return _link ? (
    <a className="text-blue-400" href={_link}>
      {_text}
    </a>
  ) : null;
}

function getLinkObject(project) {
  var _link = getLink(project);
  if (_link) {
    return (
      <div className="w-max rounded-md bg-neutral-700 p-3 shadow-md">
        {getLink(project)}
      </div>
    );
  } else {
    return null;
  }
}

function renderLanguages(languages) {
  const constList = [];
  for (var i = 0; i < languages.length; i++) {
    constList.push(<Icon language={languages[i]} />);
  }
  return constList;
}

export default function ProjectCard({ project }) {
  return (
    <div className="w-96 rounded-md border-2 border-neutral-700 bg-neutral-800 py-5 px-5 shadow-md">
      <div className="h-full text-white">
        <div className="h-min min-w-min rounded-2xl bg-neutral-700 px-5 py-2 shadow-xl">
          <span className="align-center flex items-center justify-center gap-2">
            {getIcon(project) ? (
              <div className="w-20 ">{getIcon(project)}</div>
            ) : (
              <></>
            )}
            <h1 className="text-center text-3xl font-semibold ">
              {project.name}
            </h1>
          </span>
        </div>
        <br />
        <p className="p-2 text-center font-sans text-xl font-light text-neutral-200">
          {project.description}
        </p>
        <br />
        <br />
        <span className="flex flex-row flex-wrap items-center justify-center gap-4">
          <div className="w-min rounded-md bg-neutral-700 p-3 shadow-md">
            <Status status={project.status} />
          </div>
          {getLinkObject(project)}
          <div className="flex flex-row gap-3 rounded-md bg-neutral-700 p-3 shadow-md">
            {renderLanguages(project.languages)}
          </div>
        </span>
      </div>
    </div>
  );
}
