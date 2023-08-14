const Loading = () => {
  const eightGridItems = Array.from({ length: 8 }, (_, index) => {
    return (
      <div
        key={index}
        className="rounded-xl overflow-hidden bg-gray-800 drop-shadow-md"
      >
        <div className="w-full h-[200px] bg-gray-700"></div>
        <div className="w-full px-3 py-4 animate-pulse">
          <div className="w-[80px] h-[15px] bg-gray-700 rounded-full mb-3"></div>
          <div className="w-[80%] h-[15px] bg-gray-700 rounded-full"></div>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="w-[300px] h-12 rounded-xl bg-gray-700 lg:mt-8"></div>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6">
        {eightGridItems}
      </div>
    </>
  );
};

export default Loading;
