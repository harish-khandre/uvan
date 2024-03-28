"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CategorySkeletonCard } from "./category-skelton-card";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("/api/blogs/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(Array.from(data));
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="flex justify-start lg:pl-16 pt-10 items-center h-full w-[70%]">
      <p className="p-2 text-gray-500">
        <a href="">Categories</a>
      </p>
      <p className="p-2"></p>
      {loading && <CategorySkeletonCard />}
      <div className="border-b flex justify-center items-center gap-x-4 p-2 text-sm">
        {categories.map((category) => (
          <Link
            className="border-l-zinc-200 border-l-2 pl-2"
            href={category}
            key={category}
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
}
