import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { InfoProvider } from "./context/info.jsx";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
<<<<<<< HEAD
  <InfoProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </InfoProvider>
  
=======
  <BrowserRouter>
    <App />
  </BrowserRouter>
>>>>>>> dc505a563077ce7be4e9e594c4e74267e09500d2
);
