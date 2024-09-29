import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page lan">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            The online job tracking tool makes it easy to follow the process of
            searching and finding a job. Keeping statistics for each of the
            application stages is key to the success of the professional
            realization. Track the job on any device and visualize the progress.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
