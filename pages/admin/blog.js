import AdminLayout from "../../components/admin/AdminLayout";
import PostEditor from "../../components/admin/PostEditor";
export async function getServerSideProps() {
  // cateogires
  const response = await fetch("http://localhost:8080/categories");
  const result = await response.json();
  var categories = {};
  for (var i = 0; i < Object.keys(result).length; i++) {
    var value = Object.values(result)[i];
    categories[value["categoryID"]] = value;
  }
  // posts
  const res = await fetch("http://localhost:8080/posts");
  const js = await res.json();

  return {
    props: {
      categories,
      posts: js,
    },
  };
}

export default function AdminProjects({ posts, categories }) {
  return (
    <AdminLayout title="Blog Posts">
      <h1 className="mb-2 text-center text-2xl font-bold">Blog Admin Page</h1>
      <div className="flex flex-col items-center justify-center gap-4">
        {posts.posts.map((post, i) => (
          <div key={i} className="flex h-full w-full justify-center ">
            <PostEditor post={post} categories={categories} />
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}
