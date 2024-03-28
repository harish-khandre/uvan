import { Skeleton } from "./ui/skeleton";

export const LatestSkeleton = () => {
  return (
    <div className="other-section w-full ">
      <div className="h-full space-y-4 flex justify-center m-2 items-center flex-col ">
        <Skeleton className="rounded-2xl h-12 w-[85%] pl-2" />
        <Skeleton className="rounded-2xl h-12 w-[85%] pl-2" />
        <Skeleton className="rounded-2xl h-12 w-[85%] pl-2" />
      </div>
    </div>
  );
};
