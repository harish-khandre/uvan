import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { db } from "@/lib/db";

const fetchCategory = async (category: string) => {
  try {
    const blogs = await db.blog.findMany({
      where: {
        category: category,
      },
    });
    return blogs;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default async function Category({
  params,
}: {
  params: { slug: string };
}) {
  const category = params.slug as string;
  const blogs = await fetchCategory(category);

  return (
    <>
      <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
        <div className="text-center">
          <h1 className="text-3xl text-gray-800 font-semibold">{category}</h1>
          <p className="mt-3 text-gray-500">
            Blogs that are loved by the community. Updated every hour.
          </p>
        </div>
        <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog: any) => (
            <article
              className="max-w-md m-4 mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm"
              key={blog.id}
            >
              <Link href={`/blog/${blog.id}`}>
                <Image
                  width={447}
                  height={192}
                  src={blog.thumbnail}
                  loading="lazy"
                  alt={blog.title}
                  className="w-full h-48 rounded-t-md"
                />
                <div className="flex blog-center mt-2 pt-3 ml-4 mr-2">
                  <div className="ml-3">
                    <span className="block text-gray-400 text-sm">
                      {format(
                        blog.createdAt.toISOString() as any,
                        "MMMM dd, yyyy",
                      )}
                    </span>
                  </div>
                </div>
                <div className="pt-3 ml-4 mr-2 mb-3">
                  <h3 className="text-xl text-gray-900">{blog.title}:</h3>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
