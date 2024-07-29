import React from "react";

function ContentList2() {
  return (
    <div
      className="su-note-inner su-u-clearfix su-u-trim"
      style={{
        padding: "2.5em",
        backgroundColor: "#d0efcf",
        borderColor: "#ffffff",
        color: "#333333",
        borderRadius: "3px",
        MozBorderRadius: "3px",
        WebkitBorderRadius: "3px",
      }}
    >
      <h2 style={{ fontSize: "32px", fontWeight: 600 }}>
        <span
          className="ez-toc-section"
          id="Trust_Wallet_erstellen_So_geht_es"
          ez-toc-data-id="#Trust_Wallet_erstellen_So_geht_es"
        ></span>
        Trust Wallet erstellen: So geht es.
        <span className="ez-toc-section-end"></span>
      </h2>
      <ol>
        <li>
          Installiere die Trust Wallet App auf deinem Smartphone. Sie kann für
          iOS und Android aus dem App Store heruntergeladen werden.
        </li>
        <li>Öffne die App und klicke auf „Erstelle eine neue Wallet.“</li>
        <li>
          Akzeptiere Datenschutzerklärung und AGB mit Aktivieren des Häkchens,
          klicke dann auf „Fortsetzen“.
        </li>
        <li>
          Aktiviere das Häkchen bei „Wenn ich meinen Recovery Phrase…“ und
          klicke dann auf „Fortsetzen“.
        </li>
        <li>
          Deine Recovery Phrase wird dir jetzt angezeigt. Notiere die 12 Wörter
          handgeschrieben auf einem Notizblock oder erstelle gleich 2-3 Zettel,
          auf denen du die 12 Wörter in der richtigen Reihenfolge notierst.
          Bewahre den/die Zettel an einem sicheren Ort und für andere
          unerreichbar auf. Du benötigst diese Seed Phrase, um deine Wallet
          wiederherzustellen.
        </li>
        <li>
          Bestätige nun, dass du deine Seed Phrase notiert hast. Hierfür musst
          du die 12 Wörter in der richtigen Reihenfolge anklicken. Klicke dann
          auf „Fortsetzen“.
        </li>
        <li>
          Aktiviere nun Push-Benachrichtigungen, um keine wichtigen Meldungen
          oder Updates zur Trust Wallet App und deinen Krypto-Token mehr zu
          verpassen. Klicke hierfür bei der entsprechenden Meldung auf
          „Aktivieren“.
        </li>
      </ol>
      <div className="su-button-center">
        <a
          href="https://trustwallet.com/de/"
          className="su-button su-button-style-3d"
          style={{
            color: "#000000",
            backgroundColor: "#ffae2a",
            borderColor: "#cc8c22",
            borderRadius: "5px",
          }}
          target="_blank"
          rel="noreferrer"
        >
          <span
            style={{
              color: "#000000",
              padding: " 7px 20px",
              fontSize: "16px",
              lineHeight: "24px",
              borderColor: "#ffc76a",
              borderRadius: "5px",
              textShadow: "none",
            }}
          >
            <i
              className="sui sui-chevron-right"
              style={{ fontSize: "16px", color: "#000000" }}
            ></i>
            Zu Trust Wallet
          </span>
        </a>
      </div>
    </div>
  );
}
export default ContentList2;
