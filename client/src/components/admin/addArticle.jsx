import React, { Component } from "react";
import api from "../../api";

class AddArticle extends Component {
  state = {
    article: { titre: "", paragraphe: "", auteur: "", imgLink: "" },
  };

  handleChange = ({ currentTarget: input }) => {
    const article = { ...this.state.article };
    article[input.name] = input.value;
    this.setState({ article });
  };

  handleIncludeArticle = async (e) => {
    e.preventDefault();
    const { titre, paragraphe, auteur, imgLink } = this.state.article;
    const payload = { titre, paragraphe, auteur, imgLink };

    await api.insertArticle(payload).then((res) => {
      window.alert(`Article inserted successfully`);
      this.setState({
        titre: "",
        paragraphe: "",
        auteur: "",
        imgLink: "",
      });
    });
  };

  render() {
    return (
      <div
        className="container m-3 jumbotron shadow"
        style={{ width: 350, height: 575, paddingTop: 20, float: "left" }}
      >
        <h2 className="Roboto-Bold m-3">Add Article</h2>
        <form className="m-3" onSubmit={this.handleIncludeArticle}>
          <div className="form-group">
            <label htmlFor="titre">Titre</label>
            <input
              autoFocus
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
          <div className="form-group">
            <label htmlFor="imgLink">Image de face</label>
            <input
              value={this.state.imgLink}
              onChange={this.handleChange}
              id="imgLink"
              name="imgLink"
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

export default AddArticle;
