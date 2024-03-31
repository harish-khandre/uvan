import { BlogPage } from "@/components/blog-page";
import { Metadata } from "next";

export async function generateMetaData({ params }: any): Promise<Metadata> {
  const response = await fetch(`/api/blogs/blog/${params.blog}`, {
    method: "GET",
  });
  const blog = await response.json();

  return {
    title: blog.title,
    openGraph: {
      images: [
        {
          url: blog.thumbnail,
        },
      ],
    },
  };
}

export default function Blog({ params }: any) {
  const id = params.blog;

  return (
    <div className="flex justify-center items-center h-full">
      <BlogPage id={id} />
    </div>
  );
}
