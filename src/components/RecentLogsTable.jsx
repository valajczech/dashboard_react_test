import React from "react";
import "../styles/components/recentlogtable.css";
import { Grid } from "gridjs-react";

class RecentLogsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [
        ["28.1.2021", 10049, "Windows 10", "Google Chrome", 22, 2528],
        ["28.1.2021", 10048, "Andriod", "Google Chrome", 15, 2128],
        ["27.1.2021", 10056, "iOS", "Safari", 12, 1854],
        ["27.1.2021", 10015, "macOS", "Safari", 5, 1220],
        ["27.1.2021", 10078, "Linux", "Firefox", 3, 1054],
        ["26.1.2021", 10043, "Windows 8", "Google Chrome", 1, 780],
        ["25.1.2021", 10025, "Windows 7", "Edge", 1, 252],
      ],
    };
  }

  render() {
    return (
      <div className="recent-log-table">
        <Grid
          data={this.state.tableData}
          columns={["Naposledy", "ID", "OS", "Prohlížeč", "Dnes", "Celkem"]}
          search={false}
          autoWidth={true}
          className={{
           th: "table-head",
           td: "table-data",
           table: "table",
           tr: "table-row"
          }}
        />
      </div>
    );
  }
}

export default RecentLogsTable;
