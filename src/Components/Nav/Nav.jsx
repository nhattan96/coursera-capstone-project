import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { NavStyles } from "./NavStyles.styles";
import { useState } from "react";

import logoImg from "../../assets/Logo.svg";
import hamburgerMenu from "../../assets/icon _hamburger_menu.svg";
import closeMenu from "../../assets/close.svg";

const Nav = (props) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  let location = useLocation();

  return (
    <NavStyles {...props}>
      <ul className={` ${isOpenMenu ? "desktop menu-active" : "desktop"}`}>
        <li>
          <Link to="/">
            <img
              src={logoImg}
              alt="Little Lemon Logo"
              onClick={() => setIsOpenMenu(false)}
            />
          </Link>
          {isOpenMenu && (
            <img
              className="img-close"
              src={closeMenu}
              alt="closeMenu"
              onClick={() => setIsOpenMenu((prev) => !prev)}
            />
          )}
        </li>
        <li
          className={`${
            location.pathname === "/" && !location.hash ? "active" : ""
          }`}
        >
          <Link to="/" onClick={() => setIsOpenMenu(false)}>
            Home
          </Link>
        </li>
        <li className={`${location.hash === "#about" ? "active" : ""}`}>
          <HashLink to="/#about" onClick={() => setIsOpenMenu(false)}>
            About
          </HashLink>
        </li>
        <li className={`${location.hash === "#menu" ? "active" : ""}`}>
          <HashLink to="/#menu" onClick={() => setIsOpenMenu(false)}>
            Menu
          </HashLink>
        </li>
        <li className={`${location.pathname === "/booking" ? "active" : ""}`}>
          <Link to="/booking" onClick={() => setIsOpenMenu(false)}>
            Reservations
          </Link>
        </li>
        <li className={`${location.pathname === "/order" ? "active" : ""}`}>
          <Link to="/order" onClick={() => setIsOpenMenu(false)}>
            Order Online
          </Link>
        </li>
        <li>
          <Link to="/login" onClick={() => setIsOpenMenu(false)}>
            Login
          </Link>
        </li>
      </ul>
      <ul className="mobile">
        <li>
          <Link to="/">
            <img src={logoImg} alt="Little Lemon Logo" />
          </Link>
        </li>
        <li>
          <img
            src={hamburgerMenu}
            alt="hamburgerMenu"
            onClick={() => setIsOpenMenu((prev) => !prev)}
          />
        </li>
      </ul>
    </NavStyles>
  );
};

export default Nav;
