import { getDate } from "./Timeline";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";

function getIcon(open) {
  if (!open) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="bi bi-chevron-down"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
        />
      </svg>
    );
  } else {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="bi bi-chevron-up"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
        />
      </svg>
    );
  }
}

function getCollapsable(commits, open) {}

function commit(commit) {
  var sha = commit.sha.substring(0, 7);
  console.log(commit);
  return (
    <div className="rounded-md bg-neutral-600 py-1 px-3 shadow-sm">
      <div className="w-[24rem] text-sm">
        <a href={commit.permalink} className="text-sky-500 hover:text-sky-600">
          {sha}
        </a>
        <span className="text-neutral-300"> - {commit.title}</span>
      </div>
      <div className="w-[24rem] text-xs text-neutral-400">
        {commit.description}
      </div>
    </div>
  );
}
export default function CommitTimelineItem({ commits }) {
  const forced = commits.commits.length < 4;
  const [open, setOpen] = useState(false);
  const projectLink = "https://github.com/f0rbit/" + commits.project;

  return (
    <div className="h-full w-full rounded-md  p-2 text-center">
      <div className="shadow-m flex flex-col items-center justify-center rounded-md bg-neutral-700 p-2">
        <div className="flex items-center">
          <div className="">
            <span className=" font-bold text-white">
              {commits.commits.length} commits to
            </span>
            <span> {"\r "}</span>
            <span>
              <a
                href={projectLink}
                className="font-bold text-sky-500 hover:text-sky-600"
              >
                f0rbit/{commits.project}
              </a>
            </span>
          </div>
        </div>
        {forced ? (
          <>
            <div className="">
              <div className="space-y-2 px-2 pt-2 pb-3 sm:px-3">
                {commits.commits.map((l) => commit(l))}
              </div>
            </div>
          </>
        ) : (
          <>
            <Transition
              show={open}
              enter="transition ease-out duration-100 transform"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-75 transform"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {() => (
                <div className="">
                  <div className="space-y-2 px-2 pt-2 pb-3 sm:px-3">
                    {commits.commits.map((l) => commit(l))}
                  </div>
                </div>
              )}
            </Transition>

            <button
              onClick={() => setOpen(!open)}
              className="flex w-5 text-neutral-500 hover:text-neutral-200"
            >
              {getIcon(open)}
            </button>
          </>
        )}
      </div>
      <div className="mt-1 flex flex-nowrap justify-center  space-x-2 text-xs">
        <span className="text-center text-fuchsia-300">GITHUB</span>
        <span className="text-center text-neutral-500">
          {getDate(commits.date)}
        </span>
      </div>
    </div>
  );
}
