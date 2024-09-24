import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow } from "../components";
import Logo from "../components/Logo";
import { useNavigation, Link, Form } from "react-router-dom";

const Register = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type='text' name='name' defaultValue='john'/>
        <FormRow type='text' name='lastName' labelText='last name' defaultValue='smith'/>
        <FormRow type='text' name='location' defaultValue='london'/>
        <FormRow type='text' name='email' defaultValue='john@gmail.com'/>
        <FormRow type='password' name='password' defaultValue='secret123'/>
        <button className="btn btn-block" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
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
