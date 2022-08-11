import { useEffect } from "react";
import { useState } from "react";

async function getStatus(route) {
  try {
    const res = await fetch(route);
    return res.ok;
  } catch (error) {
    return false;
  }
}

// async function getPosts(page) {
//     const res = await fetch(
//       "http://localhost:8080/posts?page=" + page + "&pageSize=" + ITEMS_PER_PAGE
//     );
//     const js = await res.json();
//     return js;
//   }

export default function APIStatus({ route, title }) {
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //let mounted = true;
    //getPosts(page).then((d) => data = d);
    getStatus(route).then((result) => {
      //if (mounted) {
      setStatus(result);
      setLoading(false);
      //}
    });
    //return () => { mounted = false };
  }, [status, loading]);

  const statusClass =
    "w-full rounded-xl py-1 px-4 text-center font-bold shadow-sm";

  const ok = () => {
    return (
      <div className={statusClass + " bg-emerald-400  text-emerald-50"}>OK</div>
    );
  };

  const bad = () => {
    return <div className={statusClass + " bg-red-400 text-red-50"}>DOWN</div>;
  };

  const load = () => {
    return (
      <div className={statusClass + " bg-neutral-500 text-neutral-50    "}>
        LOADING
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center rounded-md border-2 border-neutral-800 p-4 text-white">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="font-mono text-sm text-neutral-400">{route} </p>
      <div className="mt-4 w-28">
        {loading ? load() : status ? ok() : bad()}
      </div>
    </div>
  );
}
