import * as React from "react";
import { styled } from "@mui/system";
import { Tabs } from "@mui/base/Tabs";
import { TabsList as BaseTabsList } from "@mui/base/TabsList";
import { TabPanel as BaseTabPanel } from "@mui/base/TabPanel";
import { buttonClasses } from "@mui/base/Button";
import { Tab as BaseTab, tabClasses } from "@mui/base/Tab";

export default function TabComponent3() {
  return (
    <Tabs defaultValue={0}>
      <TabsList>
        <Tab value={0}>
          <span>Trust Wallet für iOS downloaden</span>
        </Tab>
        <Tab value={1}>Trust Wallet für Android downloaden</Tab>
      </TabsList>
      <TabPanel value={0}>
        <div>
          <h3>Trust Wallet für iOS downloaden</h3>
          <p>
            Das Trust Wallet für iOS kann im iOS App Store heruntergeladen
            werden. Die Software hat in Version 5.25 aktuell 41,3 MB und
            erfordert iOS 13.0 oder höher. Die Trust Wallet ist in englischer
            und deutscher Sprache (und über 10 weiteren Sprachen) verfügbar.
          </p>
          <p>
            Nicht wundern: Die Trust Wallet wird von Six Days LLC, einer
            Tochterfirma von Binance, entwickelt. Darum ist als Publisher nicht
            Binance selbst, sondern die Six Days LLC angegeben.
            <strong>
              <a
                href="https://apps.apple.com/us/app/trust-crypto-bitcoin-wallet/id1288339409"
                target="_blank"
                rel="noreferrer"
              >
                Trust Wallet für IOS jetzt downloaden.
              </a>
            </strong>
          </p>
        </div>
      </TabPanel>
      <TabPanel value={1}>
        <div>
          <h3>Trust Wallet für Android downloaden</h3>
          <p>
            Die Trust Wallet für Android ist im Android Store aktuell in Version
            1.29.6 verfügbar, der Download ist 32 MB groß. Die App erfordert
            Android 6.0 oder höher, mehr als 10 Millionen Downloads kann die App
            bereits auf sich verbuchen.
          </p>
          <p>
            Im Android Store wird die DApps Platform Inc als Tochterunternehmen
            von Binance als Publisher angezeigt, es handelt sich dabei um die
            offizielle Binance-Wallet. Auch auf Android ist Trust Wallet in
            englischer und deutscher Sprache (sowie über 10 weiteren Sprachen)
            erhältlich.
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
