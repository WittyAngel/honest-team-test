import * as React from "react";
import { styled } from "@mui/system";
import { Tabs } from "@mui/base/Tabs";
import { TabsList as BaseTabsList } from "@mui/base/TabsList";
import { TabPanel as BaseTabPanel } from "@mui/base/TabPanel";
import { buttonClasses } from "@mui/base/Button";
import { Tab as BaseTab, tabClasses } from "@mui/base/Tab";
import trust_wallet from "../img/Trust-Wallet-app-300x300.png.webp";

export default function TabComponent2() {
  return (
    <Tabs defaultValue={0}>
      <TabsList>
        <Tab value={0}>
          <span>Trust Wallet App</span>
        </Tab>
        <Tab value={1}>Benutzerfreundlichkeit</Tab>
      </TabsList>
      <TabPanel value={0}>
        <div>
          <h3>Trust Wallet App</h3>
          <p>
            <picture className="size-medium wp-image-71408 alignright">
              <source
                type="image/webp"
                data-lazy-src={trust_wallet}
                src={trust_wallet}
              />
              <img
                alt=""
                width="300"
                height="300"
                data-lazy-src={trust_wallet}
                className="entered lazyloaded"
                src={trust_wallet}
                data-ll-status="loaded"
              />
            </picture>
            <noscript>
              <picture className="size-medium wp-image-71408 alignright">
                <source type="image/webp" src={trust_wallet} />
                <img src={trust_wallet} alt="" width="300" height="300" />
              </picture>{" "}
            </noscript>
            Entstanden ist das Trust Wallet als
            <strong>Mobile Wallet,</strong> die Trust Wallet App war zunächst
            für iOS und bald danach für Android auf den Markt gekommen. Damit
            hat Trust Wallet eine
            <strong>große Zielgruppe an Krypto-Einsteigern</strong>
            erreicht, die direkt vom Smartphone aus komfortabel mit
            Kryptowährungen handeln möchten.
          </p>
          <p>
            Heute ist die
            <strong>Trust Wallet App für iOS</strong> und
            <strong>Android</strong> ein
            <strong>absoluter Download-Liebling</strong> und steht
            <strong>ganz oben in den Download-Charts der App-Stores</strong>
            im Bereich Krypto. Die Beliebtheit der App zeigt sich auch in den
            großartigen Bewertungen, welche die Trust Wallet App sowohl im iOS
            Store und im Android Play Store vorweisen kann.
          </p>
          <p>
            Im
            <a
              href="https://apps.apple.com/us/app/trust-crypto-bitcoin-wallet/id1288339409"
              target="_blank"
              rel="noreferrer"
            >
              <strong>iOS App Store</strong>
            </a>
            hat die Wallet insgesamt
            <strong>4,7 von 5 Sternen bei 90.434 Rezensionen</strong>
            von Nutzern aus aller Welt. Ein Blick auf die Trust Wallet
            Erfahrungen zeigt, dass die Nutzer insbesondere von der hohen
            Benutzerfreundlichkeit, der Kompatibilität mit ERC-20, ERC-721,
            BEP-2 und BEP-20-Token und der Staking-Möglichkeit schwärmen.
          </p>
          <p>
            Ein ähnliches Bild zeigt sich im
            <strong>
              <a
                href="https://apps.apple.com/us/app/trust-crypto-bitcoin-wallet/id1288339409"
                target="_blank"
                rel="noreferrer"
              >
                Android Play Store
              </a>
              ,
            </strong>
            wo das Trust Wallet eine
            <strong>Bewertung von 4,5 von 5 Sternen</strong>
            erhält. Über <strong>310.000 Bewertungen</strong> aus aller Welt
            machen dieses Rating äußerst aussagekräftig und repräsentativ. Liest
            man die Trust Wallet Erfahrungen der Android-Nutzer, werden
            <strong>
              ähnliche Vorzüge wie von iOS-Anwendern hervorgehoben
            </strong>
            .
          </p>
          <p>
            Die Trust Wallet App zeigt sich in übersichtlichem und schlankem
            Design, beim Öffnen der App wird eine aktuelle Vermögensübersicht
            mit Auflistung der Guthaben in einzelnen Coins angezeigt. Eine
            <strong>Navigationsleiste am oberen Bildschirmrand</strong>
            lässt weitere Kryptowährungen hinzufügen.
          </p>
          <p>
            Mit der
            <strong>Navigationsleiste am unteren Bildschirmrand</strong>
            kann man zwischen den Krypto-Wallets (Hauptwallet und Sub-Wallets),
            der Staking-Option und den granularen Einstellungsmöglichkeiten hin-
            und herwechseln.
          </p>
        </div>
      </TabPanel>
      <TabPanel value={1}>
        <div>
          <p>
            <strong>Wichtig</strong>: Nutzer sollten unbedingt BNB-Token in
            ihrer Trust Wallet App halten! Die BNB-Token sind nämlich
            erforderlich, um die Transaktions- bzw. Gas-Gebühren beim Swappen
            von Kryptowährungen direkt in der Trust Wallet App zu bezahlen.
          </p>
        </div>
      </TabPanel>
    </Tabs>
  );
}

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const Tab = styled(BaseTab)`
  font-family: "IBM Plex Sans", sans-serif;
  color: #fff;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 300;
  background-color: transparent;
  background: #222;

  padding: 10px 15px;
  min-height: 40px;
  border: 1px solid #222;
  border-bottom: none;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  margin: 1.5px;
  border: none;
  font-size: 13px;
  display: flex;

  transition: all 0.2s;

  &:hover {
    background-color: #f5f5f5;
  }

  &:focus {
    color: #fff;

    outline: currentColor thin dotted;
  }

  &.${tabClasses.selected} {
    background-color: #fff;
    color: #222;
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(BaseTabPanel)(
  ({ theme }) => `
  width: 100%;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 13px;
  padding: 20px 12px;
  
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  border: 2px solid #222;
  border-top:none;
  border-radius: 1px; opacity: 1;
  `
);

const TabsList = styled(BaseTabsList)(
  ({ theme }) => `
  min-width: 400px;
  background-color: #222;
  border-radius: 4px;
  border-bottom : none;
 
  margin-bottom: 0;
  display: flex;
  align-items: center;

  align-content: space-between;
  box-shadow: 0px 4px 30px ${
    theme.palette.mode === "dark" ? grey[900] : grey[200]
  };
  `
);
