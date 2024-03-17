import YoutubeEmbed from "./youtube-embed";

interface BlogCardProps {
  videoURL: string;
  author: string;
  title: string;
  description: string;
  createdAt: string;
  category: string;
}

export const BlogCard = ({ videoURL, category }: BlogCardProps) => {
  return (
    <div className="flex border-2 h-full w-full py-4 px-8 gap-4">
      <div className="blog-section bg-gray-50 w-[70%] h-full border-2 border-gray-200  rounded-2xl ">
        <div className=" h-[27rem] ">
          <YoutubeEmbed videoURL="https://www.youtube.com/embed/xNRJwmlRBNU?si=ge-GkYoWCEQPP2mG" />
        </div>
        <div className="h-full p-8 bg-gray-50">
          <h1 className="text-2xl sm:text-4xl font-bold p-3 ">Heading</h1>
          <p className="text-sm sm:text-sm text-gray-500 p-3">#idkjawe</p>
          <hr />
          <section className="text-lg sm:text-2xl  p-3">Blog content</section>
        </div>
      </div>
      <div className="other-section w-[30%] p-1 space-y-4 h-full ">
        <div className="rounded bg-gray-50 border h-96">
          <p>About jay</p>
        </div>
        <div className="rounded bg-gray-50 border h-96">
          <p>Other Categories</p>
        </div>
        <div className="  rounded bg-gray-50 border h-96">
          <p>Other Blogs</p>
        </div>
      </div>
    </div>
  );
};
