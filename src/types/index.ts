export interface UserData {
    id: number;
    name: string;
    surname: string;
    email: string;
    phone: string;
    age: number;
}

export interface LoanFormProps {
  user: UserData | null;
  onSubmitSuccess: (data: LoanRequestData) => void;
  onSubmitFailure: (errorMsg: string) => void;
}

export interface LoanRequestData {
    id: number; 
    phone: string;
    age: number;
    loan_amount: number;
    loan_date: string; 
    loan_weeks: number;
    check: boolean;
}

export interface LoanResponseSuccess {
    status: number;
    code: "ok";
    data: {
      id: number;
      name: string;
      surname: string;
      email: string;
      phone: string;
      age: number;
      loan_amount: number;
      loan_weeks: number;
    };
}

export interface ErrorMessageProps {
    message: string;
}
export interface LoanResponseError {
    status: number; 
    code: "params-error" | "not-found";
}

export interface FailureComponentProps {
    message: string;
    onRetry: () => void;
}