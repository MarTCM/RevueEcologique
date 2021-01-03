import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import LoginButton from "./common/LoginButton";
import LogoutButton from "./common/LogoutButton";

class Navbar extends Component {
  render() {
    return (
      <div className="Roboto">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand navbar-header Roboto-Bold" to="#">
            Revue Ecologique
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link
                className="nav-item nav-link m-"
                to="/"
                style={{ fontSize: 20 }}
              >
                Acceuil
              </Link>
              <Link
                className="nav-item nav-link m-"
                to="/articles"
                style={{ fontSize: 20 }}
              >
                Articles
              </Link>
              <Link
                className="nav-item nav-link m-"
                to="/admin"
                style={{ fontSize: 20 }}
              >
                Admin
              </Link>
            </div>
          </div>
          <LoginButton />
          <LogoutButton />
        </nav>
      </div>
    );
  }
}

export default Navbar;

<nav className="navbar navbar-dark bg-dark">
  <div>
    <Link className="navbar-brand navbar-header Roboto-Bold" to="#">
      Revue Ecologique
    </Link>
  </div>
</nav>;
