import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ScoreProvider } from "./contexts/ScoreContext.js";

ReactDOM.render(
    <React.StrictMode>
        <Auth0Provider
            domain="learn-build-type-xcc.us.auth0.com"
            clientId="30vUWo93AWF72YAr078uhLC8DJ9B9Ofq"
            redirectUri={window.location.origin}
        >
            <ScoreProvider>
                <App />
            </ScoreProvider>
        </Auth0Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
