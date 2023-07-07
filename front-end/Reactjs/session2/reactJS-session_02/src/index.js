import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import reportWebVitals from "./reportWebVitals";
import Bai_2 from "./components/Bai_2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <fieldset className="container">
      <legend>Bài 1</legend>
      <h1 className="title-upper">Tung đồng xu</h1>
      <App />
    </fieldset>
    <fieldset className="container">
      <legend>Bài 2</legend>
      <h1 className="title-upper">Tung xúc xắc</h1>
      <Bai_2 />
    </fieldset>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
