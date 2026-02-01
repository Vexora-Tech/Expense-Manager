import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MainContextAPI } from "./contexts/mainContextAPI.jsx";

createRoot(document.getElementById("root")).render(
  <MainContextAPI>
    <App />
  </MainContextAPI>,
);
