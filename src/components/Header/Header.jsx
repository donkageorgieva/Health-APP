import { NavLink } from "react-router-dom";

const Header = (props) => {
  console.log(props.navLinks, "links");
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
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">{navbarLinks}</ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
