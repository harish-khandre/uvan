"use client";

import { HomeIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Error() {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="border border-l-4 border-b-4 border-black shadow-sm shadow-black rounded-2xl flex flex-col justify-start items-start px-4 py-8 space-y-4 ">
        <h1 className="text-2xl font-bold">Error Occurred </h1>
        <p>Something went wrong</p>
        <Link href="/">
          <button className="border text-white border-black bg-zinc-700 hover:bg-zinc-800 transition duration-300 ease-in-out rounded-full px-4 py-2 text-sm">
            <HomeIcon className="h-4 w-4" />
          </button>
        </Link>
      </div>
    </div>
  );
}
