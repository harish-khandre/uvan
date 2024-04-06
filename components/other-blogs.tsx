import Image from "next/image";
import Link from "next/link";

interface BlogData {
  _id: string;
  title: string;
  thumbnail: string;
  category: string;
}

const fetchBlog = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/other-blogs`,
      {
        cache: "no-store",
      },
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const OtherBlogs = async () => {
  const blog = await fetchBlog();

  return (
    <>
      <div className="other-section w-full cursor-pointer">
        <div className="h-full space-y-4 flex justify-start items-start m-2  flex-col ">
          <div className="border-b">
            <h1 className=" sm:text-lg font-bold text-gray-500">Other Blogs</h1>
          </div>
          {blog.map((blog: BlogData) => (
            <Link href={blog._id} key={blog._id}>
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
};
