import { CategorySkeletonCard } from "@/components/category-skelton-card";
import HomeSkeletonCard from "@/components/home-skeleton-card";
import { RtSkeleton } from "@/components/rt-skeleton";

export default function Loading() {
  return (
    <>
      <CategorySkeletonCard />
      <div className="flex w-full">
        <div className="w-[70%]">
          <HomeSkeletonCard />
        </div>
        <div className="w-[30%]">
          <RtSkeleton />
        </div>
      </div>
    </>
  );
}
