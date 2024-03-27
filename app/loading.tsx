export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="w-16 h-16 rounded-full animate-spin
                    border-x-2 border-solid border-gray-500 border-t-transparent"
      ></div>
    </div>
  );
}
