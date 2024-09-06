// Refrence to this context
// import { useContext } from "react";
// import { ProfileContext } from "@contexts/ProfileContextProvider.jsx";
// const { projectStats } = useContext(ProfileContext);

// ... React modules
import { createContext } from "react";

// ... Context

// ... Components

// ... Assets
import { contactDetailsData } from "@data/profile_db.js";
import { aboutMeContentData } from "@data/profile_db.js";
import { skillsRatingsData } from "@data/profile_db.js";
import { skillsBadgeData } from "@data/profile_db.js";

import { contactSocialIconsData } from "@data/profile_db.js";
import serviceData from "@data/service_db";
import projectStatData from "@data/project_stat_db";

// Register variables
export const ProfileContext = createContext({
  contact_email: {},
  contact_location: {},
  contact_name: {},
  contact_phone: {},
  contact_profile: {},

  fullContactDetails: [],
  basicContactDetails: [],

  aboutMeContent: [],

  fullSkillsRatingsData: [],
  skillsChunks: [],

  fullContactSocialIcons: [],

  fullServiceData: [],
  projectStats: [],
});
/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const ProfileContextProvider = ({ children }) => {
  /*
  |----------------------------------------
  | States
  |----------------------------------------
  */

  /*
  |----------------------------------------
  | Contact details
  |----------------------------------------
  */
  const contact_name = contactDetailsData?.name;
  const contact_profile = contactDetailsData?.profile;
  const contact_location = contactDetailsData?.location;
  const contact_email = contactDetailsData?.email;
  const contact_phone = contactDetailsData?.phone;

  const fullContactDetails = [
    contact_name,
    contact_profile,
    contact_location,
    contact_email,
    contact_phone,
  ];

  const basicContactDetails = [contact_location, contact_phone, contact_email];

  /*
  |----------------------------------------
  | About me content
  |----------------------------------------
  */
  const aboutMeContent = aboutMeContentData;

  /*
  |----------------------------------------
  | Skills rating
  |----------------------------------------
  */
  const fullSkillsRatingsData = skillsRatingsData;

  const splitArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array?.slice(i, i + chunkSize));
    }

    return result;
  };

  const skillsChunks = splitArray(fullSkillsRatingsData, 3);

  /*
  |----------------------------------------
  | Icons
  |----------------------------------------
  */
  const fullContactSocialIcons = contactSocialIconsData;

  /*
  |----------------------------------------
  | Service and Performance
  |----------------------------------------
  */
  const fullServiceData = serviceData;
  const projectStats = projectStatData;

  /*
  |----------------------------------------
  | Context
  |----------------------------------------
  */
  const context = {
    contact_email,
    contact_location,
    contact_name,
    contact_phone,
    contact_profile,

    fullContactDetails,
    basicContactDetails,

    aboutMeContent,

    fullSkillsRatingsData,
    skillsChunks,

    fullContactSocialIcons,
    fullServiceData,
    projectStats,

    skillsBadgeData,
  };
  /*
  |----------------------------------------
  | Return jsx
  |----------------------------------------
  */
  return (
    <ProfileContext.Provider value={context}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContextProvider;

  