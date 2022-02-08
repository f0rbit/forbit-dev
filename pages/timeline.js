import NavBar from "../components/NavBar";
import Timeline from "../components/Timeline";

function getCommit(commits) {
  const reversecommits = [];
  for (var i = commits.length - 1; i >= 0; i--) {
    reversecommits.push(commits[i]);
  }

  return {
    category: "COMMITS",
    commits: reversecommits,
    date: commits[commits.length - 1].date,
    title: commits.length + " Commits to f0rbit/" + commits[0].project,
    project: commits[0].project,
  };
}

export async function getServerSideProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  const line = await fetch("http://" + process.env.POST_DB + "/posts");
  const templine = await line.json();
  const reverseline = [];
  // group commits to the same project together
  var commits = [];
  for (var i = templine.length - 1; i >= 0; i--) {
    if (templine[i].category === "GITHUB") {
      // add to github bucket
      if (commits.length < 1 || templine[i].project === commits[0].project) {
        commits.push(templine[i]);
      } else {
        // push out commits to reverseline
        reverseline.push(getCommit(commits));
        commits = [];
        commits.push(templine[i]);
      }
    } else {
      if (commits.length > 1) {
        // push commits as bucket
        reverseline.push(getCommit(commits));
        commits = [];
      }
      reverseline.push(templine[i]);
    }
  }
  if (commits.length > 1) {
    reverseline.push(getCommit(commits));
  }
  const timeline = [];
  // and then reverse the timeline
  for (var j = reverseline.length - 1; j >= 0; j--) {
    timeline.push(reverseline[j]);
  }
  return {
    props: {
      timeline,
    },
  };
}

function title(word) {
  return (
    <div>
      <div className="py-2 px-1 text-xl font-medium text-white">
        <div className="">{word}</div>
      </div>
    </div>
  );
}

export default function Home({ timeline }) {
  return (
    <div className="relative top-0 h-screen w-screen overflow-x-hidden scroll-smooth bg-neutral-800">
      <div className="absolute top-0 h-min w-screen">
        <NavBar />
      </div>
      <div className="mt-16 flex flex-row flex-nowrap justify-center py-4 px-4">
        <div className="w-[48rem]">
          <div className="flex flex-col flex-nowrap items-center justify-center">
            <div>{title("Timeline")}</div>
            <div>
              <Timeline timeline={timeline} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
