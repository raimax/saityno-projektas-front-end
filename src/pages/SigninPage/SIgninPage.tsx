import { Link } from "react-router-dom";
import "./SigninPage.scss";

const SigninPage = () => {
  return (
    <div className="signin-page">
			<h1 className="signin-page_title">Sign In</h1>
      <form className="form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <div className="form_bottom">
          <div>
            <span>Not registered?</span>
            <Link to={"/signup"}>Sign up</Link>
          </div>
          <button type="button" className="button-success">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default SigninPage;
