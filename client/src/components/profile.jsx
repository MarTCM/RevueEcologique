import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { logout, isAuthenticated } = useAuth0();
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
              width: 25,
              height: 25,
              display: "block",
              float: "left",
              marginRight: 5,
            }}
            src="https://yt3.ggpht.com/a/AATXAJwgWpd9EOd2gd8n9PCY_oF09f43GhIupsUg9KrGIA=s176-c-k-c0x00ffffff-no-rj-mo"
            alt=""
          />
          User
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
          <button
            onClick={() => logout()}
            className="dropdown-item"
            type="button"
          >
            Log out
          </button>
        </div>
      </div>
    )
  );
};

export default Profile;
