import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import BlogContent from "./blog-content";
import { db } from "@/lib/db";
import NotFound from "@/app/not-found";

interface BlogData {
  id: string;
  title: string;
  content: string;
  thumbnail: string;
  category: string;
  createdAt: any;
}

async function fetchAllBlogs() {
  try {
    const blogs = await db.blog.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return blogs;
  } catch (error) {
    console.log(error);
  }
}

export const revalidate = 3600;

export default async function IntroBlogCard() {
  const blogs = await fetchAllBlogs();

  if (!blogs) {
    return <NotFound />;
  }

  return (
    <article className="body-font cursor-pointer space-y-8 ml-8 h-full">
      {blogs.map((blog: BlogData) => (
        <Link href={`/blog/${blog.id}`} key={blog.id}>
          <div className="container mx-auto flex flex-col items-center border-b-2 border-zinc-100 group md:flex-row md:h-56 md:items-center">
            <div className="w-full md:w-1/4 lg:w-1/5 mb-4  md:mb-0 flex justify-center">
              <Image
                className="object-cover aspect-square  rounded-lg "
                width={150}
                height={150}
                alt={blog.title}
                src={blog.thumbnail}
              />
            </div>
            <div className="w-full md:w-3/4 lg:w-4/5 md:pl-8 lg:pl-12 flex flex-col md:items-start md:text-left items-center text-center mb-4">
              <h1 className="title-font mb-1 text-lg lg:pl-14 font-bold text-gray-900">
                {blog.title}
              </h1>
              <p className="mb-4 h-12 text-gray-900 line-clamp-2 font-medium leading-relaxed">
                <BlogContent content={JSON.parse(blog.content)} />
              </p>
              <div className="flex justify-center lg:pl-14 mt-4 items-center gap-x-4">
                <p className="text-xs bg-zinc-200  rounded-full  px-4 py-2">
                  {blog.category}
                </p>
                <p className="text-xs font-medium lg:pl-12 ">
                  {format(blog.createdAt, "MMMM dd, yyyy")}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </article>
  );
}
