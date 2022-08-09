import ProjectCard from "../components/ProjectCard";
import NavBar from "../components/NavBar";
import Head from "next/Head";
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const techs = await fetch("http://localhost:8080/technologies");
  const techJSON = await techs.json();
  var technologies = {};
  for (var i = 0; i < Object.keys(techJSON).length; i++) {
    var value = Object.values(techJSON)[i];
    technologies[value["techID"]] = value;
  }
  const line = await fetch("http://localhost:8080/projects");
  const prjs = await line.json();
  return {
    props: {
      projects: prjs,
      technologies,
    },
    revalidate: 100,
  };
}

function renderProjects(projects, technolgies) {
  const objects = [];
  for (var i = 0; i < projects.length; i++) {
    objects.push(
      <ProjectCard
        project={projects[i]}
        key={projects[i].name}
        technologies={technolgies}
      />
    );
  }
  return objects;
}
export default function projects({ projects, technologies }) {
  return (
    <div className="h-full min-h-screen  bg-neutral-800">
      <Head>
        <title>forbit.dev | Projects</title>
      </Head>
      <div className="h-16" />
      <h1 className="py-4 text-center text-4xl font-bold text-white">
        Projects
      </h1>
      <div className="mx-auto grid w-max grid-cols-1 gap-4 p-4 md:grid-cols-2 2xl:grid-cols-3">
        {renderProjects(projects, technologies)}
      </div>
      <div className="absolute top-0 z-10 w-full">
        <NavBar />
      </div>
    </div>
  );
}
