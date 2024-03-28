import { Skeleton } from "./ui/skeleton";

export const RtSkeleton = () => {
  return (
    <div className="relative w-full overflow-auto px-4">
      <div className="w-full caption-bottom text-sm">
        <Skeleton className="[&:has([role=checkbox])]:pr-0 h-20 w-[90%] p-4 align-middle" />
      </div>
    </div>
  );
};
