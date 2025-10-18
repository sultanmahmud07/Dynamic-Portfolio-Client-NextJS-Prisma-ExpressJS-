



const Loading = () => {
  return (
    <div className="main-container pt-36 py-16">
      {/* Breadcrumb placeholder */}
      <div className="h-4 w-32 bg-gray-300 rounded mb-10 animate-pulse"></div>

      {/* Grid */}
      <div className="">
        <div className="flex flex-col md:flex-row gap-5 md:gap-6 py-4">
          <div className=" w-full md:w-2/3">
            <div className="w-full bg-white rounded-xl shadow-sm overflow-hidden animate-pulse">
              {/* Image */}
              <div className="h-56 bg-gray-300 w-full"></div>

              {/* Content */}
              <div className="p-4 space-y-3">
                <div className="h-4 w-24 bg-gray-300 rounded"></div>
                <div className="h-5 w-3/4 bg-gray-300 rounded"></div>
                <div className="h-4 w-full bg-gray-300 rounded"></div>
                <div className="h-4 w-5/6 bg-gray-300 rounded"></div>

                {/* Buttons */}
                <div className="flex gap-3 pt-3">
                  <div className="h-10 w-28 bg-gray-300 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <div className="p-4 space-y-3">
              <div className="h-4 w-24 bg-gray-300 rounded"></div>
              <div className="h-5 w-3/4 bg-gray-300 rounded"></div>
              <div className="h-4 w-full bg-gray-300 rounded"></div>
              <div className="h-4 w-5/6 bg-gray-300 rounded"></div>

              <div className="pt-3">
                <div className="h-4 w-full bg-gray-300 rounded"></div>
                <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
              </div>
              <div className="pt-3">
                <div className="h-4 w-full bg-gray-300 rounded"></div>
                <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
              </div>
              <div className="pt-3">
                <div className="h-4 w-full bg-gray-300 rounded"></div>
                <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
