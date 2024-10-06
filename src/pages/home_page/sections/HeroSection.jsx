// ... React modules
import { Link } from "react-router-dom";
import { useContext } from "react";

import {
  FaWrench,
} from "react-icons/fa";

// ... Context
import {NavigationContext} from "@contexts/NavigationContextProvider.jsx"

// ... Components
import AutoWriteText from "@components/config/AutoWriteText";
import HandHoldPenSvg from "@components/svg_icons/HandHoldPenSvg";

import ButtonDocument from "@components/buttons/ButtonDocument";
import ButtonStar from "@components/buttons/ButtonStar";
import SocialIcons from "@components/icons/SocialIcons";

// ... Assets
/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const HeroSection = () => {
  const { about } = useContext(NavigationContext);
  /*
    |----------------------------------------
    | Return
    |----------------------------------------
  */
  return (
    <section id="hero_section" className="p-0">
      <div className="hero_section_container">
        <div className="brand_container text-center">
          {/* Brand */}
          <h2 className="fw-bolder text_secondary_1 display-2">
            <span className="brand_name_highlight"> &#123; Jhay</span>
            Ph
            <span className="brand_name_highlight">
              <FaWrench className="brand_wrench" />
            </span>
            x <span className="brand_name_highlight"> &#125; </span>
          </h2>

          {/* AutoRight text */}
          <h2
            className="mb-3 mt-4 fw-semibold text_secondary_1"
            style={{ height: "2.5rem" }}
          >
            A <AutoWriteText />
            {/* <FaPencilAlt className="brand_pencil_write" /> */}
            <HandHoldPenSvg />
            <span className=""></span>
          </h2>

          {/* Hero icons container */}
          <div className="hero_social_icons_container mb-5 mt-5">
            <SocialIcons />
          </div>

          {/* Action buttons */}
          <div className="hero_btn_container d-flex align-items-center justify-content-center">
            <Link to={about?.path} className="me-4">
              <ButtonStar btn_text="Explore" />
            </Link>

            <ButtonDocument />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
