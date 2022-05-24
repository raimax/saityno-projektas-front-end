import { Link } from "react-router-dom";
import "./SignupPage.scss";

const SignupPage = () => {
  return (
    <div className="signin-page">
      <h1 className="signin-page_title">Sign Up</h1>
      <form className="form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Repeat Password" />
        <div className="form_bottom">
          <div>
            <span>Already registered?</span>
            <Link to={"/signin"}>Sign In</Link>
          </div>
          <button type="button" className="button-success">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
