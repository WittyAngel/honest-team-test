import * as React from "react";
import { styled } from "@mui/system";
import { Tabs } from "@mui/base/Tabs";
import { TabsList as BaseTabsList } from "@mui/base/TabsList";
import { TabPanel as BaseTabPanel } from "@mui/base/TabPanel";
import { buttonClasses } from "@mui/base/Button";
import { Tab as BaseTab, tabClasses } from "@mui/base/Tab";

export default function TabComponent1() {
  return (
    <Tabs defaultValue={0}>
      <TabsList>
        <Tab value={0}>
          <span>Kompatibilität</span>
        </Tab>
        <Tab value={1}>Benutzerfreundlichkeit</Tab>
        <Tab value={2}>Sicherheit & Backup</Tab>
        <Tab value={3}>Kundensupport</Tab>
      </TabsList>
      <TabPanel value={0}>
        <div data-title="Kompatibilität">
          <h3>Trust Wallet Kompatibilität</h3>
          <p>
            Trust Wallet ist grundsätzlich sowohl als
            <strong>Mobile Wallet und Desktop Wallet (für Mac)</strong>
            verfügbar, was Nutzern maximalen Komfort durch kombinierte
            Verwendung auf mehreren Geräten bietet.
          </p>
          <p>
            Das Trust Wallet ist als Trust Wallet App sowohl für
            <strong>Mobilgeräte mit iOS und Android</strong>
            verfügbar. Trust Wallet für iOS erfordert aktuell
            <strong>mindestens iOS 13.0 oder neuer</strong>, analog gilt iPadOS
            13.0 oder iOS 13.0 für iPod touch.
          </p>
          <p>
            Die
            <strong>Trust Wallet App für Android</strong> erfordert mindestens
            <strong>Android-Version 6.0 oder höher,</strong>
            Installation auf Android-Smartphones und Android-Tablets ist
            möglich.
          </p>
          <p>
            Wer
            <strong>Trust Wallet für Desktop – Trust Wallet für Mac</strong>
            intstallieren möchte, der muss
            <strong>macOS 11.0</strong> und einen Mac mit Apple M1-Chip haben.
            Leider ist aktuell noch keine Trust Wallet für Windows verfügbar, es
            liegen auch keine näheren Informationen vor, ob ein solches Release
            überhaupt geplant ist.
          </p>
        </div>
      </TabPanel>
      <TabPanel value={1}>
        <div data-title="Benutzerfreundlichkeit">
          <h3>Benutzerfreundlichkeit</h3>
          <p>
            Die Trust Wallet App hat eine
            <strong>hohe Benutzerfreundlichkeit</strong>, welche aus einer
            intuitiven Bedienung und übersichtlichen Benutzeroberfläche
            resultieren. Entsprechend der Bedienungssprache des Smartphones wird
            die Trust Wallet App in deutscher Sprache dargestellt.
          </p>
          <p>
            Beim Start der App wird direkt die Liste führender Kryptowährung mit
            ihrem aktuellen Marktwert und die Menge der je im Wallet enthaltenen
            Währungseinheiten aufgelistet, zudem auch mit ihrem USD-Wert. Dabei
            kann die Fiat-Währung jedoch auf jede beliebige führende
            Fiat-Währung umgestellt werden.
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
                WebkitBorderRadius: "5px",
              }}
            >
              <p></p>
              <p>
                Die Option zum Senden, Empfangen und Kaufen von Kryptowährungen
                wird zentral oben mit einfachem Tap geboten, direkt unter dem
                Gesamtwert der in der
                <a
                  href="https://coincierge.de/wallets/dogecoin-wallet/"
                  target="_blank"
                  rel="noreferrer"
                  className="prefetch"
                >
                  Wallet
                </a>
                enthaltenen Token. Senden und Empfangen von Krypto-Token kann
                mit 3-4 Taps durchgeführt werden, Wallet-Adressen müssen nicht
                eingetippt werden, sie können{" "}
                <strong>per QR-Code abgelesen</strong> werden.
              </p>
            </div>
          </div>
          <p></p>
          <p>
            Am unteren Bildschirmrand befindet sich eine
            <strong>Navigationsleiste</strong>, mit der man zwischen
            <strong>Wallet</strong>,<strong>dezentralem Exchange</strong> (DEX
            mit Swap-Option) und den
            <strong>Einstellungen</strong> herumwechseln kann.
          </p>
          <div className="su-list" style={{ marginLeft: "0px" }}>
            <ul>
              <li>
                <i
                  className="sui sui-hand-o-right"
                  style={{ color: "#000000" }}
                ></i>
                Im Bereich “
                <em>
                  <strong>Wallet</strong>
                </em>
                ” kann man mit einfachem Tappen jede einzelne Kryptowährung bzw.
                die entsprechende Sub-Wallet aufrufen. Im jeweiligen Wallet
                werden wieder Gesamtwert angezeigt, sowie die Option zum Senden,
                Empfangen und Kaufen der entsprechenden Kryptowährung.
              </li>
              <li>
                <i
                  className="sui sui-hand-o-right"
                  style={{ color: "#000000" }}
                ></i>
                Im Bereich “
                <em>
                  <strong>DEX</strong>
                </em>
                ” kann ähnlich der DEX-Oberfläche wie Uniswap oder Pancake Swap
                zunächst die auszutauschende Kryptowährung mit dem
                Austauschbetrag eingegeben oder ausgewählt werden, darunter wird
                die zu erhaltende Kryptowährung ausgewählt. Mit einfachem Klick
                auf “Swap” kann der Austausch erfolgen.
              </li>
              <li>
                <i
                  className="sui sui-hand-o-right"
                  style={{ color: "#000000" }}
                ></i>
                Im Bereich “
                <em>
                  <strong>Einstellungen</strong>
                </em>
                ” kann man allerhand Konfigurationsmöglichkeiten von Wallets
                (Haupt- und Nebenwallets), Sicherheit, Benachrichtigungen,
                Preisalarme, und allen Social Media-Outlets oder Community-Foren
                der Software herumwechseln. Den Support erreicht man jedoch nur
                über das Untermenü “Über”, was uns etwas irritiert.
              </li>
            </ul>
          </div>
          <p>
            Am oberen Bildschirmrand befinden sich vertikal die 3 Reiter
            “Tokens”, “Finanzen” und “Sammlerstücke” zur Auswahl.
          </p>
          <div className="su-list" style={{ marginLeft: "0px" }}>
            <ul>
              <li>
                <i
                  className="sui sui-hand-o-right"
                  style={{ color: "#000000" }}
                ></i>
                Über den Reiter “
                <em>
                  <strong>Tokens</strong>
                </em>
                ” können die einzelnen Wallets jeder Kryptowährung aufgerufen
                werden.
              </li>
              <li>
                <i
                  className="sui sui-hand-o-right"
                  style={{ color: "#000000" }}
                ></i>
                Über den Reiter “
                <em>
                  <strong>Finanzen</strong>
                </em>
                ” werden alle Staking-Optionen mit den entsprechenden
                Jahreszinssätzen aufgelistet.
              </li>
              <li>
                <i
                  className="sui sui-hand-o-right"
                  style={{ color: "#000000" }}
                ></i>
                Über den Reiter “
                <em>
                  <strong>Sammlerstücke</strong>
                </em>
                ” kann man aktuelle Crypto-Jewels vorgeschlagen bekommen und
                wird über Airdrops informiert.
              </li>
            </ul>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={2}>
        <div data-title="Sicherheit &amp; Backup">
          <h3>Sicherheit &amp; Backup</h3>
          <p>
            Bei der Nutzung des Trust Wallet sollte
            <strong>Sicherheit ein wichtiges Anliegen</strong> jedes Anwenders
            sein, schließlich bewahrt man in der Wallet Token im Wert eines 4-
            oder gar 5-stelligen Euro-Betrages auf. So wie man auf die
            Sicherheit seines Portemonnaies in der Wesentasche oder Rucksack
            achtet, sollte die mobile Krypto-Wallet am Smartphone sicher sein.
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
                Tatsächlich ist Trust Wallet in puncto Sicherheit eine
                großartige Wahl. Zunächst liegt dies am
                <strong>
                  vollständig dezentralen Charakter der Krypto-Wallet.
                </strong>
                Bei Erstellung der Trust Wallet generiert man als Nutzer eine
                <strong>einzigartige Seed-Phrase mit 12 Wörtern Länge</strong>.
                Mit dieser Seed-Phrase kann man das Wallet im Notfall
                wiederherstellen.
              </p>
            </div>
          </div>
          <p></p>
          <p>
            Trust Wallet ist also eine
            <strong>vollständig dezentraliiserte Private Wallet</strong>, nur
            der Nutzer selbst verwaltet den privaten Schlüssel für seine Wallet.
            Dies bedeutet allgemein
            <strong>höhere Sicherheit</strong>, weil es
            <strong>keinen zentralen Angriffspunkt</strong> beim
            Wallet-Betreiber gibt. Mit einem Hack des Betreibers gibt es dennoch
            keine Möglichkeit, auf die Krypto-Wallet einzelner Nutzer
            zuzugreifen.
          </p>
          <p>
            Die Kehrseite der Medaille ist, dass mehr Verantwortung auf den
            Schultern der Nutzer selber ruht. Nutzer von Trust Wallet müssen die
            bei Erstellung generierte 12-stellige
            <strong>
              Seedphrase unbedingt sicher und für andere unerreichbar
              aufbewahren
            </strong>
            . Sollten <strong>Hacker oder Diebe</strong> in Besitz der
            Seedphrase gelangen, könnten sie
            <strong>alle enthaltenen Token </strong>innerhalb kürzester Zeit an
            ihre Wallet transferieren und
            <strong>unwiderbringlich stehlen</strong>.<br />
          </p>
          <div
            className="su-note"
            style={{
              borderColor: "#d7d7d7",
              borderRadius: "3px",
              MozBorderRadius: "3px",
              WebkitBorderRadius: "3px",
            }}
          >
            <div
              className="su-note-inner su-u-clearfix su-u-trim"
              style={{
                backgroundColor: "#f1f1f1",
                borderColor: "#ffffff",
                color: "#333333",
                borderRadius: "3px",
                MozBorderRadius: "3px",
                WebkitBorderRadius: "3px",
              }}
            >
              <p></p>
              <p>
                Ein
                <strong>
                  weiteres Sicherheitsfeature der Trust Wallet App
                </strong>
                ist die Möglichkeit, die Nutzung der Wallet durch einen
                <strong>appspezifischen PIN</strong> abzusichern. Einmal
                eingerichtet muss der PIN
                <strong>jedes Mal bei Öffnen der App</strong> sowie
                <strong>
                  erneut für Durchführung einer beantragten Auszahlung
                </strong>
                eingeben. Möglich ist dies unter Einstellungen –&gt; Sicherheit
                –&gt; App-Sperre.
              </p>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={3}>
        <div data-title="Kundensupport">
          <p></p>
          <h3>Kundensupport</h3>
          <p>
            Der <strong>Trust Wallet Kundensupport</strong> ist ein wichtiges
            Feature, nach dem sich vor allem
            <strong>Krypto-Einsteiger</strong> sorgen. Einsteiger können häufig
            Fragen haben zum Senden und Empfangen von Kryptowährungen, zur
            Sicherheit und Kompatibilität der Wallet oder auch zur
            Gebührenstruktur beim Kauf oder Swappen von Kryptowährungen.
          </p>
          <p>
            Nutzer sollten niemals zu schüchtern sein, um den Trust Wallet
            Kundenservice in Anspruch zu nehmen, denn eine
            <strong> falsche Transaktion</strong>, etwa durch
            <strong>falsche Wallet-Adresse</strong> oder Auswählen einer
            inkompatiblen Wallet (Kryptowährung passt nicht zu Wallet-Art),
            könnte zum
            <strong>Totalverlust des Transaktionsbetrages</strong>(
            <strong>!!!</strong>) führen (und zusätzlich noch
            Transaktionsgebühren).
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
                Was taugt der Trust Wallet Kundensupport? Nun, er ist
                <strong>akzeptabel, wenn auch nicht großartig</strong>. Es gibt
                leider
                <strong>keine Möglichkeit, per Telefon oder Live-Chat</strong>
                mit dem Support-Team zu interagieren. Die Optionen sind ein{" "}
                <strong>Help Center,</strong> und das
                <strong>
                  Einreichen von Support-Tickets über das Ticketing-System
                </strong>
                .
              </p>
            </div>
          </div>
          <p></p>
          <p>
            Das <strong>Help Centre</strong> besteht aus
            <strong>
              ausführlichen Leitfäden und Schritt-für-Schritt-Anleitungen
            </strong>
            in den Themenbereichen Grundlagen, Troubleshooting, Staking,
            Migration, und weiteren Anliegen. Ausführliche Anleitungen mit
            Screenshots helfen beim eigenständigen Durchführen der jeweiligen
            Prozesse. Leider sind die Anleitungen jedoch
            <strong>nur in englischer Sprache</strong> verfügbar.
          </p>
          <p>
            Begeistert sind wir davon nicht, denn die Kundenanfragen werden
            somit nicht unmittelbar beantwortet. Tatsächlich kann es{" "}
            <strong>24-72 Stunden</strong> dauern, bis man eine Antwort des
            Trust Wallet Kundensupport erhält. Enttäusht sind wir zudem, dass
            <strong>kein deutschsprachiger Kundensupport</strong>
            geboten wird.
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
