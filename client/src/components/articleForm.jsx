import { get } from "lodash";
import React, { Component } from "react";
import api from "../api";

class ArticleForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      titre: "",
      paragraphe: "",
      imgLink: "",
      auteur: "",
    };
  }

  componentDidMount = async () => {
    const { id } = this.state;
    const article = await api.getArticleById(id);

    this.setState({
      titre: article.data.data.titre,
      paragraphe: article.data.data.paragraphe,
      imgLink: article.data.data.imgLink,
      auteur: article.data.data.auteur,
    });
  };

  render() {
    return (
      <div className="container m-6">
        <h1 className="Lora-Medium" style={{ fontSize: 60, padding: 80 }}>
          {this.state.titre}
        </h1>
        <div className="jumbotron m-4">
          <p
            className="Lora-Regular"
            id="paragraphe"
            style={{ fontSize: 30, paddingRight: 90, paddingLeft: 100 }}
            dangerouslySetInnerHTML={{ __html: atob(this.state.paragraphe) }}
          ></p>
          <img src={this.state.imgLink} alt="" style={{ paddingLeft: 100 }} />
        </div>
      </div>
    );
  }
}

export default ArticleForm;
