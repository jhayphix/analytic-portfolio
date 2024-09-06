// ... React modules
import { useContext } from "react";

// ... Context
import { ProfileContext } from "@contexts/ProfileContextProvider";

// ... Components
import SocialIcons from "@components/icons/SocialIcons";
import BrandName from "@layouts/BrandName.jsx";

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/

const ContactCard = () => {
  const { basicContactDetails } = useContext(ProfileContext);

  /*
    |----------------------------------------
    | Return
    |----------------------------------------
  */
  return (
    <div className="row justify-content-center">
      <div
        className="col-10 card rounded-lg p-0 border-0 box-shadow"
        style={{ backgroundColor: "transparent" }}
      >
        {/* Card Header */}
        <div className="card-header bg_primary_4 text-center">
          <h3 className="fw-bold text_secondary_1">
            <BrandName />
          </h3>
        </div>

        {/* <div className="card-body py-5 text_secondary_1 bg_primary_4"> */}
        <div className="card-body py-5 text_secondary_1">
          <h5 className="glass_morphism_effect card-title text_secondary_1 mb-4">
            Let's talk about a project
          </h5>

          <div className="glass_morphism_effect card-text text_secondary_1">
            {basicContactDetails?.map(({ text, icon }, index) => {
              return (
                <div key={index} className="text_container">
                  {icon}
                  <span className="">{text}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Card Footer */}
        <div className="card-footer bg_primary_5 text-center py-4">
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
