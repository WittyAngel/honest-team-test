import React from "react";
import pic_img from "../../img/Christoph.jpeg.webp";

function ContentList14() {
  return (
    <div>
      <div className="custom_page_des">
        <p>
          Jeder Handel ist riskant. Keine Gewinngarantie. Jeglicher Inhalt
          unserer Webseite dient ausschließlich dem Zwecke der Information und
          stellt keine Kauf- oder Verkaufsempfehlung dar. Dies gilt sowohl für
          Assets, als auch für Produkte, Dienstleistungen und anderweitige
          Investments. Die Meinungen, welche auf dieser Seite kommuniziert
          werden, stellen keine Investment Beratung dar und unabhängiger
          finanzieller Rat sollte immer wenn möglich eingeholt werden.
        </p>
      </div>
      <div className="td-container">
        <div className="td-pb-row">
          <div className="td-pb-span12">
            <div className="author-box-wrap 13">
              <div className="author-media-box">
                <a href="https://coincierge.de/author/christoph-peterson/">
                  <picture className="avatar avatar-150 photo lozad sab-custom-avatar">
                    <source
                      type="image/webp"
                      src="
                              https://coincierge.de/wp-content/uploads/2022/11/Christoph.jpeg.webp 2x
                            "
                    />
                    <img alt="" src={pic_img} height="150" width="150" />
                  </picture>
                </a>
                <div className="td-author-social"></div>
              </div>
              <div className="desc">
                <div className="td-author-name vcard author">
                  <span className="fn">
                    <a href="https://coincierge.de/author/christoph-peterson/">
                      Christoph Peterson
                    </a>
                  </span>
                  <span className="author-title">
                    Experte für Kryptowährungen
                  </span>
                </div>
                <div className="td-author-description">
                  <p>
                    Christoph ist vor ein paar Jahren auf das Thema
                    Kryptowährungen gestoßen und beschäftigt sich als Autor und
                    Enthusiast seither intensiv mit den Themen Kryptowährungen,
                    Blockchain und STOs. Er schreibt regelmäßig für das
                    Online-Magazin Coincierge.de, wo er über alle Aspekte der
                    Krypto- und Blockchain-Technologie berichtet und Analysen zu
                    Kryptowährungstrends und Nachrichten liefert. Christophs
                    Ziel ist es, die Leser mit genauen Informationen zu
                    versorgen, um ihnen zu helfen, fundierte Entscheidungen zu
                    treffen, wenn es um Investitionen in Kryptowährungen oder
                    andere Produkte in diesem Sektor geht.
                  </p>
                  <div id="gtx-trans">
                    <div className="gtx-trans-icon"></div>
                  </div>
                </div>
                <a href="https://coincierge.de/author/christoph-peterson/">
                  <div className="author-cta-button">
                    <span>Zeige alle Posts von Christoph Peterson</span>
                  </div>
                </a>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentList14;
