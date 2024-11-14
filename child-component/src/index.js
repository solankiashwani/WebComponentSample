import "./WebComponentWrapper";

// That's all we need for the child component since
// WebComponentWrapper.js handles the web component registration

// 2. Parent App (React 18.2.0)
// parent-app/src/index.js
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Get the root element from your HTML
const container = document.getElementById("root");

// Create a root using React 18's createRoot API
const root = createRoot(container);

// Render your app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);