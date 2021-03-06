import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user } = useAuth0();
  return (
    <div
      className="jumbotron center Lora-Medium"
      style={{ backgroundColor: "white", paddingTop: 30 }}
    >
      <p style={{ fontSize: 50 }}>Profil</p>
      <hr />
      <div>
        <label
          style={{
            fontSize: 20,
            marginRight: 2,
            paddingLeft: 20,
            paddingTop: 15,
            marginBottom: 25,
            paddingRight: 190,
            display: "inline",
          }}
        >
          Photo de profil:
        </label>
        <img
          src={user.picture}
          style={{
            borderRadius: "50%",
            width: 64,
            height: 64,
            display: "inline",
          }}
          alt=""
        />
        <br />
        <label style={{ fontSize: 20, marginRight: 275, paddingLeft: 20 }}>
          Nom:
        </label>
        <label className="center" style={{ fontSize: 20 }}>
          {user.name}
        </label>
        <br />
        <label style={{ fontSize: 20, marginRight: 267, paddingLeft: 20 }}>
          Email:
        </label>
        <label className="center" style={{ fontSize: 20 }}>
          {user.email}
        </label>
        <br />
        <label style={{ fontSize: 20, marginRight: 279, paddingLeft: 20 }}>
          Role:
        </label>
        <label className="center" style={{ fontSize: 20 }}>
          {user["https://rbac/role"]}
        </label>
        <br />
      </div>
    </div>
  );
};

export default Profile;
