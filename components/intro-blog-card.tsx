"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { format } from "date-fns";
import HomeSkeletonCard from "./home-skeleton-card";

interface BlogData {
  _id: string;
  title: string;
  content: string;
  thumbnail: string;
  category: string;
  createdAt: any;
}

export const IntroBlogCard = () => {
  const [blogs, setBlogs] = useState<BlogData[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/blogs", {
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
        setBlogs(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="body-font cursor-pointer space-y-8 ml-8 h-full">
      {loading && <HomeSkeletonCard />}
      {blogs.map((blog) => (
        <Link href={`/blog/${blog._id}`} key={blog._id}>
          <div className="container  mx-auto  flex flex-col items-center border-b-2 border-zinc-100 group md:flex-row md:h-56 md:items-center">
            <div className="w-full md:w-1/4 lg:w-1/5 mb-4 md:mb-0 flex justify-center">
              <Image
                className="object-cover aspect-square  rounded-lg "
                width={150}
                height={150}
                alt={blog.title}
                src={blog.thumbnail || "https://dummyimage.com/720x600"}
              />
            </div>
            <div className="w-full md:w-3/4 lg:w-4/5 md:pl-8 lg:pl-12 flex flex-col md:items-start md:text-left items-center text-center mb-4">
              <h1 className="title-font mb-1 text-lg font-bold text-gray-900">
                {blog.title}
              </h1>
              <p className="mb-4 text-gray-900 line-clamp-2 font-medium leading-relaxed">
                {blog.content}
              </p>
              <div className="flex justify-center items-center gap-x-4">
                <p className="text-xs bg-zinc-200 rounded-full px-4 py-2">
                  {blog.category}
                </p>
                <p className="text-xs font-medium">
                  {format(blog.createdAt, "MMMM dd, yyyy")}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};
