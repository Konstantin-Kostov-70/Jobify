import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow } from "../components";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type='text' name='name' defaultValue='john'/>
        <FormRow type='text' name='lastName' labelText='last name' defaultValue='smith'/>
        <FormRow type='text' name='location' defaultValue='london'/>
        <FormRow type='text' name='email' defaultValue='john@gmail.com'/>
        <FormRow type='password' name='password' defaultValue='secret123'/>
        <button className="btn btn-block" type="submit">
          Submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
