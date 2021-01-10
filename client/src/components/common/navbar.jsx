import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginButton from "./AuthButtons/LoginButton";
import UserBar from "../user/userbar";

class Navbar extends Component {
  render() {
    return (
      <div className="Roboto">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand navbar-header Roboto-Bold" to="#">
            <img
              src="https://gsalbayane.ma/wp-content/uploads/2020/06/cropped-36566514_187674361925018_2535644585846112256_n-180x180.png"
              width="45"
              alt=""
            />
            La Revue Ecologique
          </Link>

          <div className=" navbar-collapse">
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
          <UserBar />
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
