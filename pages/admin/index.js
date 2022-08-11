import AdminLayout from "../../components/admin/AdminLayout";
import APIStatus from "../../components/admin/APIStatus";

export default function AdminPage() {
  return (
    <AdminLayout title="Dashboard">
      <div>
        <h3 className="mb-3 text-xl font-bold">API Status</h3>
        <div className="grid w-full grid-cols-3 gap-6">
          <APIStatus
            route={"http://localhost:8080/projects"}
            title={"Projects API"}
          />
          <APIStatus route={"http://localhost:8080/posts"} title={"Blog API"} />
          <APIStatus
            route={"http://" + process.env.NEXT_PUBLIC_POST_DB + "/posts"}
            title={"Timeline API"}
          />
        </div>
      </div>
      <div className="mt-3">
        <h3 className="mb-4 text-xl font-bold">Traffic</h3>
        <div className="h-96 w-full">
          <div className="h-full rounded-md border-2 border-neutral-800">
            <div className="flex h-full items-center justify-center">
              Imagine a big graph here
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
