import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";
import "../../styles/global.css";
import { FaSearch, FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

// الروابط
import { navLinks } from "../../constants/navLinks";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname === path || location.pathname.startsWith(path);
  };

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  // إغلاق القائمة عند الضغط خارجها
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setOpenMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // إغلاق القائمة عند تكبير الشاشة (أكبر من 768px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpenMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header>
      <div className="container flex">

        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src="/public/headerLogo.png" alt="logo" className="headerImg" />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="links flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={isActive(link.path) ? "active" : ""}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Search + Courses Button */}
        <div className="serch flex">
          <div className="search-icon-box">
            <Link to="/">
              <div className="search-icon">
                <FaSearch />
              </div>
            </Link>
          </div>

          <div className="try-free-box">
            <Link to="/courses" className="inner">
              الدورات
            </Link>
          </div>

          <div className="LongIn-box">
            <Link to={"/LongIn"} className="inner">
              تسجيل الدخول
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-menu" onClick={toggleMenu} ref={buttonRef}>
          <FaBars className="fabars" />
        </div>

        {/* Mobile Side Menu */}
        <div className={`side-menu ${openMenu ? "show" : ""}`} ref={menuRef}>
          <div className="side-header">
            <div className="logo">
              <img src="/public/headerlogo.png" alt="logo" />
            </div>
            <div className="close-btn" onClick={toggleMenu}>
              <MdClose className="MdClose" />
            </div>
          </div>

          <div className="side-links">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`side-link ${isActive(link.path) ? "active" : ""}`}
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}
            <div className="try-free-box">
              <Link to="/courses" className="inner">
                الدورات
              </Link>
            </div>
            <div className="LongIn-box">
              <Link to={"/LongIn"} className="inner">
                تسجيل الدخول
              </Link>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}

export default Header;
