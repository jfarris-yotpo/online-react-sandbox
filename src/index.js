import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <script
      async
      src="https://cdn-widgetsrepository.yotpo.com/v1/loader/mmmiW7Ht9qQxWgVdjgfJb0HwZiDxIMWm9HWP7Eg4"
    ></script>
  </StrictMode>
);
