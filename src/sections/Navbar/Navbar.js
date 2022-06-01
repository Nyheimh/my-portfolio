/*

import "./Navbar.css";
import Hamburger from "../../components/Hamburger/Hamburger";
import { sectionLinks } from "../../services/sectionLinks.js";
import { useState } from "react";

export default function Navbar({ windowDimension }) {
  const [hamburger, setHamburger] = useState(false);
  const [visible, setVisible] = useState(false);

  const sectionJSX = sectionLinks.map((section, index) =>
    <a
      key={index}
      href={section.href}
      className={`nav-link ${section.class}`}
    >
      {section.name}
    </a>
  )

  const handleClick = () => {
    setVisible(!visible);
    setHamburger(!hamburger);
  };

  const isMobile = windowDimension <= 640;

  return (
    <nav>
      <h1 className="nav-header">Nyheim Hunter</h1>
      {isMobile ? (
        <div className="mobile-console">
          <Hamburger className="hamburger-image" handleClick={handleClick} />
          <div
            className="hamburger-dropdown"
            style={{ display: hamburger && visible ? "grid" : "none" }}
            onClick={handleClick}
          >
            <p className="hamburger-close">✕</p>
            {sectionJSX}
          </div>
        </div>
      ) : (
          <div className="desktop-console">
            {sectionJSX}
        </div>
      )}
    </nav>
  );
}

*/

import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

export default function NavBar() {
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Nyheim Hunter
          </Link>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <a href="https://www.linkedin.com/in/nyheimhunter/">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </ul>
        </div>
      </nav>
    </>
  );
}
