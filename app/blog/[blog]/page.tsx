import BlogPage from "@/components/blog-page";
import { db } from "@/lib/db";
import { Metadata } from "next";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const blog = await db.blog.findUnique({
    where: {
      id: params.blog,
    },
  });

  return {
    title: blog?.title,
    openGraph: {
      images: [
        {
          url: blog?.thumbnail as string,
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
