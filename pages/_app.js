import "../styles/globals.css";

import NavBar from "../components/ui/NavBar";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
