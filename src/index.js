// import node modules
import $ from "jquery";
import React from "react";
import ReactDOM from "react-dom/client";

// import main style
import "./index.scss";

// import page sections
import Header from "./header/Header";
import Main from "./Main";
import Footer from "./footer/Footer";

// render react page based on `#root` element
const root = ReactDOM.createRoot($("#root")[0]);
root.render(
  <React.StrictMode>
    <div className="main-wrapper scrollbar">
      <Header />

      <div className="page-content-wrapper">
        <Main />
      </div>

      <Footer />
    </div>
  </React.StrictMode>
);
