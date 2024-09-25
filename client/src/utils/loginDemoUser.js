import { redirect } from "react-router-dom"
import customFetch from "./customFetch"
import { toast } from "react-toastify"

export const loginDemoUser = async() => {
   const data = {
    email: 'test@test.com',
    password: 'secret123',
   }
   try {
    await customFetch.post('/auth/login', data);
    toast.success('Take a test drive');
    return redirect('/dashboard');
   } catch (error) {
    toast.error(error?.response?.data?.msg);
    return 
   }
}

