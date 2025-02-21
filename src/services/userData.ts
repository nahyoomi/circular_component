import api from "./api";
import { UserData } from "../types";

export const getUserData = async (id: number): Promise<UserData> => {
  const response = await api.get("/users", {
    params: { id }
  });
  
  if (response.data.status === 200 && response.data.code === "ok") {
    return response.data.data;
  } else {
    throw new Error("Error: User not found or invalid parameters");
  }
};

