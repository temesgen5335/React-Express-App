// index.js (for React 18+)
import React from "react";
import ReactDOM from "react-dom/client"; // Import from 'react-dom/client' for React 18
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root")); // Create a root container
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
