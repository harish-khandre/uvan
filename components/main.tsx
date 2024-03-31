import { IntroBlogCard } from "./intro-blog-card";
import { RT } from "./recruitment-table";

export const Main = () => {
  return (
    <div className="flex gap-4 mt-8 justify-start items-start">
      <div className="blogs-section w-[100%] md:w-[70%]    ">
        <IntroBlogCard />
      </div>
      <div className="other-section hidden md:block md:w-[30%] border-l border-zinc-100 ">
        <RT />
      </div>
    </div>
  );
};
