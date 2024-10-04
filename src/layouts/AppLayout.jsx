// ... React modules
import { useContext, useEffect, useState } from "react";

// ... Context
import { ThemeContext } from "@contexts/ThemeContextProvider";

// ... Components
import Footer from "@layouts/Footer";
import Navigation from "@layouts/Navigation";
import MobileNav from "@layouts/MobileNav";
import BackToTopButton from "@components/buttons/BackToTopButton";
import ChatOnWhatsappButton from "@components/buttons/ChatOnWhatsappButton";
import SideNavigation from "./SideNavigation";

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const AppLayout = ({ children }) => {
  /*
  |----------------------------------------
  | Comment here
  |----------------------------------------
  */
  const { theme } = useContext(ThemeContext);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showChatOnWhatsapp, setShowChatOnWhatsapp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowBackToTop(true);
        setShowChatOnWhatsapp(true);
      } else {
        setShowBackToTop(false);
        setShowChatOnWhatsapp(false);
      }
    };

    // Initial check on load
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
  |----------------------------------------
  | Return
  |----------------------------------------
  */

  return (
    <div
      id="app_layout_container"
      className="bg_shape_grp_1 container-fluid row"
      data-theme={theme}
    >
      <div id="side_navigation" className="col-md-2 d-sm-inline d-none">
        <SideNavigation />
      </div>

      <div id="main_content_wrapper" className="col-md-10 col-12">
        <Navigation />

        {children}

        {showBackToTop && <BackToTopButton />}
        {showChatOnWhatsapp && <ChatOnWhatsappButton />}
        <MobileNav />
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
