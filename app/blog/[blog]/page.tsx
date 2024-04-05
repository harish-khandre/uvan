import { BlogPage } from "@/components/blog-page";
import { Metadata } from "next";

export async function generateStaticParams() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/blogs`);
  const blogs = await response.json();
  //@ts-ignore
  return blogs.map((blog) => blog?._id);
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/blogs/blog/${params.blog}`,
    {
      method: "GET",
    },
  );
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
