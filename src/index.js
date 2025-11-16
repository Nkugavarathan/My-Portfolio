import ReactDOM from "react-dom/client" // Note the /client import
import React from "react"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
