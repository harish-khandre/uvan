import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <>
      <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
        <div className="text-center ">
          <Skeleton className="h-8 w-52" />
          <p className="mt-3"></p>
        </div>
        <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          <article className="max-w-md mx-auto mt-4">
            <Skeleton className="w-full h-48" />
            <div className="flex blog-center mt-2 pt-3 ml-4 mr-2">
              <div className="ml-3">
                <span className="block">
                  <Skeleton className="h-8 w-52" />
                </span>
              </div>
            </div>
            <div className="pt-3 ml-4 mr-2 mb-3">
              <Skeleton className="h-8 w-96" />
              <p className=" mt-1 h-20 overflow-hidden ">
                <Skeleton className="h-8 w-96" />
                <Skeleton className="h-8 w-72" />
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
