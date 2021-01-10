import React, { Component } from "react";

class Mobile extends Component {
  render() {
    return (
      <div className="text-center">
        <div
          className="jumbotron"
          style={{ margin: 20, textAlign: "center", fontSize: 18 }}
        >
          Vous utilisez un appareil mobile? Télécharger l'application Revue
          Ecologique pour android.
        </div>
        <form action="https://download1481.mediafire.com/4hrym81ry14g/b2qmp16eobwv72b/RevueEcologiqueMobile.apk">
          <button className="btn btn-success" type="submit">
            Télécharger
          </button>
        </form>
      </div>
    );
  }
}

export default Mobile;
