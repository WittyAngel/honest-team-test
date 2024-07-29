import React from "react";

function Expandable() {
  return (
    <div className="ez-toc-title-container">
      <p className="ez-toc-title ">Inhaltsverzeichnis</p>
      <span className="ez-toc-title-toggle">
        <a
          href="https://coincierge.de/wallets/trust-wallet/#"
          className="ez-toc-pull-right ez-toc-btn ez-toc-btn-xs ez-toc-btn-default ez-toc-toggle ez-toc-loaded"
          aria-label="Toggle Table of Content"
        >
          <span className="ez-toc-js-icon-con">
            <span className="">
              <span className="eztoc-hide" style={{ display: "none" }}>
                Toggle
              </span>
              <span className="ez-toc-icon-toggle-span">
                <svg
                  style={{ fill: " #999", color: "#999" }}
                  xmlns="http://www.w3.org/2000/svg"
                  className="list-377408"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6 6H4v2h2V6zm14 0H8v2h12V6zM4 11h2v2H4v-2zm16 0H8v2h12v-2zM4 16h2v2H4v-2zm16 0H8v2h12v-2z"
                    fill="currentColor"
                  ></path>
                </svg>
                <svg
                  style={{ fill: " #999", color: "#999" }}
                  className="arrow-unsorted-368013"
                  xmlns="http://www.w3.org/2000/svg"
                  width="10px"
                  height="10px"
                  viewBox="0 0 24 24"
                  version="1.2"
                  baseProfile="tiny"
                >
                  <path d="M18.2 9.3l-6.2-6.3-6.2 6.3c-.2.2-.3.4-.3.7s.1.5.3.7c.2.2.4.3.7.3h11c.3 0 .5-.1.7-.3.2-.2.3-.5.3-.7s-.1-.5-.3-.7zM5.8 14.7l6.2 6.3 6.2-6.3c.2-.2.3-.5.3-.7s-.1-.5-.3-.7c-.2-.2-.4-.3-.7-.3h-11c-.3 0-.5.1-.7.3-.2.2-.3.5-.3.7s.1.5.3.7z"></path>
                </svg>
              </span>
            </span>
          </span>
        </a>
      </span>
    </div>
  );
}

export default Expandable;
