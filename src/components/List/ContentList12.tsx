import React from "react";

function ContentList12() {
  return (
    <div>
      <h2>
        <span
          className="ez-toc-section"
          id="Fazit"
          ez-toc-data-id="#Fazit"
        ></span>
        Fazit<span className="ez-toc-section-end"></span>
      </h2>
      <p>
        Das Trust Wallet ist als offizielle Mobile Wallet von Binance, dem
        weltgrößten Krypto-Exchange, und 5 Millionen Nutzern definitiv ein
        Platzhirsch im Bereich der Krypto-Wallets.
      </p>
      <p>
        Es sind hohe Benutzerfreundlichkeit, maximale Kompatibilität und
        integrierte Swap- und Staking-Funktionen, welche als Gründe für die
        positive Trust Wallet Erlebnis ausschlaggebend sind.
        <br />
      </p>
      <div
        className="su-note"
        style={{
          borderColor: "#e0e0d5",
          borderRadius: "3px",
          MozBorderRadius: "3px",
          WebkitBorderRadius: "3px",
        }}
      >
        <div
          className="su-note-inner su-u-clearfix su-u-trim"
          style={{
            backgroundColor: "#fafaef",
            borderColor: "#ffffff",
            color: "#333333",
            borderRadius: "3px",
            MozBorderRadius: "3px",
            WebkitBorderRadius: "3px",
          }}
        >
          <p></p>
          <p>
            Nutzer sollten sich jedoch auch bewusst sein, dass für die
            langfristige Aufbewahrung großer Mengen an Krypto-Token eine Mobile
            Wallet wie Trust Wallet aufgrund von Sicherheitsrisiken nicht
            geeignet ist. Hierfür raten wir dringend zur Anschaffung einer
            Hardware Wallet.
          </p>
        </div>
      </div>
      <p></p>
      <p>
        Möchten Leser die Trust Wallet App installieren, kann der Download aus
        dem App Store direkt auf das iOS/Android-Endgerät erfolgen. Mit wenigen
        Taps ist die App installiert, Kryptowährungen können von Krypto-Börsen
        empfangen oder direkt über die App gekauft, gestaked oder gehandelt
        werden.
      </p>
      <div className="su-button-center">
        <a
          href="https://coincierge.de/visit/Binance"
          className="su-button su-button-style-3d"
          style={{
            color: "#000000",
            backgroundColor: "#ffae2a",
            borderColor: "#cc8c22",
            borderRadius: "5px",
          }}
          target="_blank"
          rel="noreferrer"
          data-relfix="1"
          data-position="5"
        >
          <span
            style={{
              color: " #000000",
              padding: "7px 20px",
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
            Jetzt zu Binance
          </span>
        </a>
      </div>
    </div>
  );
}

export default ContentList12;
