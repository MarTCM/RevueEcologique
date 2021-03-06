import React, { Component } from "react";
import api from "../../../api";

class ArticleForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      titre: "",
      paragraphe: "",
      imgLink: "",
      auteur: "",
      pfp: "",
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
      pfp: article.data.data.pfp,
    });

    if (!this.state.pfp) {
      this.setState({
        pfp:
          "https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg",
      });
    }
  };

  render() {
    return (
      <div className="container">
        <h1
          className="Lora-Medium"
          style={{ fontSize: 60, paddingTop: 85, paddingLeft: 90 }}
        >
          {this.state.titre}
        </h1>
        <p
          style={{
            paddingLeft: 130,
            fontFamily: "Lora-Italic",
            fontSize: 22,
            paddingBottom: 30,
          }}
        >
          Réalisé par {this.state.auteur}
          <img
            src={this.state.pfp}
            alt=""
            style={{
              height: 45,
              marginLeft: 5,
              borderRadius: 50,
            }}
          />
        </p>
        <hr />
        <div
          className="jumbotron m-4 shadow-1"
          style={{
            borderRadius: 0,
            backgroundColor: "white",
          }}
        >
          <p
            className="Lora-Regular"
            id="paragraphe"
            style={{ fontSize: 30, paddingRight: 90, paddingLeft: 100 }}
            dangerouslySetInnerHTML={{
              __html: this.state.paragraphe,
            }}
          ></p>
        </div>
      </div>
    );
  }
}

export default ArticleForm;
