import { Skeleton } from "./ui/skeleton";

export const CategorySkeletonCard = () => {
  return (
    <div className=" flex justify-start items-start gap-x-4 pl-20 py-1  mt-16 ">
      <Skeleton className=" h-4 w-[50px] pl-2" />
      <Skeleton className="h-4 w-[50px] pl-2" />
    </div>
  );
};
