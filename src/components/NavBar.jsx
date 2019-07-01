import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import uuid from "uuid";
import "./NavBar.css";

class NavBar extends Component {
  state = {};
  render() {
    const links = this.props.links.map(link => (
      <li className="nav-item" key={uuid()}>
        <NavLink
          to={`/cats/${link}`}
          className="nav-link"
          exact
          activeClassName="NavBar-selected"
        >
          {link}
        </NavLink>
      </li>
    ));
    return (
      <nav className="NavBar navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink to="/cats" className="NavBar-title navbar-brand">
          CatApp
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="NavBar-btn navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/cats"
                className="nav-link"
                exact
                activeClassName="NavBar-selected"
              >
                Home
              </NavLink>
            </li>
            {links}
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
