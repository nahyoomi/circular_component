const MandatoryId: React.FC = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-red-100 rounded-lg shadow-md mt-8 text-center">
      <h1 className="text-2xl font-bold text-red-600 mb-4">ID Require</h1>
      <p className="text-gray-700 mb-4">
        It is mandatory to provide an ID parameter to access this page.
      </p>
      <p className="text-gray-700">
        URL Example: <code className="bg-gray-200 px-1">/loanPage.html?id='number'</code>
      </p>
    </div>
  );
};

export default MandatoryId;