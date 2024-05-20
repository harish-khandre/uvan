import { db } from "@/lib/db";
import Link from "next/link";

async function fetchCategories() {
  try {
    const categories = await db.blog.findMany({
      select: {
        category: true,
      },
      distinct: ["category"],
    });
    return categories.map((category) => category.category);
  } catch (error) {
    console.log(error);
    return [];
  }
}
export default async function Categories() {
  const categories = await fetchCategories();

  return (
    <div className="flex justify-start lg:pl-16 py-5 items-center h-full lg:w-[70%] scrollie">
      <p className="pb-4 text-gray-500">Categories</p>
      <p className="p-2"></p>
      <div className=" flex justify-start items-center gap-x-4 p-2 overflow-x-scroll scrollie text-sm">
        {categories.map((category: any) => (
          <Link
            className="border-l-zinc-200 border-l-2 px-2 text-base text-gray-600 hover:text-gray-950"
            href={`/category/${category}`}
            key={category}
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
}
