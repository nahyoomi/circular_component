
interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="p-4 bg-red-100 text-red-700 rounded">
      <h2 className="font-bold mb-2">Error</h2>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;