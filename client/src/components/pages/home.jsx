import React, { Component } from "react";
import { Parallax } from "react-parallax";
import { Slide } from "react-slideshow-image";
import { Link } from "react-router-dom";
import api from "../../api/index";
import "react-slideshow-image/dist/styles.css";

const image1 =
  "https://sleeksearch.s3.amazonaws.com/u/udb/16/44/d1/9d/66765/1450095412/full-hd-nature-wallpapers-free-downloads-for-laptop-14.jpg";

const fadeProperties = {
  duration: 3000,
  pauseOnHover: true,
};

const map = `<div style="width: 100%"><iframe width="100%" height="485" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=GS%20Albayane+(GS%20AlBayane)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>`;

class Home extends Component {
  state = { articles: [] };

  iframe = () => {
    return {
      __html: map,
    };
  };

  componentDidMount = async () => {
    await api.getAllArticles().then((articles) => {
      this.setState({
        articles: articles.data.data,
      });
    });
  };

  render() {
    return (
      <main>
        <div>
          <Parallax bgImage={image1} strength={500}>
            <div
              className="container-fluid text-center flex-centered white-color"
              style={{
                borderRadius: 0,
                height: 675,
                paddingBottom: 70,
              }}
            >
              <h1>
                <b>Vous consultez maintenant la revue écologique!</b>
              </h1>
              <br />
              <h5>Réalisée par les élèves du TCS1 du GS AlBayane</h5>
            </div>
          </Parallax>
        </div>
        <div
          className="container text-center jumbotron m-6 shadow-1"
          style={{ borderRadius: 10, marginTop: 60, marginBottom: 200 }}
        >
          <h2>
            <i>
              Cette revue contient les sujets redigés par les élèves du TCS1
              portant sur le domaine de l'écologie. Ceci a été fait sous la
              supervision de notre prof de SVT.
            </i>
          </h2>
        </div>
        <div>
          <div
            className="slide-container shadow-1"
            style={{ height: 500, marginBottom: 60, margin: 50 }}
          >
            <Slide {...fadeProperties}>
              {this.state.articles.map((article) => (
                <div className="each-fade">
                  <div
                    style={{
                      backgroundImage: `url(${article.imgLink})`,
                      height: 500,
                      backgroundSize: "cover",
                      display: "flex",
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: 60,
                      fontFamily: "Lora-Medium",
                      margin: 0,
                    }}
                  >
                    <p>
                      <Link
                        style={{ color: "#FFF" }}
                        to={`/articles/${article._id}`}
                      >
                        {article.titre}
                      </Link>
                    </p>
                  </div>
                </div>
              ))}
            </Slide>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 275,
          }}
        >
          <div
            className="jumbotron shadow"
            style={{
              marginTop: 200,
              width: 500,
              marginRight: 10,
            }}
          >
            <h1
              className="Roboto-Bold"
              style={{
                textAlign: "left",
                paddingLeft: 10,
                fontSize: 45,
              }}
            >
              À propos
            </h1>
            <hr style={{ paddingBottom: 15 }} />
            <p style={{ fontSize: 20 }} className="Roboto">
              Ce site est une magazine écologique rédigée primairement par les
              élèves du TCS1 du GS AlBayane. GS AlBayane est une école privée
              situé à l'Av Tarik Ibn Ziad Hay Al Moustakbal Al Badil, comme le
              montre la carte à droite. Le créateur de ce site: Marwane
              ElBaraka, est lui aussi un élève dans le GS AlBayane. Le
              professeur superviseur de cette revue est: M. Hassan Ouchtaqalla.
            </p>
          </div>
          <div
            style={{
              width: 485,
              marginTop: 200,
            }}
          >
            <div className="shadow" dangerouslySetInnerHTML={this.iframe()} />
          </div>
        </div>
      </main>
    );
  }
}

export default Home;
