import React from "react";
import { Skeleton } from "./ui/skeleton";

export default function HomeSkeletonCard() {
  return (
    <>
      {" "}
      <div className=" ">
        <div className="container  mx-auto  flex flex-col items-center border-b-2 border-zinc-100 group md:flex-row md:h-56 md:items-center">
          <div className="w-full md:w-1/4 lg:w-1/5 mb-4 md:mb-0 flex justify-center">
            <Skeleton className="rounded-lg w-[150px] h-[150px] " />
          </div>
          <div className="w-full md:w-3/4 lg:w-4/5 md:pl-8 lg:pl-12 flex flex-col md:items-start md:text-left items-center text-center mb-4">
            <Skeleton className="mb-1 h-4 w-[250px]" />
            <Skeleton className="mb-4 h-4 w-[200px]" />
            <div className="flex gap-x-4">
              <Skeleton className="rounded-full px-4 py-2 h-4 w-[50px] " />
              <Skeleton className="mb-4 h-4 w-[50px]" />
            </div>
          </div>
        </div>
      </div>
      <div className=" ">
        <div className="container  mx-auto  flex flex-col items-center border-b-2 border-zinc-100 group md:flex-row md:h-56 md:items-center">
          <div className="w-full md:w-1/4 lg:w-1/5 mb-4 md:mb-0 flex justify-center">
            <Skeleton className="rounded-lg w-[150px] h-[150px] " />
          </div>
          <div className="w-full md:w-3/4 lg:w-4/5 md:pl-8 lg:pl-12 flex flex-col md:items-start md:text-left items-center text-center mb-4">
            <Skeleton className="mb-1 h-4 w-[250px]" />
            <Skeleton className="mb-4 h-4 w-[200px]" />
            <div className="flex gap-x-4">
              <Skeleton className="rounded-full px-4 py-2 h-4 w-[50px] " />
              <Skeleton className="mb-4 h-4 w-[50px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
