import AdminDashboard from "./AdminDashboard";
import Head from "next/Head";
import logo from "../../public/icon.png";
import Link from "next/Link";
import Image from "next/Image";
export default function AdminLayout({ children, title }) {
  const sideBarButton =
    "text-center py-2 rounded-xl mx-4 font-semibold text-lg bg-sky-600 hover:bg-sky-500";
  return (
    <div className=" overflow-x-hidden">
      <Head>
        <title>Admin Page</title>
      </Head>
      <div className="flex h-full min-h-screen flex-row bg-neutral-800">
        <div className=" w-96 bg-neutral-800">
          <div className="flex flex-col gap-4 text-white">
            <div className="mt-4 flex items-center justify-center">
              <Link href="/">
                <a>
                  <Image
                    className="mx-auto"
                    width={64}
                    height={64}
                    src={logo.src}
                    alt="icon"
                  />
                </a>
              </Link>
            </div>
            <Link href="/admin">
              <button className={sideBarButton}>Dashboard</button>
            </Link>
            <Link href="/admin/projects">
              <button className={sideBarButton}>Projects</button>
            </Link>
            <Link href="/admin/blog">
              <button className={sideBarButton}>Blog</button>
            </Link>
          </div>
        </div>
        <div className="h-full w-full text-white">
          <div className="h-14">
            <AdminDashboard title={title} />
          </div>
          <div
            className="overflow-auto rounded-md bg-neutral-900 p-4"
            style={{
              minHeight: "calc(100vh - 64px)",
              width: "calc(100% - 8px)",
              maxHeight: "calc(100vh - 64px)",
            }}
          >
            <main>{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
}
