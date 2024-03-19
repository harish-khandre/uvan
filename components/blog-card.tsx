"use client";

import { useEffect, useState } from "react";
import YoutubeEmbed from "./youtube-embed";

interface BlogData {
  _id: string;
  youtubeLink: string;
  title: string;
  content: string;
  thumbnail: string;
  category: string;
}

export const BlogCard = ({ id }: { id: string }) => {
  const [blogs, setBlogs] = useState<BlogData[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`/api/blogs/blog/${id}`, {
          method: "GET",
        });
        const blog = await response.json();
        if (response.status === 404) {
          setError(blog.error);
        } else {
          setBlogs(blog);
        }
      } catch (err) {
        setError("An error occurred while fetching the blog." as any);
        console.log(err);
      }
    };
    fetchBlogs();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <div
            key={blog._id}
            className="flex border-2 h-full w-full py-4 px-8 gap-4"
          >
            <div className="blog-section bg-gray-50 w-[70%] h-full border-2 border-gray-200  rounded-2xl ">
              <div className=" h-[27rem] ">
                <YoutubeEmbed videoURL={blog.youtubeLink} />
              </div>
              <div className="h-full p-8 bg-gray-50">
                <h1 className="text-2xl sm:text-4xl font-bold p-3 ">
                  {blog.title}
                </h1>
                <p className="text-sm sm:text-sm text-gray-500 p-3">
                  {blog.category}
                </p>
                <hr />
                <section className="text-lg sm:text-2xl  p-3">
                  {blog.content}
                </section>
              </div>
            </div>
            <div className="other-section w-[30%] p-1 space-y-4 h-full ">
              <div className="rounded bg-gray-50 border h-96">
                <p>About jay</p>
              </div>
              <div className="rounded bg-gray-50 border h-96">
                <p>Other Categories</p>
              </div>
              <div className="  rounded bg-gray-50 border h-96">
                <p>Other Blogs</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>No blogs found.</div>
      )}
    </>
  );
};
