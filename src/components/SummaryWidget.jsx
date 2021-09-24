import React from "react";
import "../styles/components/summarywidget.css";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

class SummaryWidget extends React.Component {
  
  render() {
    return (
      <div className="summary-widget">
        <h2>{this.props.number}</h2>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default SummaryWidget;
