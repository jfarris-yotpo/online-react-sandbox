import "./styles.css";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    function initializeYotpoStartWidget() {
      window?.yotpoWidgetsContainer?.initWidgets?.();
    }
    initializeYotpoStartWidget();
  }, []);

  return (
    <div className="App">
      <h1>React sandbox</h1>
      <h2>Yotpo assets</h2>
      <div
        className="yotpo-widget-instance"
        data-yotpo-instance-id="155644"
        data-yotpo-product-id="1"
      ></div>
    </div>
  );
}
