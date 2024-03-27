import { Blogs } from "@/components/blogs";
import Categories from "@/components/categories";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Categories />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Blogs />
      </Suspense>
    </>
  );
}
