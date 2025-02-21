const LoadingSkeleton: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto my-8 px-4">
      <div className="bg-white p-6 rounded-lg shadow-md animate-pulse">
        <div className="h-8 bg-gray-300 rounded w-1/2 mx-auto mb-6"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
            <div className="h-10 bg-gray-300 rounded w-full"></div>
          </div>
          <div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
            <div className="h-10 bg-gray-300 rounded w-full"></div>
          </div>
          <div>
            <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
            <div className="h-10 bg-gray-300 rounded w-full"></div>
          </div>
          <div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
            <div className="h-10 bg-gray-300 rounded w-full"></div>
          </div>
        </div>
        <div className="mt-4 space-y-4">
          <div className="h-10 bg-gray-300 rounded"></div>
          <div className="h-10 bg-gray-300 rounded"></div>
          <div className="h-10 bg-gray-300 rounded"></div>
          <div className="h-10 bg-gray-300 rounded"></div>
          <div className="h-10 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;