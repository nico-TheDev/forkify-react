import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppProvider } from "contexts/AppContext";

export default function GlobalProvider({ children }) {
    return (
        <Router>
            <AppProvider>{children}</AppProvider>
        </Router>
    );
}
