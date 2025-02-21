import { LoanRequestData } from "../types";

interface SuccessComponentProps {
  data: LoanRequestData;
}

const SuccessComponent: React.FC<SuccessComponentProps> = ({ data }) => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Thank you</h1>
      <p className="text-center text-gray-600 mb-6">
        Your loan request has been sent successfully. We will contact you soon.
      </p>
      <div className="bg-gray-100 rounded p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Summary request</h2>
        <ul className="text-gray-700">
          <li className="mb-1">
            <span className="font-medium">ID: </span>{data.id}
          </li>
          <li className="mb-1">
            <span className="font-medium">Loan Amount: </span>{data.loan_amount}
          </li>
          <li className="mb-1">
            <span className="font-medium">Loan Weeks: </span>{data.loan_weeks}
          </li>
          <li className="mb-1">
            <span className="font-medium">Phone: </span>{data.phone}
          </li>
          <li>
            <span className="font-medium">Age: </span>{data.age}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SuccessComponent;