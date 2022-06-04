import { useState } from "react";
import { Link } from "react-router-dom";
import "./SignupPage.scss";
import { ToastContainer, toast } from "react-toastify";
import axiosConfig from "../../helpers/axiosConfig";
import Loader from "../../components/Loader/Loader";

const SignupPage = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordRepeat, setPasswordRepeat] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const SignUpAsync = async () => {
    if (password !== passwordRepeat) {
      toast("Passwords do not match");
      return;
    }

    setLoading(true);

    const data: AuthData = {
      username: username,
      password: password,
    };

    await axiosConfig
      .post("/auth/signup", data)
      .then((response) => {
        toast(response.data);
        ResetInputs();
      })
      .catch((error) => {
        toast(error.response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const ResetInputs = () => {
    setUsername("");
    setPassword("");
    setPasswordRepeat("");
  };

  return (
    <div className="signin-page">
      <ToastContainer theme="dark" />
      <Loader isLoading={loading} text="Registration in progress..." />
      <h1 className="signin-page_title">Sign Up</h1>
      <form className="form">
        <input
          value={username}
          onChange={(event) => setUsername(event.currentTarget.value)}
          type="text"
          placeholder="Username"
        />
        <input
          value={password}
          onChange={(event) => setPassword(event.currentTarget.value)}
          type="password"
          placeholder="Password"
        />
        <input
          value={passwordRepeat}
          onChange={(event) => setPasswordRepeat(event.currentTarget.value)}
          type="password"
          placeholder="Repeat Password"
        />
        <div className="form_bottom">
          <div>
            <span>Already registered?</span>
            <Link to={"/signin"}>Sign In</Link>
          </div>
          <button
            onClick={SignUpAsync}
            type="button"
            className="button-success"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
