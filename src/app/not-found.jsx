import Link from "next/link";

function NotFound() {
  return (
    <div>
      <section className="flex h-[calc(100vh-7rem)] justify-center items-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Not Found</h1>
          <Link href="/" className="text-slate-400 text-2xl mt-5">Go back home</Link>
        </div>
      </section>
    </div>
  );
}

export default NotFound;
