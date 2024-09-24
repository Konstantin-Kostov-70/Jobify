import customFetch from "../utils/customFetch";
import { redirect } from "react-router-dom";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/auth/register", data);
    return redirect('/login');
  } catch (error) {
    console.log(error);
    return error;
  }
};
