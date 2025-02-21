import { FailureComponentProps } from "../types";

const FailureComponent: React.FC<FailureComponentProps> = ({ message, onRetry }) => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-8 text-center">
      <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
      <p className="text-gray-700 mb-6">{message}</p>
      <button
        onClick={onRetry}
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors"
      >
       Return to de Form
      </button>
    </div>
  );
};

export default FailureComponent;