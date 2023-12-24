import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-slate-900">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h3 className="font-bold text-3xl py-3">NextCRU</h3>
        </Link>
        <ul className="flex gap-x-2 text-lg font-bold">
          <li>
            <Link href="/new" className="text-slate-300 hover:text-slate-200">
              New Task
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-slate-300 hover:text-slate-200">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
