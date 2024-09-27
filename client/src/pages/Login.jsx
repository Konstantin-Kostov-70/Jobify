import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { Logo, FormRow, SubmitBtn } from '../components';
import { Link, Form, useNavigate } from 'react-router-dom';
import customFetch from "../utils/customFetch"
import { toast } from "react-toastify"

const Login = () => {
  const navigate = useNavigate();

  const loginDemoUser = async(event) => {
    event.preventDefault();
    const data = {
      email: import.meta.env.VITE_DEMO_USER_EMAIL,   
      password: import.meta.env.VITE_DEMO_USER_PASSWORD,
    }
    try {
     await customFetch.post('/auth/login', data);
     toast.success('Take a test drive');
     navigate('/dashboard');
    } catch (error) {
     toast.error(error?.response?.data?.msg);
    }
 }

  return (
    <Wrapper>
      <Form method='post' className='form'>
       <Logo />
       <h4>
        Login
       </h4>
       <FormRow type="email" name="email" defaultValue="john@gmail.com" />
       <FormRow type="password" name="password" defaultValue="secret123" />
       <SubmitBtn />
       <button type='submit' className="btn btn-block" onClick={loginDemoUser}>Explore The App</button>
       <p>
          Not a member yet?
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
}

export default Login
