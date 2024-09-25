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

export const editJobAction = async ({request, params}) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
 
  try {
    await customFetch.patch(`/jobs/${params.id}`, data);
    toast.success('Job edited successfully');
    return redirect('/dashboard/all-jobs');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

export const deleteJobAction = async({params}) => {
  try {
    await customFetch.delete(`/jobs/${params.id}`);
    toast.success('Job deleted successfully');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
  return redirect('/dashboard/all-jobs');
};

export const profileAction = async ({ request }) => {
  const formData = await request.formData();

  const file = formData.get("avatar");
  if (file && file.size > 500000) {
    toast.error("Image size too large");
    return null;
  }

  try {
    await customFetch.patch("/users/update-user", formData);
    toast.success("Profile updated successfully");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
  return null;
};