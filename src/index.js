import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import WrapperLang from "./context/WrapperLang";

const root = ReactDOM.createRoot(document.getElementById("root"));
process.env.NODE_ENV !== "development"
  ? root.render(
      <React.StrictMode>
        <BrowserRouter>
          <WrapperLang>
            <App />
          </WrapperLang>
        </BrowserRouter>
      </React.StrictMode>
    )
  : root.render(
      <BrowserRouter>
        <WrapperLang>
          <App />
        </WrapperLang>
      </BrowserRouter>
    );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
