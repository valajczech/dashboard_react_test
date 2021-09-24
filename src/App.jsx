import "./styles/App.css";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import SummaryWidget from "./components/SummaryWidget";
import { React, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <Sidebar></Sidebar>
      <div className="content">
        <div className="summaries">
          <SummaryWidget name="Nových uživatelů" number="120" />
          <SummaryWidget name="Zobrazení" number="400" />
          <SummaryWidget name="Prokliků" number="355" />
          <SummaryWidget name="Sdílení" number="69" />
        </div>
      </div>
    </div>
  );
}
export default App;
