"use client";

export default function Error() {
  return (
    <div className="flex justify-center items-center h-screen -mt-16">
      <div className="border border-l-4 border-b-4 border-red-500 shadow-sm shadow-black rounded-2xl flex flex-col justify-start items-start px-8 py-8 space-y-2 ">
        <h1 className=" text-red-600 text-2xl font-bold">Error Occurred </h1>
        <p className="text-red-800">Something went wrong</p>
        <p className="font-bold">Please try again after some time</p>
      </div>
    </div>
  );
}
