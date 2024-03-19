"use client";
import { BlogCard } from "@/components/blog-card";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Blog() {
  const params = useParams();
  const id = params.blog as string

  if (!id || id === undefined || id === null) {
    return (
      <div className="flex flex-col justify-center items-center h-screen space-y-4">
        <h1 className="font-bold text-xl">Blog not found</h1>
        <Link href="/">
          <button className="border-2 border-black  shadow-md shadow-black rounded-full px-4 py-2 hover:shadow-sm hover:bg-zinc-800 hover:text-white transition duration-300 ease-out ">
            Home
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-full">
      <BlogCard id={id} />
    </div>
  );
}
