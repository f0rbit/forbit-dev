function getFormmatedDate(date) {
  var d = new Date(date);
  const month = d.toLocaleDateString("default", { month: "long" });
  return month + " " + d.getFullYear();
}

function recent(commits) {
  const objects = [];
  for (var i = 0; i < 5; i++) {
    var commit = commits[i];
    objects.push(
      <li className="ml-5 mb-5">
        <div className="absolute -left-2 h-4 w-4 rounded-full border-2 border-neutral-800 bg-neutral-300"></div>
        <time className="-ml-1 text-xs font-normal leading-none text-neutral-300">
          {getFormmatedDate(commit.date)}
        </time>
        <div className="-ml-2 rounded-md border-2 border-solid border-neutral-600 bg-neutral-700 px-2 py-2">
          <h1 className="-mt-1 text-lg font-semibold text-white">
            {commit.title}
          </h1>
          {commit.description ? (
            <div className="mb-1 mt-1 rounded-md border-2 border-neutral-500 bg-neutral-600 p-1 text-sm text-neutral-400">
              {commit.description}
            </div>
          ) : (
            <></>
          )}
          <div className="text-xs">
            <span>
              <a
                href={commit.permalink}
                className="text-sky-500 hover:text-sky-600"
              >
                {commit.sha.substring(0, 7)}
              </a>
            </span>
            <span className="text-neutral-100"> - </span>
            <span>
              <a
                href={"https://github.com/f0rbit/" + commit.project}
                className="text-sky-500 hover:text-sky-600"
              >
                f0rbit/{commit.project}
              </a>
            </span>
          </div>
        </div>
      </li>
    );
  }
  return objects;
}
export default function RecentCommits({ commits }) {
  return (
    <div>
      <h1 className="text-center text-lg font-bold text-white">
        Recent Commits
      </h1>
      <ol className="relative border-l border-neutral-300">
        {recent(commits)}
      </ol>
    </div>
  );
}
