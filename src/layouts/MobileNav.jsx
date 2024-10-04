import { NavLink } from "react-router-dom";
import { useContext } from "react";
// import { BsArrowUp } from "react-icons/bs";
// import { FaWhatsapp } from "react-icons/fa";

// Context
import { NavigationContext } from "@contexts/NavigationContextProvider";

const MobileNav = () => {
  const { mobile_nav_links } = useContext(NavigationContext);

  // Scroll to the top function
  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };

  return (
    <nav
      id="mobile_nav"
      className="navbar navbar-dark text-light fixed-bottom bg-dark d-md-none"
    >
      <div className="container-lg">
        <div className="row w-100 text-center">
          {/* <div className="col">
            <a
              href="https://wa.me/233248359918?text=Hello Jhay, I need your service!!"
              target="_blank"
              rel="noreferrer"
              className="text-light"
            >
              <FaWhatsapp size={20} />
              <div className="mobile_nav_name">Whatsapp</div>
            </a>
          </div> */}

          {/*  */}
          {mobile_nav_links?.map(({ name, path, icon, end }, index) => {
            return (
              <div className="col" key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "mobile_nav_active" : "text-light"
                  }
                  end={end}
                >
                  {icon}
                  <div className="mobile_nav_name">{name}</div>
                </NavLink>
              </div>
            );
          })}

          {/*  */}
          {/* <div className="col">
            <BsArrowUp onClick={scrollToTop} size={20} />
            <div className="mobile_nav_name">To Top</div>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;

//     </div>
