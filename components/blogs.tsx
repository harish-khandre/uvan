import { IntroBlogCard } from "./intro-blog-card";
import { Latest } from "./latest";

export const Blogs = () => {
  // TODO : bulk import blogs and map them to cards with links to the blog page
  return (
    <div className="flex gap-4 mt-8 justify-start items-start">
      <div className="blogs-section w-[70%]   bg-gray-50 ">
        <IntroBlogCard />
      </div>
      <div className="other-section w-[30%] border-l ">
        <Latest />
      </div>
    </div>
  );
};
