import customFetch from "../utils/customFetch";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

export const registerAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/auth/register", data);
    toast.success('Registration successful');
    return redirect('/login');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

export const loginAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
 
  try {
    await customFetch.post("/auth/login", data);
    toast.success('Login successful');
    return redirect('/dashboard');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

export const addJobAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
 
  try {
    await customFetch.post("/jobs", data);
    toast.success('Job added successfully');
    return redirect('/dashboard');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

