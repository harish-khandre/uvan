export default function Categories() {
  // TODO : bulk import categories and map them to buttons with links to the category page which shows all the blogs in that category
  return (
    <div className="flex justify-start lg:pl-16 pt-10 items-center h-full w-[70%]">
      <p className="p-2 text-gray-500">
        <a href="">Categories</a>
      </p>
      <p className="p-2">|</p>
      <div className="border-b">
        <button className="p-2">Education</button>
      </div>
    </div>
  );
}
