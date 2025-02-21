import api from "./api";
import { LoanRequestData } from "../types";

export const submitLoanRequest = async (data: LoanRequestData): Promise<LoanRequestData> => {
  const response = await api.post(`/users/${data.id}`, data);
  console.log('servicio',response);
  if (response.status === 200 || response.status === 201) {
    return response.data.data;
  } else {
    throw new Error("Error: Loan request could not be sent");
  }
};