import NavBar from "../components/NavBar";
import Typical from "react-typical";
import RecentCommits from "../components/RecentCommits";
import Description from "../components/about/Description";
import Head from "next/head";

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  const line = await fetch(
    "http://" + process.env.POST_DB + "/posts?category=GITHUB"
  );
  const commits = await line.json();
  return {
    props: {
      commits,
    },
    revalidate: 30,
  };
}

export default function index({ commits }) {
  return (
    <div className=" overflow-x-hidden">
      <Head>
        <title>forbit.dev | Home</title>
      </Head>
      <div className=" flex h-screen w-screen flex-col items-center justify-center  space-y-3 bg-neutral-900">
        <h1 className="font-sans text-8xl font-bold text-white">forbit</h1>
        <div className="font-mono text-neutral-500">
          <span>I </span>
          <Typical
            steps={[
              "am a developer.",
              1000,
              "am a game designer.",
              1000,
              "am an open source contributor.",
              1000,
              "study computer science.",
              1000,
              "am an artist",
              1000,
              "am a gamer.",
              1000,
            ]}
            loop={Infinity}
            wrapper="span"
          />
        </div>
      </div>
      <div className="h-full w-full">
        <NavBar noicon="true" />
      </div>
      <div className="h-[96rem] w-screen bg-neutral-800">
        <div className="flex flex-wrap space-y-4 p-3 lg:flex-nowrap">
          <div className="flex w-full items-center justify-center ">
            <div className="shadow-md">
              <Description />
            </div>
          </div>
          <div className="flex w-full items-center justify-center">
            <div className=" flex items-center justify-center rounded-md border-2 border-neutral-700 py-2 px-4 shadow-md">
              <RecentCommits commits={commits} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
