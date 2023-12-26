import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black">
      <div className="flex flex-col gap-2 p-5 max-w-xs w-full bg-slate-800 text-gray-300 rounded-lg">
        <div className="text-center my-4">
          <h1>Strings</h1>
        </div>
        <div>
          <Link
            href="/signin"
            className="bg-slate-900 my-3 p-3 rounded-lg block"
          >
            Sign In
          </Link>
        </div>
        <div>
          <Link
            href="/singup"
            className="bg-slate-900 my-3 p-3 rounded-lg block"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </main>
  );
}
