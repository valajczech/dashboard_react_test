// IMPORT COMPONENTS
import "./styles/App.css";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import SummaryWidget from "./components/SummaryWidget";
import DeviceChart from "./components/DeviceChart";
import VisitorChart from "./components/VisitorChart";
import RecentLogsTable from "./components/RecentLogsTable";

import { React } from "react";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <Topbar />
        <div className="data">
          <div className="summaries">
            <SummaryWidget
              name="Nových uživatelů"
              number="120"
              status="up"
              percentile="10"
            />
            <SummaryWidget
              name="Zobrazení"
              number="400"
              status="up"
              percentile="25"
            />
            <SummaryWidget
              name="Prokliků"
              number="355"
              status="down"
              percentile="-4"
            />
            <SummaryWidget
              name="Sdílení"
              number="69"
              status="down"
              percentile="-8"
            />
          </div>
          <div className="statistics">
            <div className="graphs">
              <VisitorChart />
              <DeviceChart />
            </div>
            <RecentLogsTable />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;

/*

<div className="App">
      <Sidebar></Sidebar>
      <div className="content">
      <Topbar></Topbar>
        <div className="summaries">
          <SummaryWidget
            name="Nových uživatelů"
            number="120"
            status="up"
            percentile="10"
          />
          <SummaryWidget
            name="Zobrazení"
            number="400"
            status="up"
            percentile="25"
          />
          <SummaryWidget
            name="Prokliků"
            number="355"
            status="down"
            percentile="-4"
          />
          <SummaryWidget
            name="Sdílení"
            number="69"
            status="down"
            percentile="-8"
          />
        </div>
        <div className="statistics">
          <div className="graphs">
            <VisitorChart />
            <DeviceChart />
          </div>
          <RecentLogsTable />
        </div>
      </div>
    </div>
*/
