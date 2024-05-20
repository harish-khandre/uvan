import { db } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";

async function fetchBlog() {
  try {
    const blogs = await db.blog.findMany({
      take: 5,
      orderBy: {
        createdAt: "desc",
      },
    });
    return blogs;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default async function OtherBlogs() {
  const blogs = await fetchBlog();

  return (
    <>
      <div className="other-section w-full cursor-pointer">
        <div className="h-full space-y-4 flex justify-start items-start m-2  flex-col ">
          <div className="border-b">
            <h1 className=" sm:text-lg font-bold text-gray-500">Other Blogs</h1>
          </div>
          {blogs.map((blog: any) => (
            <Link href={blog.id} key={blog.id}>
              <div className=" px-2 py-2  flex gap-4 shadow-gray-950  flex-col sm:flex-row justify-center items-center">
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
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
