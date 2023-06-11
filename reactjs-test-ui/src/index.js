import "react-app-polyfill/stable";
import "core-js";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { initStore } from "./store";
import { AuthProvider } from "./core/context/auth-provider";
import ReactToaster from "./core/toaster/react-toaster";

const store = initStore();

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AuthProvider>
      <App />
      <ReactToaster />
    </AuthProvider>
  </Provider>
);

reportWebVitals();
