import React, {  useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/shreya-logo.svg";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const menuRef = useRef(null);

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />

      {/* Mobile menu icon */}
      <img
        src={menu_open}
        alt="menu"
        className="nav-mob-open"
        onClick={openMenu}
      />

      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          alt="close"
          className="nav-mob-close"
          onClick={closeMenu}
        />

        <li><AnchorLink href="#home" onClick={closeMenu}>Home</AnchorLink></li>
        <li><AnchorLink href="#about" onClick={closeMenu}>About</AnchorLink></li>
        <li><AnchorLink href="#services" onClick={closeMenu}>Services</AnchorLink></li>
        <li><AnchorLink href="#work" onClick={closeMenu}>Portfolio</AnchorLink></li>
        <li><AnchorLink href="#contact" onClick={closeMenu}>Contact</AnchorLink></li>
      </ul>

      <div className="nav-connect">
        <AnchorLink href="#contact">Connect With Me</AnchorLink>
      </div>
    </nav>
  );
};

export default Navbar;
