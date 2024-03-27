"use client";
import Loading from "@/app/loading";
import Image from "next/image";
import { useEffect, useState } from "react";

interface BlogData {
  _id: string;
  title: string;
  content: string;
  thumbnail: string;
  category: string;
}
export const Latest = () => {
  // TODO: Import latest blog or video and map them to cards with links to the blog or video page
  const [blog, setBlog] = useState<BlogData[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/blogs/latest", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          next: {
            revalidate: 60,
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBlog(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <div className="other-section w-full ">
        {loading && <Loading />}
        <div className="h-full space-y-4 flex justify-start m-2 items-start flex-col ">
          <div className="border-b">
            <h1 className="text-lg sm:text-2xl font-bold text-gray-500">
              Latest Blog
            </h1>
          </div>
          {blog.map((blog) => (
            <div
              key={blog._id}
              className="bg-gray-50 group border-xl px-4 py-2 rounded-xl flex gap-4 shadow-gray-950 shadow-sm flex-col sm:flex-row "
            >
              <Image
                width={64}
                height={64}
                alt={blog.title}
                src={blog.thumbnail || "https://dummyimage.com/720x600"}
                className="object-cover aspect-square transition-all duration-300 rounded-lg cursor-pointer lg:filter lg:grayscale lg:group-hover:grayscale-0"
              />
              <div className="">
                <h1 className="text-lg line-clamp-1">{blog.title}</h1>
                <p className="text-sm line-clamp-1">{blog.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
