import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, SubmitBtn } from "../components";
import Logo from "../components/Logo";
import { Link, Form } from "react-router-dom";

const Register = () => {
  
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type='text' name='name'/>
        <FormRow type='text' name='lastName' labelText='last name'/>
        <FormRow type='text' name='location'/>
        <FormRow type='text' name='email'/>
        <FormRow type='password' name='password'/>
        <SubmitBtn />
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Register;
