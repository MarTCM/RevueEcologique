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
        <form action="https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40martcm/RevueEcologiqueMobile-5f9745aeb0fd47fcaa59c9cb0f675163-signed.apk">
          <button className="btn btn-success" type="submit">
            Télécharger
          </button>
        </form>
      </div>
    );
  }
}

export default Mobile;
