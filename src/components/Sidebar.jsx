import React from "react";
import "../styles/components/sidebar.css";
import {
  FaThLarge,
  FaBookmark,
  FaEdit,
  FaTable,
  FaChartBar,
  FaMap,
  FaEnvelope,
  FaCalendarAlt,
  FaFileAlt,
  FaSitemap,
  FaChevronLeft,
} from "react-icons/fa";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.isMinimized = false;
  }
  handleMinimize = () => {
    this.isMinimized = !this.isMinimized;
  };
  render() {
    return (
      <div className="sidebar">
        <div className="brand">
          <h3>DCSoft - Admin</h3>
        </div>
        <div className="content">
          <div
            className="route"
            id="dashboard-route"
            onClick={() => {
              this.handleMinimize();
            }}
          >
            <div>
              <FaThLarge className="icon" />
              <p>Nástěnka</p>
            </div>
          </div>
          <div className="wrapper" id="modules">
            <h3>Moduly</h3>
            <div className="routes">
              <a href="#" className="route">
                <div>
                  <FaBookmark className="icon" />
                  <p>Položky</p>
                </div>
                <FaChevronLeft className="arrow" />
              </a>
              <a href="#" className="route">
                <div>
                  <FaEdit className="icon" />
                  <p>Příspěvky</p>
                </div>
                <FaChevronLeft className="arrow" />
              </a>
              <a href="#" className="route">
                <div>
                  <FaTable className="icon" />
                  <p>Tabulky</p>
                </div>
                <FaChevronLeft className="arrow" />
              </a>
              <a href="#" className="route">
                <div>
                  <FaChartBar className="icon" />
                  <p>Grafy</p>
                </div>
                <FaChevronLeft className="arrow" />
              </a>
              <a href="#" className="route">
                <div>
                  <FaMap className="icon" />
                  <p>Mapy</p>
                </div>
                <FaChevronLeft className="arrow" />
              </a>
            </div>
          </div>
          <div className="wrapper" id="sections">
            <h3>Sekce</h3>
            <div className="routes">
              <a href="#" className="route">
                <div>
                  <FaEnvelope className="icon" />
                  <p>Pošta</p>
                </div>
                <FaChevronLeft className="arrow" />
              </a>
              <a href="#" className="route">
                <div>
                  <FaCalendarAlt className="icon" />
                  <p>Kalendář</p>
                </div>
                <FaChevronLeft className="arrow" />
              </a>
              <a href="#" className="route">
                <div>
                  <FaFileAlt className="icon" />
                  <p>Stránky</p>
                </div>
                <FaChevronLeft className="arrow" />
              </a>
              <a href="#" className="route">
                <div>
                  <FaSitemap className="icon" />
                  <p>Struktura</p>
                </div>
                <FaChevronLeft className="arrow" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
