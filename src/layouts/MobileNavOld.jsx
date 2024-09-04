import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { BsArrowUpShort } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";

// Context
import { NavigationContext } from "@contexts/NavigationContextProvider";

const MobileNav = () => {
  const { mobile_nav_links } = useContext(NavigationContext);
  const nav_links_db = mobile_nav_links;

  // Scroll to the top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This enables smooth scrolling
    });
  };

  return (
    <div className={`mobile_nav_btn_container d-sm-none`}>
      {/* Add name, icon .... if needed */}
      {nav_links_db?.map(({ icon, path, end }, index) => {
        return (
          <NavLink
            className={({ isActive }) =>
              isActive ? "mobile_nav_btn mobile_nav_active" : "mobile_nav_btn"
            }
            key={index}
            to={path}
            end={end}
          >
            {icon}
          </NavLink>
        );
      })}

      <a
        href="https://wa.me/233248359918?text=Hello Jhay, I need your service!!"
        target="_blank"
        rel="noreferrer"
        className="mobile_nav_btn"
      >
        <FaWhatsapp size={20} />
      </a>

      <button className="mobile_nav_btn">
        <BsArrowUpShort onClick={scrollToTop} size={30} />
      </button>
    </div>
  );
};

export default MobileNav;
