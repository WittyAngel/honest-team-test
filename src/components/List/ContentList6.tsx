import React from "react";
import UnstyledTabsIntroduction2 from "../TabComponent2";
import trust_wallet from "../../img/Trust-Wallet-app-300x300.png.webp";

function ContentList6() {
  return (
    <div>
      <h2 style={{ fontSize: "32px", fontWeight: "600" }}>
        <span
          className="ez-toc-section"
          id="Trust_Wallet_Arten_Die_besten_Trust_Wallets"
          ez-toc-data-id="#Trust_Wallet_Arten_Die_besten_Trust_Wallets"
        ></span>
        Trust Wallet Arten: Die besten Trust Wallets
        <span className="ez-toc-section-end"></span>
      </h2>
      <p>
        Allgemein gibt es ja 5 wichtige Arten von Krypto-Wallets: Desktop bzw.
        Online Wallets, Paper Wallet, Mobile Wallets bzw. Apps und Hardware
        Wallet. Das Trust Wallet ist sowohl als Trust Wallet App und Trust
        Wallet Desktop für Mac verfügbar.
      </p>
      <p>
        Wir werden <strong>beide Versionen</strong> nachfolgend etwas näher
        betrachten:
      </p>

      <UnstyledTabsIntroduction2 />

      <div
        className="su-tabs-pane su-u-clearfix su-u-trim"
        data-title="Trust Wallet Desktop Wallet"
      >
        <h3>Trust Wallet Desktop Wallet</h3>
        <p>
          <picture className="size-medium wp-image-71409 alignright">
            <source
              type="image/webp"
              data-lazy-src={trust_wallet}
              src={trust_wallet}
            />
            <img
              src="data:image/svg+xml,%3Csvg%20xmlns=&#39;http://www.w3.org/2000/svg&#39;%20viewBox=&#39;0%200%20300%20149&#39;%3E%3C/svg%3E"
              alt="trust-wallet-desktop-tablet"
              width="300"
              height="149"
              data-lazy-src={trust_wallet}
            />
          </picture>
          <noscript>
            <picture className="size-medium wp-image-71409 alignright">
              <source type="image/webp" src={trust_wallet} />
              <img
                decoding="async"
                src={trust_wallet}
                alt="trust-wallet-desktop-tablet"
                width="300"
                height="149"
              />
            </picture>{" "}
          </noscript>
          Das Trust Wallet ist seit Ende 2019 auch als
          <strong>Desktop Wallet für Mac-Geräte</strong> verfügbar. Leider ist
          aktuell noch kein Trust Wallet für Windows erhältlich, uns stehen auch
          keine Informationen darüber zu Verfügung, ob die Einführung einer
          solchen Desktop Wallet Version in naher Zukunft geplant ist.
        </p>
        <p>
          Prinzipiell lässt sich das<strong>Trust Wallet Desktop Wallet</strong>
          ganz ähnlich wie die Trust Wallet App bedienen. Das Design ist
          deckungsgleich, auch die Navigationsleisten am oberen und unteren
          Bildschirmrand lassen sich nutzen, um zwischen den einzelnen
          Funktionen und Modulen innerhalb weniger Sekunden zu wechseln.
        </p>
        <p>
          Dennoch ist die
          <strong>Handhabung und Bedienung</strong> etwas mühseliger als am
          Smartphone, weshalb wir unseren Lesern ausdrücklich empfehlen, die
          Trust Wallet App als Mobile Wallet auf ihrem Smartphone zu verwenden,
          um den vollen Nutzen aus der Verwendung des Wallets zu ziehen.
        </p>
      </div>

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
          data-position="4"
        >
          <span
            style={{
              color: "#000000",
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
export default ContentList6;
