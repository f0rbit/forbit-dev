import NavBar from "../components/NavBar";
import Typical from "react-typical";

export default function index() {
  return (
    <div className=" overflow-x-hidden">
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
      <div className="h-[96rem] w-full bg-neutral-800"></div>
    </div>
  );
}
