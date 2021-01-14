import React, { Component } from "react";
import AddArticle from "./addArticle";
import DeleteArticle from "./deleteArticle";
import UpdateArticle from "./updateArticle";

class Admin extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container" style={{}}>
          <h2
            className="Roboto-Bold"
            style={{
              textAlign: "center",
              paddingTop: 20,
              fontSize: 50,
            }}
          >
            Admin Panel
          </h2>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <AddArticle />
          <UpdateArticle />
          <DeleteArticle />
        </div>
      </React.Fragment>
    );
  }
}

export default Admin;

//<button className="btn btn-primary btn m-4">Add New Article</button>
