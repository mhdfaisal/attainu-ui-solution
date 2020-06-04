import React from "react";

import Home from "./components/pages/Home";
import { AppContextProvider } from "../src/context";

const App = () => {
    return (
        <AppContextProvider>
            <Home />
        </AppContextProvider>
    );
};

export default App;
