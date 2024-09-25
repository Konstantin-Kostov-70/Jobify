import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { Logo, FormRow, SubmitBtn } from '../components';
import { Link, Form } from 'react-router-dom';

const Login = () => {

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
       <button type='submit' className="btn btn-block">Explore The App</button>
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
