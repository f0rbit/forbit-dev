import CategoryCard from "./CategoryCard.jsx";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function PostCard({ categories, data }) {
  var image = <></>;
  if (data.coverPicture && data.coverPicture != null) {
    //image = <Image src={data.coverPicture} width='100%' height='100%' layout="fill" objectFit="contain"/>;
    image = (
      <img className="h-96 rounded-xl object-cover" src={data.coverPicture} />
    );
  }

  const format = (d) => {
    var date = new Date(d);
    return [date.toDateString(), date.toLocaleString()];
  };

  return (
    <div className="rounded-3xl border-2 border-neutral-700 bg-neutral-800 p-4 shadow-md">
      {data.coverPicture ? (
        <div className="relative mb-2 rounded-lg">{image}</div>
      ) : (
        <></>
      )}
      <div
        className={
          "flex flex-row gap-2 font-bold text-white " +
          (data.coverPicture ? "relative -top-12 ml-2 -mb-8 shadow-sm" : "")
        }
      >
        <div
          className={
            (data.postStatus == "DRAFT"
              ? "bg-red-400 text-white"
              : "bg-neutral-100 text-black") +
            " rounded-md py-1 px-4 text-center"
          }
        >
          {data.postStatus}
        </div>
        {data.categories.map((cat, i) => (
          <div key={i}>{<CategoryCard category={categories[cat]} />}</div>
        ))}
      </div>
      <div className="text-3xl font-bold text-neutral-100 drop-shadow-xl">
        {data.title}
      </div>

      <div className="">
        <div className="text-neutral-500" title={format(data.postDate)[1]}>
          {format(data.postDate)[0]}
        </div>
      </div>
      <div className="mt-2 h-48 overflow-clip text-neutral-300">
        <ReactMarkdown>{data.content}</ReactMarkdown>
      </div>
      <div className="relative -top-1 -mb-10 flex justify-center">
        <button className="w-max  rounded-xl bg-blue-500 p-2 font-bold text-white shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
          Read More...
        </button>
      </div>
    </div>
  );
}
