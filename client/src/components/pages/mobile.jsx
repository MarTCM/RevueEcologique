import React, { Component } from "react";

class Mobile extends Component {
  render() {
    return (
      <div className="text-center">
        <div
          className="jumbotron shadow"
          style={{ margin: 20, textAlign: "center", fontSize: 18 }}
        >
          Vous utilisez un appareil mobile? Télécharger l'application Expo sur
          Play Store ou App Store puis clickez sur le lien ci-dessous.
        </div>
        <form action="https://expo.io/--/to-exp/exp%3A%2F%2Fexp.host%2F%40martcm%2FRevueEcologiqueMobile">
          <button className="btn btn-success shadow" type="submit">
            Ouvrir avec Expo
          </button>
        </form>
      </div>
    );
  }
}

export default Mobile;
