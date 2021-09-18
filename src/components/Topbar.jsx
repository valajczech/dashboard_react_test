//!TODO: at user element add dummy dropdown!

import React from "react";
import "../styles/components/topbar.css";
import { FaBars, FaChevronDown, FaSearch, FaUserCircle } from "react-icons/fa";

class Topbar extends React.Component {
  render() {
    return (
      <div className="topbar">
        <div className="wrapper">
          <div className="menu-button">
            <button onClick= {() => {
              // Placeholder
              console.log("You clicked on a shrinkbutton!");
            }}>
              <FaBars />
            </button>
          </div>
          <div className="searchbar">
            <input type="text" placeholder="Vyhledat"/>
            <button>
              <FaSearch />
            </button>
          </div>
        </div>
        <div className="user">
          <div className="photo">
            <FaUserCircle />
          </div>
          <button className="controls">
            <p>Admin</p>
            <FaChevronDown />
          </button>
        </div>
      </div>
    );
  }
}

export default Topbar;
