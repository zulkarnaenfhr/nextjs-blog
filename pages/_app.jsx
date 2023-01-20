import "../styles/globals.css";
import { useState, createContext } from "react";
import AppContext from "../Components/AppContext";

function MyApp({ Component, pageProps }) {
    const [nameContext, setNameContext] = useState("false");
    return (
        <AppContext.Provider value={{ nameContext, setNameContext }}>
            <Component {...pageProps} />
        </AppContext.Provider>
    );
}

export default MyApp;
