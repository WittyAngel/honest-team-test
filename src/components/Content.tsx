import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

import Collapsible from "react-collapsible";
import Expandable from "./Expandable";
import ContentList1 from "./List/ContentList1";
import ContentList2 from "./List/ContentList2";
import ContentList3 from "./List/ContentList3";
import ContentList4 from "./List/ContentList4";
import ContentList5 from "./List/ContentList5";
import ContentList6 from "./List/ContentList6";
import ContentList7 from "./List/ContentList7";
import ContentList8 from "./List/ContentList8";
import ContentList9 from "./List/ContentList9";
import ContentList10 from "./List/ContentList10";
import ContentList11 from "./List/ContentList11";
import ContentList12 from "./List/ContentList12";
import ContentList13 from "./List/ContentList13";
import ContentList14 from "./List/ContentList14";

interface Post {
  title: string;
  author: string;
  description: string;
  date: string;
}
const query = `
{
  postCollection {
    items {
      title
      author
      description
      date
    }
  }
}`;

function Content() {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/172666ru6dsk/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer cCbgOYfI0ZiNooQc8-OJ0RzHjs8oL4LePGcz54QUwH8",
        },
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        setPost(data.postCollection.items[0]);
      });
  }, []);

  if (!post) {
    return (
      <div className="contentful-not-loading">
        Can not get data from Contentful CMS
      </div>
    );
  }

  return (
    <div className="td-main-content-wrap td-container-wrap">
      <div className="td-container tdc-content-wrap ">
        <div className="td-crumb-container">
          <div className="entry-crumbs">
            <span>
              <a className="entry-crumb" href="https://coincierge.de/">
                Start
              </a>
            </span>
            <i className="td-icon-right td-bread-sep"></i>
            <span>
              <a
                title="Wallets"
                className="entry-crumb"
                href="https://coincierge.de/wallets/"
              >
                Wallets
              </a>
            </span>
            <i className="td-icon-right td-bread-sep td-bred-no-url-last"></i>
            <span className="td-bred-no-url-last">Trust Wallet</span>
          </div>
        </div>
        <div className="td-pb-row">
          <div className="td-pb-span12 td-main-content" role="main">
            <div className="td-page-header">
              <h1 className="main-title entry-title td-page-title">
                <span>{post && post.title}</span>
              </h1>
            </div>
            <div className="module-meta-info-container">
              <div className="post-info-container">
                <div className="author-info--container content-written">
                  <a
                    href="https://coincierge.de/author/christoph-peterson/"
                    className="author-avatar--link"
                  >
                    <picture className="avatar avatar-96 photo author-avatar sab-custom-avatar">
                      <source
                        type="image/webp"
                        src="https://coincierge.de/wp-content/uploads/2022/11/Christoph.jpeg.webp 2x"
                      />
                      <img
                        alt=""
                        src={require("../img/Christoph.jpeg.webp")}
                        height="96"
                        width="96"
                      />
                    </picture>
                  </a>
                  <div className="author-info">
                    <div className="author-info--label">AUTOR</div>
                    <div className="author-info--name--container">
                      <a
                        href="https://coincierge.de/author/christoph-peterson/"
                        className="author-info--name"
                      >
                        {post && post.author}
                      </a>
                      <div className="author-info--badge">
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                        ></svg>
                      </div>
                    </div>
                    <div className="author-info--status">
                      Experte für Kryptowährungen
                    </div>
                    <div className="author-info--last-updated">
                      <span>Aktualisiert: </span>
                      <time>6 Dez 2023</time>
                    </div>
                  </div>
                </div>
                <div className="post-info">
                  <div className="post-info--element post-info--element--disclosure">
                    <span>post-info--element--text</span>
                  </div>
                </div>
                <div className="post-info">
                  <div className="post-info--element post-info--element--disclosure">
                    <span
                      className="post-info--element--text"
                      // onClick={() =>
                      //   jQuery("#tt-disclosure-1,#tt-disclosure-2").show()
                      // }
                    >
                      Offenlegung
                    </span>
                    <svg
                      className="post-info--element--icon"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.99967 14.6667C11.6816 14.6667 14.6663 11.6819 14.6663 8.00001C14.6663 4.31811 11.6816 1.33334 7.99967 1.33334C4.31778 1.33334 1.33301 4.31811 1.33301 8.00001C1.33301 11.6819 4.31778 14.6667 7.99967 14.6667Z"
                        stroke="#151515"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M8 10.6667V8"
                        stroke="#151515"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M8 5.33334H8.00667"
                        stroke="#151515"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <div
                      id="tt-disclosure-1"
                      className="post-info--element--tooltip"
                      style={{ display: "none" }}
                    >
                      <span className="post-info--element--tooltip--text">
                        Investieren ist spekulativ. Bei der Anlage ist Ihr
                        Kapital in Gefahr. Diese Website ist nicht für die
                        Verwendung in Rechtsordnungen vorgesehen, in denen der
                        beschriebene Handel oder die beschriebenen Investitionen
                        verboten sind, und sollte nur von Personen und auf
                        gesetzlich zulässige Weise verwendet werden. Ihre
                        Investition ist in Ihrem Land oder Wohnsitzstaat
                        möglicherweise nicht für den Anlegerschutz geeignet.
                        Führen Sie daher Ihre eigene Due Diligence durch. Diese
                        Website steht Ihnen kostenlos zur Verfügung, wir
                        erhalten jedoch möglicherweise Provisionen von den
                        Unternehmen, die wir auf dieser Website anbieten.
                      </span>
                      <div
                        className="post-info--element--tooltip--close"
                        // onClick={() =>
                        //   jQuery("#tt-disclosure-1,#tt-disclosure-2").hide()
                        // }
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 4L4 12"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M4 4L12 12"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div
                      id="tt-disclosure-2"
                      className="post-info--element--tooltip--triangle"
                      style={{ display: "none" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="td-page-content">
              <div className="su-row">
                <div className="su-column su-column-size-1-2">
                  <div>
                    <ReactMarkdown>{post && post.description}</ReactMarkdown>
                  </div>
                </div>
                <div className="su-column su-column-size-1-2 custom_pic">
                  <div className="su-column-inner su-u-clearfix su-u-trim">
                    <div className="su-note sute_not ">
                      <div className=" su-u-clearfix su-u-trim su-note-inner-add">
                        <picture className="alignright wp-image-48584">
                          <img
                            src={require("../img/Coincierge-Icon.png")}
                            alt="icon"
                          ></img>
                        </picture>
                        <strong>Direkt zum Binance Wallet</strong>
                        <p>
                          Wer keine Zeit verlieren will, kommt hier direkt zu
                          unserem Testsieger unter den Wallets:
                          <br></br>
                        </p>
                        <div className="su-button-center">
                          <a
                            href="https://coincierge.de/visit/Binance"
                            className="su-button su-button-style-3d"
                            data-relfix="1"
                            rel="sponsored"
                          >
                            <span className="sui sui-chevron-right">
                              {" "}
                              Jetzt das Binance Wallet eröffnen
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="ez-toc-container"
                style={{ width: "100%" }}
                className="ez-toc-v2_0_67_1 counter-hierarchy ez-toc-counter ez-toc-light-blue ez-toc-container-direction"
              >
                <Collapsible
                  trigger={
                    <div>
                      <Expandable />
                    </div>
                  }
                >
                  <nav>
                    <ul
                      className="ez-toc-list ez-toc-list-level-1 eztoc-toggle-hide-by-default"
                      style={{ display: "block" }}
                    >
                      <li className="ez-toc-page-1 ez-toc-heading-level-2">
                        <a
                          className="ez-toc-link ez-toc-heading-1"
                          href="#Was_ist_das_Trust_Wallet"
                          title="Was ist das Trust Wallet?"
                        >
                          Was ist das Trust Wallet?
                        </a>
                      </li>
                      <li className="ez-toc-page-1 ez-toc-heading-level-2">
                        <a
                          className="ez-toc-link ez-toc-heading-2"
                          href="#Trust_Wallet_erstellen_So_geht_es"
                          title="Trust Wallet erstellen: So geht es."
                        >
                          Trust Wallet erstellen: So geht es.
                        </a>
                      </li>
                      <li className="ez-toc-page-1 ez-toc-heading-level-2">
                        <a
                          className="ez-toc-link ez-toc-heading-3"
                          href="#Hintergrundinfos_zu_Trust_Wallet"
                          title="Hintergrundinfos zu Trust Wallet"
                        >
                          Hintergrundinfos zu Trust Wallet
                        </a>
                      </li>
                      <li className="ez-toc-page-1 ez-toc-heading-level-2">
                        <a
                          className="ez-toc-link ez-toc-heading-4"
                          href="#Unsere_Trust_Wallet_Erfahrung_Der_ultimative_Test"
                          title="Unsere Trust Wallet Erfahrung: Der ultimative Test"
                        >
                          Unsere Trust Wallet Erfahrung: Der ultimative Test
                        </a>
                      </li>
                      <li className="ez-toc-page-1 ez-toc-heading-level-2">
                        <a
                          className="ez-toc-link ez-toc-heading-5"
                          href="#Kryptowaehrungen_guenstig_kaufen_mit_unserem_Testsieger_Binance"
                          title="Kryptowährungen günstig kaufen mit unserem Testsieger Binance"
                        >
                          Kryptowährungen günstig kaufen mit unserem Testsieger
                          Binance
                        </a>
                      </li>
                      <li className="ez-toc-page-1 ez-toc-heading-level-2">
                        <a
                          className="ez-toc-link ez-toc-heading-6"
                          href="#Trust_Wallet_Arten_Die_besten_Trust_Wallets"
                          title="Trust Wallet Arten: Die besten Trust Wallets"
                        >
                          Trust Wallet Arten: Die besten Trust Wallets
                        </a>
                      </li>
                      <li className="ez-toc-page-1 ez-toc-heading-level-2">
                        <a
                          className="ez-toc-link ez-toc-heading-7"
                          href="#Wo_kann_man_das_Trust_Wallet_downloaden"
                          title="Wo kann man das Trust Wallet downloaden?"
                        >
                          Wo kann man das Trust Wallet downloaden?
                        </a>
                      </li>
                      <li className="ez-toc-page-1 ez-toc-heading-level-2">
                        <a
                          className="ez-toc-link ez-toc-heading-8"
                          href="#Trust_Wallet_Gebuehren"
                          title="Trust Wallet Gebühren"
                        >
                          Trust Wallet Gebühren
                        </a>
                      </li>
                      <li className="ez-toc-page-1 ez-toc-heading-level-2">
                        <a
                          className="ez-toc-link ez-toc-heading-9"
                          href="#Welche_Coins_koennen_in_der_Trust_Wallet_aufbewahrt_werden"
                          title="Welche Coins können in der Trust Wallet aufbewahrt werden?"
                        >
                          Welche Coins können in der Trust Wallet aufbewahrt
                          werden?
                        </a>
                      </li>
                      <li className="ez-toc-page-1 ez-toc-heading-level-2">
                        <a
                          className="ez-toc-link ez-toc-heading-10"
                          href="#Trust_Wallet_Vorteile_und_Nachteile"
                          title="Trust Wallet Vorteile und Nachteile"
                        >
                          Trust Wallet Vorteile und Nachteile
                        </a>
                      </li>
                      <li className="ez-toc-page-1 ez-toc-heading-level-2">
                        <a
                          className="ez-toc-link ez-toc-heading-11"
                          href="#Gibt_es_eine_bessere_Alternative_zum_Trust_Wallet"
                          title="Gibt es eine bessere Alternative zum Trust Wallet?"
                        >
                          Gibt es eine bessere Alternative zum Trust Wallet?
                        </a>
                      </li>
                      <li className="ez-toc-page-1 ez-toc-heading-level-2">
                        <a
                          className="ez-toc-link ez-toc-heading-12"
                          href="#Fazit"
                          title="Fazit"
                        >
                          Fazit
                        </a>
                      </li>
                      <li className="ez-toc-page-1 ez-toc-heading-level-2">
                        <a
                          className="ez-toc-link ez-toc-heading-13"
                          href="#FAQs"
                          title="FAQs"
                        >
                          FAQs
                        </a>
                      </li>
                    </ul>
                  </nav>
                </Collapsible>
              </div>

              <ContentList1 />
              <ContentList2 />
              <ContentList3 />
              <ContentList4 />
              <ContentList5 />
              <ContentList6 />
              <ContentList7 />
              <ContentList8 />
              <ContentList9 />
              <ContentList10 />
              <ContentList11 />
              <ContentList12 />
              <ContentList13 />
              <ContentList14 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
