import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const UserBar = () => {
  const { logout, isAuthenticated, user } = useAuth0();
  return (
    isAuthenticated && (
      <div className="dropdown">
        <button
          className="btn dropdown-toggle"
          type="button"
          id="dropdownMenu2"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          style={{ color: "white", fontSize: 20 }}
        >
          <img
            style={{
              borderRadius: "50%",
              width: 30,
              height: 30,
              display: "block",
              float: "left",
              marginRight: 5,
            }}
            src={user.picture}
            alt=""
          />
          {user.given_name}
        </button>
        <div
          className="dropdown-menu dropdown-menu-right"
          aria-labelledby="dropdownMenu2"
        >
          <Link className="dropdown-item" to="/profile">
            Profil
          </Link>
          <div className="dropdown-divider" />
          <button
            onClick={() => logout()}
            className="dropdown-item"
            type="button"
            style={{ color: "red" }}
          >
            Déconnexion
          </button>
        </div>
      </div>
    )
  );
};

export default UserBar;
