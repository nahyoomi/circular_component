import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getUserData } from "../services/userData";
import { LoanRequestData, UserData } from "../types";
import ErrorMessage from "../components/ErrorMessage";
import LoanForm from "../components/LoanForm";
import SuccessComponent from "../components/SuccessComponent";
import FailureComponent from "../components/FailureComponent";
import MandatoryId from "../components/MandatoryId";
import LoadingSkeleton from "../components/LoadingSkeleton";

const LoanPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const idParam = searchParams.get("id");
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<LoanRequestData | null>(
    null
  );
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  useEffect(() => {
    if (!idParam) return console.error("Error: No id parameter found");
    const id = parseInt(idParam, 10);
    getUserData(id)
      .then((response) => setUser(response))
      .catch((e) => setError(e.response?.data?.message || e.message))
      .finally(() => setLoading(false));
  }, [idParam]);

  const handleSuccess = (data: LoanRequestData) => {
    console.log("Loan request sent successfully:", data);
    setSubmittedData(data);
  };

  const handleFailure = (errorMsg: string) => {
    setSubmissionError(errorMsg);
  };

  if (!idParam?.trim()) return <MandatoryId />;
  if (loading) return <LoadingSkeleton />;
  if (error) return <ErrorMessage message={error} />;
  if (submittedData) return <SuccessComponent data={submittedData} />;
  if (submissionError)
    return <FailureComponent message={submissionError} onRetry={() => setSubmissionError(null)} />;

  return (
    <LoanForm
      user={user}
      onSubmitSuccess={handleSuccess}
      onSubmitFailure={handleFailure}
    />
  );
};

export default LoanPage;
