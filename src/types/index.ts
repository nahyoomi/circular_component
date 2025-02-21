export interface UserData {
    id: number;
    name: string;
    surname: string;
    email: string;
    phone: string;
    age: number;
}

export interface LoanRequestData {
    id: number; 
    name: string;
    surname: string;
    email: string;
    phone: string;
    age: number;
    loan_amount: number;
    loan_date: string; 
    loan_weeks: number;
    terms: boolean;
  }