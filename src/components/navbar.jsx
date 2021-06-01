import React from "react";
import { NavLink } from "react-router-dom";

/* Component Description
Requires passings a list of links in the following form
  const links = [
    { path: "/movies", text: "Movies" },
    { path: "/customers", text: "Customers" },
    { path: "/rentals", text: "Rentals" },
  ];
*/
const NavBar = ({ links }) => {
  return (
    <nav className="navbar navbar-sm navbar-expand navbar-dark new-navbar justify-content-center">
      <ul className="navbar-nav align-items-center">
        {links.map((link) => (
          <li key={link.path} className="nav-item mx-4">
            <NavLink className="nav-link" style={link.style} to={link.path}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
