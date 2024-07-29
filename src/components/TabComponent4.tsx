import * as React from "react";
import { styled } from "@mui/system";
import { Tabs } from "@mui/base/Tabs";
import { TabsList as BaseTabsList } from "@mui/base/TabsList";
import { TabPanel as BaseTabPanel } from "@mui/base/TabPanel";
import { buttonClasses } from "@mui/base/Button";
import { Tab as BaseTab, tabClasses } from "@mui/base/Tab";

export default function TabComponent4() {
  return (
    <Tabs defaultValue={0}>
      <TabsList>
        <Tab value={0}>
          <span>Alternativen bei der Wallet-Art</span>
        </Tab>
        <Tab value={1}> Alternative Mobile Wallets</Tab>
      </TabsList>
      <TabPanel value={0}>
        <div>
          {" "}
          <h3>Alternativen bei der Wallet-Art</h3>
          <p>
            Als Mobile Wallet ist das Trust Wallet insofern
            <strong>unsicher</strong>, als dass bei einem Diebstahl des
            Smartphones, auf dem das Trust Wallet installiert ist, Hacker oder
            Diebe Zugriff auf die im Wallet enthaltenen Krypto-Token erhalten
            könnten. Darum ist es erforderlich, jedenfalls den zusätzlichen PIN
            (“<strong>App-Sperre</strong>“) in den Einstellungen für die App zu
            aktivieren.
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
                Wer als Krypto-Besitzer langfristig anlegen und verwahren
                möchte, also dem sogenannten HODLn anhängt – der sollte ohnehin
                auf eine Hardware Wallet oder Paper Wallet setzen. Dieses Wallet
                ist nämlich nicht mit dem Internet verbunden, weshalb man auch
                von “Cold Storage” spricht. Dadurch ist ein Diebstahl durch
                unbefugten Zutritt oder Hack durch Kriminelle nahezu
                ausgeschlossen.
              </p>
            </div>
          </div>
          <p></p>
          <p>
            Wir haben hier ausführliche Beiträge und Testberichte der besten
            <a
              href="https://coincierge.de/wallets/hardware-wallet/"
              className="prefetch"
            >
              Hardware Wallet
            </a>
            und
            <a
              href="https://coincierge.de/wallets/paper-wallets/"
              className="prefetch"
            >
              Paper Wallet
            </a>
            durchgeführt, auf welche wir unsere Leser gerne verweisen.
          </p>
        </div>
      </TabPanel>
      <TabPanel value={1}>
        <div>
          {" "}
          <h3>
            Alternative Mobile Wallets (Alternativen innerhalb der Wallet-Art)
          </h3>
          <p>
            Trust Wallet ist ein Mobile Wallet und die Wahrheit ist, dass die
            meisten Nutzer auch auf genau so ein Krypto Wallet setzen möchten.
            Angesichts der einfachen Bedienung und der Möglichkeit, das Wallet
            immer bei der Hand zu haben, sind die Vorteile von Mobile Wallets
            nicht von der Hand zu weisen.
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
                Das Trust Wallet zählt zu den beliebtesten Mobile Wallets und
                hat sich diesen Rang auch verdient erarbeitet. Attraktive
                Alternativen können jedoch das Exodus Wallet,
                <a
                  href="https://coincierge.de/wallets/electrum-wallet/"
                  className="prefetch"
                >
                  Electrum Wallet
                </a>
                ,
                <a
                  href="https://coincierge.de/wallets/mycelium-wallet/"
                  className="prefetch"
                >
                  Mycelium Wallet
                </a>
                oder das
                <a
                  href="https://coincierge.de/wallets/metamask-wallet/"
                  className="prefetch"
                >
                  MetaMask Wallet
                </a>
                darstellen.
              </p>
            </div>
          </div>
          <p></p>
          <p>
            Jedoch hat das Trust Wallet all diesen Wallets voraus, dass auch{" "}
            <strong>BEP-2 und BEP-20 Tokens</strong>
            <strong>auf der Binance Smart Chain unterstützt</strong>
            werden, was für das rasch wachsende Ökosystem von Binance und die
            vielen spannenden Krypto-Projekte in diesem Bereich definitiv{" "}
            <strong>ein großer Vorteil</strong> ist.
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
