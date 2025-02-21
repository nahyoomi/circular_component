import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getUserData } from "../services/userData";
import { UserData } from "../types";
import ErrorMessage from "../components/ErrorMessage";
import LoanForm from "../components/LoanForm";

const LoanPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const idParam = searchParams.get("id");
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    if (!idParam) {
      console.error("Error: No id parameter found");
      return;
    }
    const id = parseInt(idParam, 10);
    getUserData(id)
      .then((response) => {
        setUser(response);
        console.log(response);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [idParam]);

  if (loading) return <div>Loading...</div>;

  if (error) return <ErrorMessage message={error} />;

  return (
    <LoanForm />
  )
};

export default LoanPage;