import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { LangProvider } from "./i18n/LangContext.jsx";
import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/layout.css";
import "./styles/hero.css";
import "./styles/about.css";
import "./styles/internship.css";
import "./styles/experience.css";
import "./styles/projects.css";
import "./styles/skills.css";
import "./styles/activities.css";
import "./styles/contact.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LangProvider>
      <App />
    </LangProvider>
  </React.StrictMode>
);
