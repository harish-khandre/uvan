import { LatestSkeleton } from "@/components/latest-skeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex  h-full w-full py-4 px-8 gap-4">
        <div className="w-full lg:w-[70%] h-full">
          <div className="">
            <Skeleton className="lg:h-[27rem]" />
          </div>
          <div className="h-full lg:p-8 ">
            <h1 className="p-3">
              <Skeleton className="h-8 w-56" />
            </h1>
            <p className="p-3">
              <Skeleton className="h-8 w-48" />
            </p>
            <hr />
            <section className="space-y-2">
              <Skeleton className="h-8 w-96" />
              <Skeleton className="h-8 w-72" />
            </section>
          </div>
        </div>
        <div className="other-section w-[30%] p-1 space-y-4 h-full hidden lg:block">
          <div className="h-96">
            <LatestSkeleton />
          </div>
        </div>
      </div>
    </div>
  );
}
