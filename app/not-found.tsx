import { HomeIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center h-screen -mt-16">
      <div className="border border-l-4 border-b-4 border-black shadow-sm shadow-black rounded-2xl flex flex-col justify-start items-start px-8 py-8 space-y-4 ">
        <h1 className="text-2xl font-bold">Not Found</h1>
        <p>Could not find requested resource</p>
        <Link href="/">
          <button className="border text-white border-black bg-transparent hover:bg-zinc-800 transition duration-300 ease-in-out rounded-full px-4 py-2 text-sm">
            <HomeIcon className="h-4 w-4 text-zinc-500 font-bold" />
          </button>
        </Link>
      </div>
    </div>
  );
}
