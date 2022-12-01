import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { ReactQueryProvider } from "./Provider";
///https://www.youtube.com/watch?v=b88Z5POQBwI
// REACT_APP_API_KEY = b5347c780b99c35d84e6b3a5d8719791
// REACT_APP_API = https://api.themoviedb.org/3
// https://levelup.gitconnected.com/using-typescript-extending-generic-types-2c18459934ea
const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactQueryProvider>
        <App />
      </ReactQueryProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
