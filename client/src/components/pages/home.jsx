import React, { Component } from "react";
import { Parallax, Background } from "react-parallax";

const image1 =
  "https://sleeksearch.s3.amazonaws.com/u/udb/16/44/d1/9d/66765/1450095412/full-hd-nature-wallpapers-free-downloads-for-laptop-14.jpg";

const map = `<div style="width: 100%"><iframe width="100%" height="450" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=GS%20Albayane+(GS%20AlBayane)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>`;

class Home extends Component {
  iframe = () => {
    return {
      __html: map,
    };
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
                height: 600,
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
          className="container text-center jumbotron m-6"
          style={{ marginTop: 60, borderRadius: 10 }}
        >
          <h2>
            <i>
              Cette revue contient les sujets redigés par les élèves du TCS1
              portant sur le domaine de l'écologie. Ceci a été fait sous la
              supervision de notre prof de SVT.
            </i>
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 275,
          }}
        >
          <div
            className="jumbotron text-cente"
            style={{
              marginTop: 200,
              width: 500,
              marginRight: 10,
            }}
          >
            <h1
              style={{ textAlign: "left", paddingLeft: 20, paddingBottom: 30 }}
            >
              À propos
            </h1>
            <p>
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
              width: 450,
              marginTop: 175,
            }}
          >
            <div dangerouslySetInnerHTML={this.iframe()} />
          </div>
        </div>
      </main>
    );
  }
}

export default Home;
