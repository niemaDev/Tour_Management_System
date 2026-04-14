import React from "react";
import './index.css';
import ReactDOM from "react-dom/client";
import App from './App.jsx';
// Add curly braces around BrowserRouter
import { BrowserRouter } from "react-router-dom"; 

import { AuthProvider } from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);