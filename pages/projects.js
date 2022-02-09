import ProjectCard from "../components/ProjectCard";
import NavBar from "../components/NavBar";
export async function getServerSideProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  const line = await fetch("http://" + process.env.PROJECTS_DB + "/projects");
  const prjs = await line.json();
  return {
    props: {
      projects: prjs,
    },
  };
}

function renderProjects(projects) {
  const objects = [];
  for (var i = 0; i < projects.length; i++) {
    objects.push(<ProjectCard project={projects[i]} />);
  }
  return objects;
}
export default function projects({ projects }) {
  return (
    <div className="h-full min-h-screen  bg-neutral-800">
      <div className="absolute top-0 w-full">
        <NavBar />
      </div>
      <h1 className="mt-16 py-4 text-center text-4xl font-bold text-white">
        Projects
      </h1>
      <div className="flex flex-wrap items-stretch justify-center gap-4 p-4">
        {renderProjects(projects)}
      </div>
    </div>
  );
}
