"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { LatestSkeleton } from "./latest-skeleton";

interface BlogData {
  _id: string;
  title: string;
  thumbnail: string;
  category: string;
}
export const OtherBlogs = () => {
  const [blog, setBlog] = useState<BlogData[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/other-blogs", {
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
      <div className="other-section w-full cursor-pointer">
        <div className="h-full space-y-4 flex justify-start items-start m-2  flex-col ">
          <div className="border-b">
            <h1 className=" sm:text-lg font-bold text-gray-500">Other Blogs</h1>
          </div>
          {loading && <LatestSkeleton />}
          {blog.map((blog) => (
            <div
              key={blog._id}
              className=" px-2 py-2  flex gap-4 shadow-gray-950  flex-col sm:flex-row justify-center items-center"
            >
              <Image
                width={46}
                height={46}
                alt={blog.title}
                src={blog.thumbnail || "https://dummyimage.com/720x600"}
                className="object-cover aspect-square transition-all duration-300 rounded-full cursor-pointer "
              />
              <div className="w-56 text-center">
                <h1 className="text-md font-bold">{blog.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
