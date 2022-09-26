import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// {HashRouter} hash router add 
// {unstable_HistoryRouter} to manupulaite history like back and forword press action
// {MemoryRouter} store last link 
// {StaticRouter} for server site development

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
