import React, { Component } from "react";
import AddArticle from "./addArticle";
import DeleteArticle from "./deleteArticle";
import UpdateArticle from "./updateArticle";

class Admin extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container m-2" style={{}}>
          <h2
            className="Roboto-Bold"
            style={{
              textAlign: "center",
              paddingLeft: 440,
              paddingTop: 20,
              fontSize: 50,
            }}
          >
            Admin Panel
          </h2>
        </div>
        <div style={{ marginLeft: 225 }}>
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
