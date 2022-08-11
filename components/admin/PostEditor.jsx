export default function PostEditor({ post, categories }) {
  var image = <></>;
  if (post.coverPicture && post.coverPicture != null) {
    image = (
      <img
        className="h-full w-full rounded-xl object-cover"
        src={post.coverPicture}
      />
    );
  }

  const inputClass =
    "w-full rounded-sm bg-neutral-800 focus:bg-neutral-700 px-3 py-1 font-mono h-8";
  const labelClass = "font-mono";
  console.log(categories);
  var date = new Date(post.postDate);
  var dateValue = new Date(date.getTime() - date.getTimezoneOffset() * 60000)
    .toISOString()
    .substring(0, 19);
  return (
    <div className="h-full w-full rounded-md border-2 border-neutral-700 px-2 pb-2 lg:w-min">
      <div className="flex h-full flex-row flex-wrap items-stretch justify-center gap-2 lg:flex-col">
        <div className="flex h-full w-full flex-col flex-nowrap items-stretch justify-center gap-2 space-y-2 lg:flex-row">
          <div className=" pt-2 lg:w-96">{image}</div>
          <div className="rounded-md border-2 border-neutral-800 py-1 px-2">
            <table className="h-min w-full">
              <colgroup>
                <col span="1" style={{ width: "100px" }} />
                <col span="1" style={{ width: "calc(100% - 100px)" }} />
              </colgroup>
              <tbody>
                <tr>
                  <td className={labelClass}>Title</td>
                  <td>
                    <input
                      className={inputClass + " text-lg"}
                      type="text"
                      defaultValue={post.title}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td className={labelClass}>Image URL</td>
                  <td>
                    <input
                      className={inputClass + " text-xs"}
                      type="text"
                      defaultValue={post.coverPicture}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td className={labelClass}>Status</td>
                  <td>
                    <select className={inputClass} defaultValue={post.status}>
                      <option>DRAFT</option>
                      <option>PUBLISHED</option>
                      <option>HIDDEN</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td className={labelClass}>Slug</td>
                  <td>
                    <input
                      className={inputClass + "text-xs"}
                      type="text"
                      defaultValue={post.slug}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td className={labelClass}>Date</td>
                  <td>
                    <input
                      className={inputClass}
                      type="datetime-local"
                      defaultValue={dateValue}
                    ></input>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-md border-2 border-neutral-800 px-2 py-1 pb-3">
            <h3 className="mb-2 text-center font-semibold drop-shadow-md">
              Categories
            </h3>
            <div className="hidden-scrollbar flex max-h-40 basis-1/4 flex-col items-start gap-2 overflow-auto">
              {Object.values(categories).map((category, i) => {
                return (
                  <div
                    key={i}
                    style={{ backgroundColor: category.colour }}
                    className="h-max w-full rounded-md py-1 px-1 pl-2"
                  >
                    <input
                      type="checkbox"
                      defaultChecked={post.categories.includes(
                        category.categoryID
                      )}
                    ></input>
                    <span className="ml-2 font-semibold drop-shadow-md">
                      {category.categoryName}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-stretch justify-center gap-2 lg:h-48 lg:max-h-48 lg:flex-row">
          <div className="relative h-48 max-w-2xl lg:w-2/3">
            <textarea
              className="hidden-scrollbar peer h-full w-full resize-none rounded-md bg-neutral-800 px-2 py-1 font-mono text-white focus:bg-neutral-700"
              defaultValue={post.content}
            ></textarea>
            <div className="absolute bottom-0 right-0 rounded-tl-md rounded-br-md bg-neutral-700 px-4 py-1 font-mono text-neutral-300 shadow-md  peer-focus:hidden">
              Content
            </div>
          </div>

          <div className="relative max-w-xl lg:w-1/3">
            <textarea
              className="hidden-scrollbar peer h-full w-full resize-none rounded-md bg-neutral-800 px-2 py-1 font-mono text-white focus:bg-neutral-700"
              defaultValue={post.metadata}
            ></textarea>
            <div className="absolute bottom-0 right-0 rounded-tl-md rounded-br-md bg-neutral-700 px-4 py-1 font-mono text-neutral-300 shadow-md  peer-focus:hidden">
              Metadata
            </div>
          </div>
        </div>
        <div className="mt-1 flex flex-row justify-center gap-4">
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
    </div>
  );
}
