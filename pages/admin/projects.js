import AdminLayout from "../../components/admin/AdminLayout";
import ProjectEditor from "../../components/admin/ProjectEditor";

export async function getServerSideProps() {
  try {
    const response = await fetch("http://localhost:8080/projects");
    const result = await response.json();

    const res = await fetch("http://localhost:8080/technologies");
    const technologies = await res.json();

    return {
      props: {
        projects: result,
        technologies,
      },
    };
  } catch (error) {
    return {
      props: {
        projects: null,
        technologies: null,
      },
    };
  }
}

export default function AdminProjects({ projects, technologies }) {
  if (!projects || !technologies)
    return (
      <AdminLayout title="Projects">
        <h1 className="text-center text-3xl font-bold">Projects Admin Page</h1>
        <div className="mt-6 flex items-center justify-center">
          <div className="w-max rounded-md bg-red-400 py-1 px-4 text-center font-mono font-bold text-red-100 ">
            Internal Server Error
            <div className="font-mono text-xs text-red-200">
              {"Couldn't reach API"}
            </div>
          </div>
        </div>
      </AdminLayout>
    );
  return (
    <AdminLayout title="Projects">
      <h1 className="text-center text-3xl font-bold">Projects Admin Page</h1>
      <div className="flex flex-col items-center justify-center gap-4">
        {projects.map((project, i) => (
          <div key={i} className="w-full max-w-6xl">
            <ProjectEditor project={project} technologies={technologies} />
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}
