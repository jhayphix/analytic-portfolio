// ... React modules
import { NavLink, Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
// import { BsMoonFill, BsSun } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

// ... Context
import { ThemeContext } from "@contexts/ThemeContextProvider";
import { NavigationContext } from "@contexts/NavigationContextProvider";
import BrandName from "@layouts/BrandName.jsx";

// ... Components
import ThemeSwitch from "./ThemeSwitch";

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/

const Navigation = () => {
  /*
  |----------------------------------------
  |  Contexts and states
  |----------------------------------------
  */

  const { nav_links, home, web_dev_url } = useContext(NavigationContext);
  const { switchTheme, theme } = useContext(ThemeContext);
  const [nav_scrolled, setNavScrolled] = useState(false);
  const [link_clicked, setLinkClicked] = useState(false);
  /*
  |----------------------------------------
  |  Functions
  |----------------------------------------
  */

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  }, []);

  const handleScroll = () => {
    // if (
    //   document.body.scrollTop > 50 ||
    //   document.documentElement.scrollTop > 50
    // ) {
    if (window.scrollY > 10) {
      setNavScrolled(true);
    } else {
      setNavScrolled(false);
    }
  };

  /*
  |----------------------------------------
  | Return 
  |----------------------------------------
  */
  const nav_links_db = nav_links;
  const nav_expands_at = "sm";
  const home_path = home?.path;
  return (
    <nav
      id="navbar"
      className={`navbar d-sm-none d-block py-sm-2 py-0 navbar-expand-${nav_expands_at} sticky-top ${
        nav_scrolled ? "navbar_scrolled bg_shape_grp_1" : ""
      }`}
    >
      <div className="navbar_container container-lg">
        {/* Section 1: Logo and Brand Name */}
        <Link className="navbar-brand fw-bold text_secondary_1" to={home_path}>
          <BrandName />
        </Link>

        {/* ------------------------------------------------------------------------ */}
        {/* Display on mobile screen */}
        <ThemeSwitch
          onChange={switchTheme}
          theme={theme}
          containerClass={`d-inline-block d-${nav_expands_at}-none`}
        />
        {/* <div
          className={`navbar-theme-switch navbar_theme_switch d-inline-block d-${nav_expands_at}-none`}
        >
          <div className="form-check form-switch">
            <input
              className="form-check-input cursor_pointer"
              type="checkbox"
              id="themeSwitch"
              checked={theme === "dark" ? true : false}
              onChange={switchTheme}
            />
            <label
              className="form-check-label form_check_label cursor_pointer"
              htmlFor="themeSwitch"
            >
              {theme !== "dark" ? (
                <BsMoonFill className="bi text_secondary_1" />
              ) : (
                <BsSun className="bi text_secondary_1" />
              )}
            </label>
          </div>
        </div> */}

        {/* ------------------------------------------------------------------------ */}
        {/* Section 2: Navigation Links */}
        <div className="navbar-nav-section">
          <button
            className="navbar-toggler text_secondary_1"
            onClick={() => {
              setLinkClicked(false);
            }}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaBars className="text_secondary_1" />
          </button>
          <div
            className={`collapse navbar-collapse ${link_clicked ? "hide" : ""}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav navbar_nav">
              {nav_links_db?.map(({ name, path, end }, index) => {
                return (
                  <li className="nav-item nav_item" key={index}>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "nav-link nav_link py-1 active_nav_link"
                          : "nav-link nav_link py-1"
                      }
                      to={path}
                      end={end}
                      onClick={() => {
                        setLinkClicked(true);
                      }}
                    >
                      {name}
                    </NavLink>
                  </li>
                );
              })}

              <li className="nav-item side_nav_item mt-4">
                <a
                  className="nav-link side_nav_link py-1 ps-1 text-center text-decoration-underline"
                  href={web_dev_url}
                  rel="noreferrer"
                  target="_blank"
                >
                  View WebDev Portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ------------------------------------------------------------------------ */}
        {/* Display on large screen */}
        <ThemeSwitch
          onChange={switchTheme}
          theme={theme}
          containerClass={`d-none d-${nav_expands_at}-inline-block`}
        />
        {/* <div
          className={`navbar-theme-switch navbar_theme_switch d-none d-${nav_expands_at}-inline-block`}
        >
          <div className="form-check form-switch">
            <input
              className="form-check-input cursor_pointer"
              type="checkbox"
              id="themeSwitch"
              checked={theme === "dark" ? true : false}
              onChange={switchTheme}
            />
            <label
              className="form-check-label form_check_label cursor_pointer"
              htmlFor="themeSwitch"
            >
              {theme !== "dark" ? (
                <BsMoonFill className="bi text_secondary_1" />
              ) : (
                <BsSun className="bi text_secondary_1" />
              )}
            </label>
          </div>
        </div> */}
      </div>
    </nav>
  );
};

export default Navigation;
