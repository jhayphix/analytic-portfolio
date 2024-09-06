// ... React modules
import { useContext } from "react";

// ... Context
import { ProfileContext } from "@contexts/ProfileContextProvider.jsx";

// ... Components

// ... Assets
// import { aboutMeContent } from "@data/profile_db.js";

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/

const AboutMeTextSection = () => {
  const { aboutMeContent } = useContext(ProfileContext);

  /*
    |----------------------------------------
    | Return
    |----------------------------------------
  */

  return (
    <>
      <div className="text_secondary_1">
        <h2
          className="text-light mt-md-0 mt-3 mb-4 text_secondary_1"
          // style={{ width: "145px" }}
        >
          <span className="fw-bold text_accent_1">About</span> <span>Me</span>
        </h2>

        <div>
          {aboutMeContent?.map(({ text }, index) => {
            return (
              <p className="lead text_secondary_1 mb-3" key={index}>
                {text}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AboutMeTextSection;
