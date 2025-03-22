import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; // createRoot için
import App from "./App";
import store from './redux/store'; // Redux store'unuzu içeren dosya


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}> {/* App bileşenini Provider içine alıyoruz */}
    <App />
  </Provider>
);