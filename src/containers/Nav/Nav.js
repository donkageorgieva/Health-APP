import { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const navbarLinks = props.navLinks.map((link) => {
    return (
      <li className="nav-item" key={link.name + link.to}>
        <NavLink to={link.to} className="nav-link">
          {link.name}
        </NavLink>
      </li>
    );
  });
  return (
    <header>
      <nav className="navbar  navbar-dark navbar-expand-lg bg-primary">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={(e) => {
              setShowMenu(!showMenu);
            }}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className={
              showMenu
                ? "navbar-collapse collapse show"
                : "navbar-collapse collapse"
            }
            id="navbarNav"
          >
            <ul className="navbar-nav">{navbarLinks}</ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

//"collapse navbar-collapse"

export default Nav;
