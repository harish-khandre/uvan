import { IntroBlogCard } from "./intro-blog-card";
import { Latest } from "./latest";

export const Blogs = () => {
  return (
    <div className="flex gap-4 mt-8 justify-start items-start">
      <div className="blogs-section w-[100%] md:w-[70%]    ">
        <IntroBlogCard />
      </div>
      <div className="other-section hidden md:inline-block md:w-[30%] border-l border-zinc-100 ">
        <Latest />
      </div>
    </div>
  );
};