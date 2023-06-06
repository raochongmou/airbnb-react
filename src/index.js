// 第三方包
import "antd/dist/reset.css"; // or 'antd/dist/antd.less'
import "normalize.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import "@/assets/css/index.less";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { ThemeProvider } from "styled-components";
import theme from "./assets/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.Suspense fallback={"loading..."}>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </React.Suspense>
  </Provider>
);
