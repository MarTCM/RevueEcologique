import React, { Component } from "react";
import api from "../../api";

class UpdateArticle extends Component {
  state = { article: { id: "", titre: "", paragraphe: "", auteur: "" } };

  handleChange = ({ currentTarget: input }) => {
    const article = { ...this.state.article };
    article[input.name] = input.value;
    this.setState({ article });
  };

  handleUpdateArticle = async (e) => {
    e.preventDefault();
    const { id, titre, paragraphe, auteur } = this.state.article;
    const payload = { titre, paragraphe, auteur };

    await api.updateArticleById(id, payload).then((res) => {
      window.alert(`Article updated successfully`);
      this.setState({
        id: "",
        titre: "",
        paragraphe: "",
        auteur: "",
      });
    });
  };

  render() {
    return (
      <div
        className="container m-3 jumbotron"
        style={{
          width: 350,
          height: 500,
          paddingTop: 20,
          float: "left",
        }}
      >
        <h2 className="Roboto-Bold m-3">Update Article</h2>
        <form className="m-3" onSubmit={this.handleUpdateArticle}>
          <div className="form-group">
            <label htmlFor="id">ID</label>
            <input
              value={this.state.id}
              onChange={this.handleChange}
              id="id"
              name="id"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="titre">Titre</label>
            <input
              value={this.state.titre}
              onChange={this.handleChange}
              id="titre"
              name="titre"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="paragraphe">Paragraphe</label>
            <input
              value={this.state.paragraphe}
              onChange={this.handleChange}
              id="paragraphe"
              name="paragraphe"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="auteur">Auteur</label>
            <input
              value={this.state.auteur}
              onChange={this.handleChange}
              id="auteur"
              name="auteur"
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

export default UpdateArticle;
