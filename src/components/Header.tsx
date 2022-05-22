import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <FontAwesomeIcon icon={faImage} size="lg" />
          Navbar
        </a>
        <div>
          <Link to={"/signin"}  className="text-decoration-none text-dark">Sign in</Link>
          <Link to={"/signup"}  className="btn btn-success ms-4">
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
