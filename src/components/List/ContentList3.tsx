import React from "react";
import Logo_symbol from "../../img/Trust-Wallet-Logo-Symbol.png.webp";

function ContentList3() {
  return (
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
        <h2>
          <span
            className="ez-toc-section"
            id="Hintergrundinfos_zu_Trust_Wallet"
            ez-toc-data-id="#Hintergrundinfos_zu_Trust_Wallet"
          ></span>
          Hintergrundinfos zu Trust Wallet
          <span className="ez-toc-section-end"></span>
        </h2>
        <p>
          <picture className="alignright wp-image-71166 size-full">
            <source
              type="image/webp"
              data-lazy-srcset={Logo_symbol}
              src={Logo_symbol}
            />
            <img
              decoding="async"
              src={Logo_symbol}
              alt="Trust-Wallet-Logo-Symbol"
              width="257"
              height="256"
              data-lazy-src={Logo_symbol}
              data-ll-status="loaded"
              className="entered lazyloaded"
            />
          </picture>
          <noscript>
            <picture className="alignright wp-image-71166 size-full">
              <source type="image/webp" src={Logo_symbol} />
              <img
                src={Logo_symbol}
                alt="Trust-Wallet-Logo-Symbol"
                width="257"
                height="256"
              />
            </picture>
          </noscript>
        </p>
        <div className="su-list" style={{ marginLeft: "0px" }}>
          <p></p>
          <ul>
            <li>
              <i
                className="sui sui-hand-o-right"
                style={{ color: "#000000" }}
              ></i>
              Gegründet von Victor Radochenko 2017
            </li>
            <li>
              <i
                className="sui sui-hand-o-right"
                style={{ color: "#000000" }}
              ></i>
              Binance hat Trust Wallet im Juli 2018 erworben
            </li>
            <li>
              <i
                className="sui sui-hand-o-right"
                style={{ color: "#000000" }}
              ></i>
              Launch der Desktop Wallet für Mac im Q2 2019
            </li>
            <li>
              <i
                className="sui sui-hand-o-right"
                style={{ color: "#000000" }}
              ></i>
              Kaufen von Kryptowährungen mit Fiat möglich
            </li>
            <li>
              <i
                className="sui sui-hand-o-right"
                style={{ color: "#000000" }}
              ></i>
              NFTs sammeln im Wallet möglich
            </li>
            <li>
              <i
                className="sui sui-hand-o-right"
                style={{ color: "#000000" }}
              ></i>
              „
              <a
                href="https://coincierge.de/wallets/binance-coin-wallet/"
                className="prefetch"
              >
                Offizielle Wallet von Binance
              </a>
              “ gemäß dem Krypto-Exchange
            </li>
            <li>
              <i
                className="sui sui-hand-o-right"
                style={{ color: "#000000" }}
              ></i>
              Integration mit Binance DEX für direkten Krypto-Swap
            </li>
            <li>
              <i
                className="sui sui-hand-o-right"
                style={{ color: "#000000" }}
              ></i>
              Staking von Kryptowährungen direkt in App möglich
            </li>
            <li>
              <i
                className="sui sui-hand-o-right"
                style={{ color: "#000000" }}
              ></i>
              Vollständig dezentrales Wallet, keine personenbezogenen Daten
              erhoben
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default ContentList3;
