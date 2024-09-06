// ... React modules
import { useContext } from "react";

// ... Context
import { DefaultContext } from "@contexts/DefaultContextProvider.jsx";
import { ProfileContext } from "@contexts/ProfileContextProvider.jsx";

// ... Components

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/

const AboutContactSection = () => {
  const { portrait_img } = useContext(DefaultContext);
  const { fullContactDetails } = useContext(ProfileContext);

  /*
    |----------------------------------------
    | Return
    |----------------------------------------
  */

  return (
    <>
      <div className="">
        <div className="row justify-content-md-start justify-content-center profile">
          <div
            className="col-md-12 mb-5"
            style={{ height: "200px", width: "240px" }}
          >
            <img
              src={portrait_img}
              className="img-fluid rounded"
              alt="Jhayphix : Samuel K. Ablordeppey"
              style={{ borderRadius: "50px", height: "100%", width: "100%" }}
            />
          </div>

          <div className="col-md-12 col-11">
            <div id="profile_info">
              {fullContactDetails?.map(({ type, text, icon }, index) => {
                return (
                  <p key={index} className="mb-2">
                    {icon}
                    <span className="fw-bold text_secondary_1">{type} : </span>
                    <span className="text_muted_1">{text}</span>
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContactSection;
