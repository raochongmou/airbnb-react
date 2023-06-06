import React, { memo } from "react";
import { useRoutes } from "react-router-dom";
import routes from "@/router";
import AppHeader from "./components/app-header";
import AppFooter from "./components/app-footer";
import { useScroll } from "./hooks/useScroll";

const App = memo(() => {
  useScroll();
  return (
    <div className="app">
      <AppHeader />
      <div className="app-content">
        {useRoutes(routes)}
      </div>
      <AppFooter />
    </div>
  );
});

export default App;
