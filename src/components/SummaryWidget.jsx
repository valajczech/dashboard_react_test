import React from "react";
import "../styles/components/summarywidget.css";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

class SummaryWidget extends React.Component {
  render() {
    let state;
    if (this.props.state === "down") {
      this.
      state = (
        <div className="status">
          <FaArrowDown />
          <p>{this.props.percentile} %</p>
        </div>
      );
    } else {
      state = (
        <div className="status">
          <FaArrowUp />
          <p>{this.props.percentile} %</p>
        </div>
      );
    }
    return (
      <div className="summary-widget">
        <div>
          <h2>{this.props.number}</h2>
          <p>{this.props.name}</p>
        </div>
        {state}
      </div>
    );
  }
}

export default SummaryWidget;
