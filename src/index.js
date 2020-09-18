import React from "react";
import { render } from "react-dom";
import GlobalProvider from "contexts/GlobalProvider";
import App from "./components/App";

render(
    <GlobalProvider>
        <App />
    </GlobalProvider>,
    document.getElementById("root")
);
