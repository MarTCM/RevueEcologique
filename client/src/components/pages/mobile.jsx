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
        <form action="https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40martcm/RevueEcologiqueMobile-b5ff728fbaa7479b8f13b1b40c03af99-signed.apk">
          <button className="btn btn-success" type="submit">
            Télécharger
          </button>
        </form>
      </div>
    );
  }
}

export default Mobile;
