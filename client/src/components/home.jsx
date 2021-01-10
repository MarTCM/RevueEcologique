import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <main>
        <div
          className="container-fluid jumbotron text-center bg1"
          style={{ borderRadius: 0 }}
        >
          <h1>
            <b>Vous consultez maintenant la revue écologique!</b>
          </h1>
          <br />
          <h5>Réalisée par les élèves du TCS1 du GS AlBayane</h5>
        </div>
        <div className="container text-center jumbotron m-6">
          <h2>
            <i>
              Cette revue contient les sujets redigés par les élèves du TCS1
              portant sur le domaine de l'écologie. Ceci a été fait sous la
              supervision de notre prof de SVT.
            </i>
          </h2>
        </div>
      </main>
    );
  }
}

export default Home;
