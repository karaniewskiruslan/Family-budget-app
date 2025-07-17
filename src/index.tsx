import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AppContext from "./context/AppContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AppContext>
    <App />
  </AppContext>,
);
