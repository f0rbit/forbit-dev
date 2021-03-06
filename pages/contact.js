import NavBar from "../components/NavBar";
import ContactForm from "../components/ContactForm";
import Head from "next/head";
export default function Contact() {
  return (
    <div className="h-full min-h-screen w-screen overflow-x-hidden bg-neutral-800">
      <Head>
        <title>forbit.dev | Contact</title>
      </Head>
      <div className="absolute top-0 w-screen">
        <NavBar />
      </div>
      <div className="h-16" />
      <div className="flex w-full items-center justify-center p-4">
        <div className="flex flex-col gap-4">
          <div className="rounded-md border-2 border-neutral-700 p-2">
            <h1 className="text-center text-xl font-bold text-white">Links</h1>
            <div className="flex flex-row flex-wrap items-center justify-center gap-4 p-1 ">
              <div className="rounded-md border-2 border-neutral-600 bg-neutral-700 p-1 text-center text-white">
                <h2 className="w-[10rem] font-semibold">Twitter</h2>
                <a
                  href="https://twitter.com/f0rbit"
                  className="text-sky-500 hover:text-sky-600"
                >
                  @f0rbit
                </a>
              </div>
              <div className="rounded-md border-2 border-neutral-600 bg-neutral-700 p-1 text-center text-white">
                <h2 className="w-[10rem] font-semibold">Email</h2>
                <a
                  href="mailto:contact@forbit.dev"
                  className="text-sky-500 hover:text-sky-600"
                >
                  contact@forbit.dev
                </a>
              </div>
              <div className="rounded-md border-2 border-neutral-600 bg-neutral-700 p-1 text-center text-white">
                <h2 className="w-[10rem] font-semibold">LinkedIn</h2>
                <a
                  href="https://www.linkedin.com/in/tom-materne-001"
                  className="text-sky-500 hover:text-sky-600"
                >
                  Tom Materne
                </a>
              </div>
            </div>
          </div>
          <div className="rounded-md border-2 border-neutral-700 p-2">
            <h1 className="mb-2 p-1 text-center text-xl font-bold text-white">
              Message
            </h1>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
