import Link from "next/link";

const fetchCategories = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/blogs/categories`,
      {
        next: {
          revalidate: 60,
        },
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
export default async function Categories() {
  const categories = await fetchCategories();
  return (
    <div className="flex justify-start lg:pl-16 pt-10 items-center h-full w-[70%]">
      <p className="p-2 text-gray-500">Categories</p>
      <p className="p-2"></p>
      <div className="border-b flex justify-center items-center gap-x-4 p-2 text-sm">
        {categories.map((category: string) => (
          <Link
            className="border-l-zinc-200 border-l-2 pl-2"
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
