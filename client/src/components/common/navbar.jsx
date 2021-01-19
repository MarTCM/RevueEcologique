import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./AuthButtons/LoginButton";
import UserBar from "../user/userbar";

const Navbar = () => {
  const { isAuthenticated, user } = useAuth0();

  const admin = () => {
    if (isAuthenticated && user["https://rbac/role"] === "Admin") {
      return (
        <Link
          className="nav-item nav-link"
          to="/admin"
          style={{ fontSize: 20 }}
        >
          Admin
        </Link>
      );
    }
  };

  const myArticles = () => {
    if (
      isAuthenticated &&
      (user["https://rbac/role"] === "Auteur" ||
        user["https://rbac/role"] === "Admin")
    ) {
      return (
        <Link
          className="nav-item nav-link"
          to="/myarticles"
          style={{ fontSize: 20 }}
        >
          Mes Articles
        </Link>
      );
    }
  };

  return (
    <div className="Roboto">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
            <Link className="nav-item nav-link" to="/" style={{ fontSize: 20 }}>
              Acceuil
            </Link>
            <Link
              className="nav-item nav-link"
              to="/articles"
              style={{ fontSize: 20 }}
            >
              Articles
            </Link>
            {myArticles()}
            {admin()}
          </div>
        </div>
        <LoginButton />
        <UserBar />
      </nav>
    </div>
  );
};

export default Navbar;
