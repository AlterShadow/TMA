import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// import WebApp from "@twa-dev/sdk";
import "./index.css";

// WebApp.ready();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
