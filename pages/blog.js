import Pagination from "rc-pagination";
import { useEffect, useState } from "react";
import PostCard from "../components/blog/PostCard";
import Head from "next/Head";
import NavBar from "../components/NavBar";

const ITEMS_PER_PAGE = 9;

async function getPosts(page) {
  try {
    const res = await fetch(
      "http://localhost:8080/posts?page=" + page + "&pageSize=" + ITEMS_PER_PAGE
    );
    const js = await res.json();
    return js;
  } catch (error) {
    return null;
  }
}

// export async function getServerSideProps() {
//   const data = await getPosts(0);
//   const catRes = await fetch("http://localhost:8080/categories");
//   const cats = await catRes.json();
//   var categories = {};
//   for (var i = 0; i < Object.keys(cats).length; i++) {
//     var value = Object.values(cats)[i];
//     categories[value["categoryID"]] = value;
//   }
//   return {
//     props: {
//       data,
//       categories,
//     },
//   };
// }

export async function getStaticProps() {
  try {
    const response = await fetch("http://localhost:8080/categories");
    const result = await response.json();
    var categories = {};
    for (var i = 0; i < Object.keys(result).length; i++) {
      var value = Object.values(result)[i];
      categories[value["categoryID"]] = value;
    }
    return {
      props: {
        categories,
      },
    };
  } catch (error) {
    return {
      props: {
        categories: null,
      },
    };
  }
}

export default function Home({ categories }) {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState();
  useEffect(() => {
    //let mounted = true;
    //getPosts(page).then((d) => data = d);
    getPosts(page - 1).then((result) => {
      //if (mounted) {
      setPosts(result);
      //}
    });
    //return () => { mounted = false };
  }, [page]);

  return (
    <div className="relative top-0 h-screen w-screen overflow-x-hidden scroll-smooth bg-neutral-800">
      <Head>
        <title>forbit.dev | Blog</title>
      </Head>
      <div className="absolute top-0 z-10 h-min w-full">
        <NavBar />
      </div>
      <h1 className="mt-16 pt-4 text-center text-4xl font-bold text-white">
        Posts Page
      </h1>
      <br />
      {categories == null ? (
        <div className="mt-6 flex items-center justify-center">
          <div className="w-max rounded-md bg-red-400 py-1 px-4 text-center font-mono font-bold text-red-100 ">
            Internal Server Error
            <div className="font-mono text-xs text-red-200">
              {"Couldn't reach API"}
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="flex justify-center">
            {posts ? (
              <>
                <div className="grid w-full grid-cols-1 items-stretch justify-items-stretch gap-4 gap-y-12 p-4 md:w-[70%] lg:grid-cols-2 2xl:w-[80%] 2xl:grid-cols-3">
                  {posts ? (
                    posts.posts.map((post, i) => (
                      <PostCard key={i} data={post} categories={categories} />
                    ))
                  ) : (
                    <></>
                  )}
                </div>
              </>
            ) : (
              <div className="mt-96 text-xl font-bold text-red-300">
                Loading...
              </div>
            )}
          </div>
          {posts ? (
            <div className="mt-10">
              <Pagination
                pageSize={ITEMS_PER_PAGE}
                total={posts.total}
                current={page}
                onChange={(current) => {
                  setPage(current);
                }}
              />
            </div>
          ) : (
            <></>
          )}
        </>
      )}
      <div className="mt-4"></div>
    </div>
  );
}
