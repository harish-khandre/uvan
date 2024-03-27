import { Skeleton } from "./ui/skeleton";

export const LatestSkeleton = () => {
  return (
    <div className="other-section w-full ">
      <div className="h-full space-y-4 flex justify-start m-2 items-start flex-col ">
        <Skeleton className="rounded-2xl h-20 w-[85%] pl-2" />
      </div>
    </div>
  );
};
