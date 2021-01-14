import React, { Component } from "react";
import api from "../../api";

class DeleteArticle extends Component {
  state = { article: { id: "" } };

  handleChange = ({ currentTarget: input }) => {
    const article = { ...this.state.article };
    article[input.name] = input.value;
    this.setState({ article });
  };

  handleDeleteArticle = async (e) => {
    e.preventDefault();
    const { id } = this.state.article;

    await api.deleteArticleById(id).then((res) => {
      window.alert(`Article deleted successfully`);
      this.setState({
        id: "",
      });
    });
  };

  render() {
    return (
      <div
        className="container m-3 jumbotron"
        style={{
          width: 350,
          height: 575,
          paddingTop: 20,
          float: "left",
        }}
      >
        <h2 className="Roboto-Bold m-3">Delete Article</h2>
        <form className="m-3" onSubmit={this.handleDeleteArticle}>
          <div className="form-group">
            <label htmlFor="id">ID</label>
            <input
              value={this.state.article.id}
              onChange={this.handleChange}
              id="id"
              name="id"
              type="text"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default DeleteArticle;
