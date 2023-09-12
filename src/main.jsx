import ReactDOM from "react-dom/client";
import { ContextProvider } from "./Context/Context";

import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <App />
  </ContextProvider>,
);
