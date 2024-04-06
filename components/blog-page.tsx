import YoutubeEmbed from "./youtube-embed";
import BlogContent from "./blog-content";
import { OtherBlogs } from "./other-blogs";

interface BlogData {
  _id: string;
  youtubeLink: string;
  title: string;
  content: string;
  thumbnail: string;
  category: string;
}

const fetchBlog = async (id: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/blogs/blog/${id}`,
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const BlogPage = async ({ id }: { id: string }) => {
  const blogs = await fetchBlog(id);
  return (
    <>
      {blogs.map((blog: BlogData) => (
        <div
          key={blog._id}
          className="flex border-2 h-full w-full py-4 px-8 gap-4"
        >
          <div className="blog-section bg-gray-50 w-full lg:w-[70%] h-full border-2 border-gray-200  rounded-2xl ">
            <div className="lg:h-[27rem]  ">
              <YoutubeEmbed videoURL={blog.youtubeLink} />
            </div>
            <div className="h-full lg:p-8 bg-gray-50">
              <h1 className="text-2xl sm:text-4xl font-bold p-3 ">
                {blog.title}
              </h1>
              <p className="text-sm sm:text-sm text-gray-500 p-3">
                {blog.category}
              </p>
              <hr />
              <section className="text-lg sm:text-2xl  p-3">
                <BlogContent content={blog.content} />
              </section>
            </div>
          </div>
          <div className="other-section w-[30%] p-1 space-y-4 h-full hidden lg:block">
            <div className="h-96">
              <OtherBlogs />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
