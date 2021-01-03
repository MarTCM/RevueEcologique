import React, { Component } from "react";
import { Link } from "react-router-dom";
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

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link
                className="nav-item nav-link"
                to="/"
                style={{ fontSize: 20 }}
              >
                Acceuil
              </Link>
              <Link
                className="nav-item nav-link"
                to="/articles"
                style={{ fontSize: 20 }}
              >
                Articles
              </Link>
              <Link
                className="nav-item nav-link"
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
