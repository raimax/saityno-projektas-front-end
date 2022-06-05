import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Header.scss";
import { IsAuthed, HandleLogout } from "../../helpers/Auth";
import axiosConfig from "../../helpers/axiosConfig";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";

const Header = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const LogoutAsync = async () => {
    setLoading(true);
    await axiosConfig
      .post("/auth/logout", null)
      .then(() => {
				HandleLogout();
        navigate("/");
      })
      .catch((error) => {
				HandleLogout();
        console.log(error.response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <nav className="header">
      <Loader isLoading={loading} text="Logging out..." />
      <div className="header_container">
        <div className="header_container_left">
          <a className="header_brand" href="/">
            <FontAwesomeIcon icon={faImage} size="lg" className="me-2" />
            Navbar
          </a>
          {IsAuthed() ? (
            <Link to={"/newpost"} className="button-success">
              <FontAwesomeIcon icon={faSquarePlus} size="lg" className="me-2" />
              New post
            </Link>
          ) : null}
        </div>
        <div className="header_container_right">
          {IsAuthed() ? (
            <a onClick={LogoutAsync} href="/#" className="button-danger">
              Logout
            </a>
          ) : (
            <>
              <Link to={"/signin"} className="header_link">
                Sign in
              </Link>
              <Link to={"/signup"} className="button-success">
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
