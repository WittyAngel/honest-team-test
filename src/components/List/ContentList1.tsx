import React from "react";
import Trust_wallet from "../../img/Trust-Wallet-review-1.jpg.webp";
import trust_img from "../../img/trust-wallet-logo-font-300x244.png.webp";

function ContentList1() {
  return (
    <div>
      <h2>
        <span
          className="ez-toc-section"
          id="Was_ist_das_Trust_Wallet"
          ez-toc-data-id="#Was_ist_das_Trust_Wallet"
        ></span>
        Was ist das Trust Wallet?<span className="ez-toc-section-end"></span>
      </h2>
      <p>
        <picture className="wp-image-71167 size-medium alignright">
          <source type="image/webp" data-lazy-src={trust_img} src={trust_img} />
          <img
            src={trust_img}
            alt="trust-wallet-logo-font"
            width="300"
            height="244"
            data-lazy-src={trust_img}
            data-ll-status="loaded"
            className="entered lazyloaded"
          />
        </picture>
        <noscript>
          <picture className="wp-image-71167 size-medium alignright">
            <source type="image/webp" src={trust_img} />
            <img
              src={trust_img}
              alt="trust-wallet-logo-font"
              width="300"
              height="244"
            />
          </picture>{" "}
        </noscript>
        Trust Wallet ist ein benutzerfreundliches Krypto-Wallet mit
        Open-Source-Lizenz, das neben vielen führenden Kryptowährungen auch alle
        <strong> ERC-20-, ERC-721-Token</strong> und Binance Smartchain-Token
        (BEP-20-Token) unterstützt. Die Nutzeranzahl des Trust Wallet ist seit
        dem Launch der Binance Smart Chain im Januar 2021 explosionsartig auf
        <strong>über 5 Millionen aktive Nutzer</strong> nach oben gestiegen.
      </p>
      <p>
        Trust Wallet ist ein benutzerfreundliches Krypto-Wallet mit
        Open-Source-Lizenz, das neben vielen führenden Kryptowährungen auch alle
        <strong> ERC-20-, ERC-721-Token</strong> und Binance Smartchain-Token
        (BEP-20-Token) unterstützt. Die Nutzeranzahl des Trust Wallet ist seit
        dem Launch der Binance Smart Chain im Januar 2021 explosionsartig auf
        <strong>über 5 Millionen aktive Nutzer</strong> nach oben gestiegen.
      </p>
      <p>
        Verantwortlich dafür ist vor allem die Popularität von PancakeSwap zum
        nahezu gebührenfreien Austausch spannender Altcoins im Gegenzug zu den
        horrenden Transaktionsgebühren der Ethereum-Blockchain bei dezentralen
        Exchanges wie Uniswap oder SushiSwap.
      </p>
      <p>
        Seit 2018 befindet sich Trust Wallet im Besitz des weltgrößten
        Krypto-Exchanges Binance, ursprünglich wurde Trust Wallet vom russischen
        Blockchain-Entwickler Victor Radochenko 2018 entwickelt und vorgestellt.
      </p>
      <p>
        Lange Zeit war Trust Wallet bloß als Mobile Wallet für iOS und Android
        erhältlich, doch im Q2 2019 wurde auch die
        <strong>Desktop-Version für Mac lanciert</strong>. Binance war bemüht,
        über das Trust Wallet eine möglichst große Anzahl an Nutzern zur
        Adoption von Kryptowährungen und der Binance Smart Chain zu bewegen.
        <br />
      </p>
      <div className="su-note">
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
            Besonders macht Trust Wallet als Krypto-Wallet nicht nur die
            Kompatibilität mit Ethereum- und BSC-Token, sondern auch die direkte
            Integration des Binance DEX, über den im Wallet befindliche Token
            sofort kostengünstig geswappt werden können. Darüber hinaus gibt es
            die Möglichkeit, direkt über die Smartphone-App führende
            Kryptowährungen gegen attraktive jährliche Verzinsungsraten zu
            staken (über Binance).
          </p>
        </div>
      </div>
      <p></p>
      <p>
        Weitere Features inkludieren Preisbenachrichtigungen in Echtzeit bei
        benutzerdefinierten Schwellenwerten, Einrichtung einer PIN-Sperre
        (appspezifische PIN), die Einrichtung von Subwallets, Multilingualität,
        Denominierungswährung (Fiat), direkte Verlinkung zum Kundensupport und
        der Trust Wallet Community auf Social Media.
      </p>
      <p>
        <picture className="wp-image-71407 size-full aligncenter">
          <source type="image/webp" src={Trust_wallet} />
          <img
            src={Trust_wallet}
            alt="Trust Wallet review"
            width="1347"
            height="612"
            data-lazy-src={Trust_wallet}
            data-ll-status="loaded"
            className="entered lazyloaded"
          />
        </picture>
        <noscript>
          <picture className="wp-image-71407 size-full aligncenter">
            <source type="image/webp" src={Trust_wallet} />
            <img
              decoding="async"
              src={Trust_wallet}
              alt="Trust Wallet review"
              width="1347"
              height="612"
            />
          </picture>
        </noscript>
      </p>
    </div>
  );
}

export default ContentList1;
