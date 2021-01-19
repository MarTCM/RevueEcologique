import React, { Component } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import { confirmAlert } from "react-confirm-alert";
import Pagination from "../../common/pagination/pagination";
import { paginate } from "../../common/pagination/paginate";
import api from "../../../api";
import "react-confirm-alert/src/react-confirm-alert.css";

class MyArticles extends Component {
  state = {
    articles: [],
    myArticles: [],
    user: this.props.user,
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: "titre", order: "asc" },
    isLoading: false,
    noArticle: false,
    loadingMessage: "Chargement en cours des articles...",
    noArticleMessage: "Vous n'avez ajouter aucun article pour le moment.",
  };

  componentDidMount = async () => {
    this.setState({ isLoading: true });

    await api.getAllArticles().then((articles) => {
      this.setState({
        articles: articles.data.data,
        isLoading: false,
      });
    });

    const user = this.state.user;
    var myArticles = this.state.articles.filter(function (article) {
      return article.auteur === user.name;
    });

    this.setState({
      myArticles: myArticles,
    });

    if (this.state.myArticles.length === 0) {
      this.setState({
        noArticle: true,
      });
    }
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSort = (path, order) => {
    this.setState({ sortColumn: { path, order } });
  };

  render() {
    if (this.state.myArticles.length === 0 && this.state.noArticle)
      return (
        <p
          style={{
            width: "100%",
            height: 200,
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            fontSize: 20,
          }}
        >
          {this.state.noArticleMessage}
          <Link
            className="btn btn-primary"
            to="/newarticle"
            style={{ marginLeft: 10 }}
          >
            Ajouter un article
          </Link>
        </p>
      );
    else if (this.state.myArticles.length === 0 && !this.state.noArticle) {
      return (
        <p
          style={{
            width: "100%",
            height: 200,
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            fontSize: 20,
          }}
        >
          {this.state.loadingMessage}
        </p>
      );
    }

    const sorted = _.orderBy(
      this.state.myArticles,
      [this.state.sortColumn.path],
      [this.state.sortColumn.order]
    );

    const articles = paginate(
      sorted,
      this.state.currentPage,
      this.state.pageSize
    );

    return (
      <div
        className="container shadow"
        style={{
          fontSize: 19,
          marginTop: 75,
          paddingTop: 20,
          paddingBottom: 10,
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "inline",
          }}
        >
          <h3 style={{ marginRight: 50, float: "left" }}>
            Affichage de {this.state.myArticles.length} articles.
          </h3>
          <Link
            className="btn btn-primary"
            to="/newarticle"
            style={{ marginBottom: 15, float: "right" }}
          >
            Ajouter un article
          </Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Titre</th>
              <th>Date de création</th>
              <th>Auteur</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article) => (
              <tr key={article._id}>
                <td>
                  <Link to={`/articles/${article._id}`}>{article.titre}</Link>
                </td>
                <td style={{ paddingLeft: 30 }}>
                  {article.createdAt.substr(0, 10)}
                </td>
                <td style={{ paddingRight: 1 }}>{article.auteur}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={async () => {
                      confirmAlert({
                        title: "Alerte",
                        message:
                          "Vous êtes sûr que vous voulez supprimer cet article?",
                        buttons: [
                          {
                            label: "Oui",
                            onClick: async () => {
                              await api.deleteArticleById(article._id);
                              window.location.reload();
                              this.setState({
                                myArticles: this.state.myArticles,
                              });
                            },
                          },
                          {
                            label: "Non",
                          },
                        ],
                      });
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemsCount={this.state.myArticles.length}
          pageSize={this.state.pageSize}
          currentPage={this.state.currentPage}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default MyArticles;
