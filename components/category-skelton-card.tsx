import { Skeleton } from "./ui/skeleton";

export const CategorySkeletonCard = () => {
  return (
    <div className="border-b flex justify-center items-center gap-x-4 p-2 ">
      <Skeleton className=" h-4 w-[50px] pl-2" />
      <Skeleton className="h-4 w-[50px] pl-2" />
    </div>
  );
};
