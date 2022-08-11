import Link from "next/Link";

export default function AdminDashboard({ title }) {
  const buttonStyle =
    "rounded-md py-1 px-3 bg-sky-600 hover:bg-sky-500 font-semibold";

  return (
    <div className="h-full">
      <div className="flex h-full w-full flex-row flex-nowrap bg-neutral-800">
        <h3 className="flex h-full w-min items-center justify-center whitespace-nowrap p-4 text-2xl font-bold">
          {title}
        </h3>
        <div className="ml-auto flex flex-row-reverse items-center justify-center gap-4 p-4">
          <button className={buttonStyle}>
            <Link href="/login">Login</Link>
          </button>
          <button className={buttonStyle}>Notification</button>
        </div>
      </div>
    </div>
  );
}
