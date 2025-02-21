import { ErrorMessageProps } from '../types';

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="max-w-md mx-auto p-6 bg-red-100 rounded-lg shadow-md mt-8 text-center">
      <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
      <p className="text-gray-700">{message}</p>
    </div>
  );
};

export default ErrorMessage;