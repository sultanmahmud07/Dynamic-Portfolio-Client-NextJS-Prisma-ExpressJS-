
const Loading = () => {
  return (
    <div className="main-container pt-36 py-24 animate-pulse space-y-10">
     <div
          className="flex flex-col md:flex-row gap-6 border-b border-gray-200 pb-8"
        >
          {/* Left: image area */}
          <div className="w-full md:w-1/2 h-64 bg-gray-300 rounded-lg"></div>

          {/* Right: text area */}
          <div className="w-full md:w-1/2 flex flex-col justify-between">
            <div>
              <div className="h-6 w-3/4 bg-gray-300 rounded mb-3"></div>
              <div className="h-4 w-full bg-gray-300 rounded mb-2"></div>
              <div className="h-4 w-5/6 bg-gray-300 rounded mb-4"></div>

              <div className="flex flex-wrap gap-2 mb-4">
                {[1, 2, 3, 4].map((t) => (
                  <div
                    key={t}
                    className="h-6 w-20 bg-gray-300 rounded-full"
                  ></div>
                ))}
              </div>

              <div className="h-4 w-32 bg-gray-300 rounded"></div>
            </div>

            <div className="flex gap-4 mt-5">
              <div className="h-10 w-32 bg-gray-300 rounded"></div>
              <div className="h-10 w-40 bg-gray-400 rounded"></div>
            </div>
          </div>
        </div>

      {/* About section skeleton */}
      <div className="mt-10">
        <div className="h-6 w-48 bg-gray-300 rounded mb-4"></div>
        <div className="h-4 w-full bg-gray-300 rounded mb-2"></div>
        <div className="h-4 w-full bg-gray-300 rounded mb-2"></div>
        <div className="h-4 w-full bg-gray-300 rounded mb-2"></div>
        <div className="h-4 w-5/6 bg-gray-300 rounded mb-2"></div>
        <div className="h-4 w-4/6 bg-gray-300 rounded"></div>
      </div>
      <div className="mt-5">
        <div className="h-4 w-full bg-gray-300 rounded mb-2"></div>
        <div className="h-4 w-full bg-gray-300 rounded mb-2"></div>
        <div className="h-4 w-full bg-gray-300 rounded mb-2"></div>
        <div className="h-4 w-5/6 bg-gray-300 rounded mb-2"></div>
        <div className="h-4 w-4/6 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default Loading;
