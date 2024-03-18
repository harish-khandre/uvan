export const Latest = () => {
  // TODO: Import latest blog or video and map them to cards with links to the blog or video page
  return (
    <div className="other-section w-full ">
      <div className="h-96 space-y-4 flex justify-start m-2 items-start flex-col ">
        <div className="border-b">
          <h1 className="text-lg sm:text-2xl font-bold text-gray-500">
            Latest Info
          </h1>
        </div>
        <div className="bg-gray-200 border-xl px-4 py-2 rounded-xl flex gap-4 shadow-gray-950 shadow-sm flex-col sm:flex-row ">
          <img
            src="https://dummyimage.com/720x600"
            className="w-16 h-16"
            alt=""
          />
          <div className="">
            <h1 className="text-lg">Blog</h1>
            <p className="text-sm">Loren ipsum afawef</p>
          </div>
        </div>
      </div>
    </div>
  );
};
