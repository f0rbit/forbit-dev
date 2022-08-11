export default function ProjectEditor({ project, technologies }) {
  console.log(project);
  const labelClass = "font-mono";
  return (
    <div className="w-full rounded-lg border-2 border-neutral-700 p-2 shadow-sm">
      <div className="flex flex-col gap-2 lg:flex-row">
        <table className="w-full">
          <colgroup>
            <col span="1" style={{ width: "120px" }} />
            <col span="1" style={{ width: "calc(100% - 120px)" }} />
          </colgroup>
          <tbody>
            <tr>
              <td className={labelClass}>Title</td>
              <td>
                <input
                  type="text"
                  defaultValue={project.name}
                  className="input-field mb-1"
                />
              </td>
            </tr>
            <tr>
              <td className={labelClass}>Description</td>
              <td>
                <textarea
                  className="input-text"
                  defaultValue={project.description}
                ></textarea>
              </td>
            </tr>
            <tr>
              <td className={labelClass}>Link</td>
              <td>
                <div className="flex-row -mt-1 flex gap-4">
                  <label className="font-mono">Text</label>
                  <input
                    type="text"
                    className="input-text basis-1/3"
                    defaultValue={project.linkText}
                  ></input>
                  <label className="font-mono">URL</label>
                  <input
                    type="text"
                    className="input-text"
                    defaultValue={project.linkURL}
                  ></input>
                </div>
              </td>
            </tr>
            <tr>
              <td className={labelClass}>Repo URL</td>
              <td>
                <input
                  type="text"
                  className="input-text mt-1"
                  defaultValue={project.repoURL}
                ></input>
              </td>
            </tr>
            <tr>
              <td className={labelClass}>Status</td>
              <td>
                <div className="flex-row flex items-center justify-center gap-4">
                  <select
                    className="input-text mt-1"
                    defaultValue={project.status}
                  >
                    <option>LIVE</option>
                    <option>FINISHED</option>
                    <option>RELEASED</option>
                    <option>DEVELOPMENT</option>
                    <option>PAUSED</option>
                    <option>STOPPED</option>
                    <option>ABANDONED</option>
                  </select>
                  <label>Hidden</label>
                  <input
                    type="checkbox"
                    className="h-4 w-4 border-gray-400"
                    defaultChecked={project.hidden}
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="hidden-scrollbar h-48 max-h-48 basis-1/4 space-y-2 overflow-auto">
          {technologies.map((tech, i) => (
            <div
              key={i}
              className=" rounded-md border-fuchsia-400 bg-neutral-800 py-1 px-3"
            >
              <input
                type="checkbox"
                defaultChecked={project.technologies.includes(tech.techID)}
              ></input>
              <span className="ml-2">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-row mt-1 flex justify-center gap-4">
        <button className="rounded-md bg-neutral-400 px-3 py-1 font-bold text-neutral-100 ">
          Cancel
        </button>
        <button className="rounded-md bg-emerald-400 px-3 py-1 font-bold text-green-50">
          Save
        </button>
        <button className="rounded-md bg-red-400 px-3 py-1 font-bold text-red-100">
          Delete
        </button>
      </div>
    </div>
  );
}
