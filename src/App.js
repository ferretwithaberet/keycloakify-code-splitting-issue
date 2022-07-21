import React from "react";
import { KcApp as KcAppBase, defaultKcProps, getKcContext } from "keycloakify";
import "./App.css";

const { kcContext } = getKcContext({
  // mockPageId: "login.ftl",
});

const Login = React.lazy(() => import("./Login"));
const Register = React.lazy(() => import("./Register"));

const App = () => {
  switch (kcContext.pageId) {
    case "login.ftl":
      return <Login />;
    case "register-user-profile.ftl":
      return <Register />;
    default:
      return <KcAppBase kcContext={kcContext} {...defaultKcProps} />;
  }
};

export default App;
