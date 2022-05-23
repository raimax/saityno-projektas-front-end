import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import './Header.scss';

const Header = () => {
  return (
    <nav className="header">
      <div className="header_container">
        <div className="header_container_left">
          <a className="header_brand" href="/">
            <FontAwesomeIcon icon={faImage} size="lg" className="me-2" />
            Navbar
          </a>
          <Link to={"/newpost"} className="button-success">
            <FontAwesomeIcon icon={faSquarePlus} size="lg" className="me-2" />
            New post
          </Link>
        </div>
        <div className="header_container_right">
          <Link to={"/signin"} className="header_link">
            Sign in
          </Link>
          <Link to={"/signup"} className="button-success">
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;