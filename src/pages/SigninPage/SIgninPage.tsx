import { Link } from "react-router-dom";
import "./SigninPage.scss";
import { ToastContainer, toast } from "react-toastify";
import axiosConfig from "../../helpers/axiosConfig";
import Loader from "../../components/Loader/Loader";
import { useState } from "react";

const SigninPage = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const SignInAsync = async () => {
    setLoading(true);

    const data: AuthData = {
      username: username,
      password: password,
    };

    await axiosConfig
      .post("/auth/signin", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        toast(error.response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="signin-page">
      <ToastContainer theme="dark" />
      <Loader isLoading={loading} text="Logging in..." />
      <h1 className="signin-page_title">Sign In</h1>
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
        <div className="form_bottom">
          <div>
            <span>Not registered?</span>
            <Link to={"/signup"}>Sign up</Link>
          </div>
          <button
            onClick={SignInAsync}
            type="button"
            className="button-success"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default SigninPage;
