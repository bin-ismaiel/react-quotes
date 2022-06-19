import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
export default function MainNavigation() {
  const { header, logo, nav, active } = classes;
  return (
    <header className={header}>
      <div className={logo}>React Quotes</div>
      <nav className={nav}>
        <ul>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? active : "")}
              to="/quotes"
            >
              Quotes
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? active : "")}
              to="/new-quote"
            >
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
