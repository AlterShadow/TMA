import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TonConnectUIProvider, THEME } from "@tonconnect/ui-react";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Dashboard from "./layout/Dashboard";
import "./App.css";

function App() {
  return (
    <Router>
      <TonConnectUIProvider
        manifestUrl="https://ton-connect.github.io/demo-dapp-with-wallet/tonconnect-manifest.json"
        uiPreferences={{ theme: THEME.DARK }}
        walletsListConfiguration={{
          includeWallets: [
            {
              appName: "safepalwallet",
              name: "SafePal",
              imageUrl:
                "https://s.pvcliping.com/web/public_image/SafePal_x288.png",
              aboutUrl: "https://www.safepal.com/download",
              jsBridgeKey: "safepalwallet",
              platforms: ["ios", "android", "chrome", "firefox"],
            },
            {
              appName: "tonwallet",
              name: "TON Wallet",
              imageUrl: "https://wallet.ton.org/assets/ui/qr-logo.png",
              aboutUrl:
                "https://chrome.google.com/webstore/detail/ton-wallet/nphplpgoakhhjchkkhmiggakijnkhfnd",
              universalLink: "https://wallet.ton.org/ton-connect",
              jsBridgeKey: "tonwallet",
              bridgeUrl: "https://bridge.tonapi.io/bridge",
              platforms: ["chrome", "android"],
            },
          ],
        }}
        actionsConfiguration={{
          twaReturnUrl: "https://t.me/tc_twa_demo_bot/start",
        }}
      >
        <div className="flex justify-center w-screen max-w-[420px]">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
          <Footer />
        </div>
      </TonConnectUIProvider>
    </Router>
  );
}

export default App;
