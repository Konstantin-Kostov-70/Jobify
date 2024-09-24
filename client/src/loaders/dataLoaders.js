import { redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";

export const dashboardLoader = async () => {
  try {
    const { data } = await customFetch.get('/users/current-user');
    return data
  } catch (error) {
    console.log(error?.response?.data?.msg);
    return redirect('/')
  }
};
