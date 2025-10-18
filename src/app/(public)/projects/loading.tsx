

const ProjectCardSkeleton = () => {
  return (
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
          <div className="h-10 w-28 bg-gray-400 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

const Loading = () => {
  return (
    <div className="main-container pt-36 py-16">
      {/* Breadcrumb placeholder */}
      <div className="h-4 w-32 bg-gray-300 rounded mb-10 animate-pulse"></div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <ProjectCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
};

export default Loading;
