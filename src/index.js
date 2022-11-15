import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <meta
            http-equiv="Content-Security-Policy"
            content="upgrade-insecure-requests"
        ></meta>
        <App />
    </React.StrictMode>
);
