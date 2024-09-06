// ... React modules

// ... Context
import { useContext } from "react";
import { ProfileContext } from "@contexts/ProfileContextProvider";

// ... Components

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/

const SkillsOverviewSection = () => {
  const { skillsBadgeData } = useContext(ProfileContext);

  /*
    |----------------------------------------
    | Return
    |----------------------------------------
  */
  return (
    <div className="">
      <p className="h3 mb-4 mt-5">SKILLS</p>

      {skillsBadgeData?.map((section) => (
        <div key={section.title} style={{ marginBottom: "40px" }}>
          <h3
            style={{
              fontSize: "1.2rem",
              marginBottom: "15px",
              opacity: "0.8",
            }}
            className="text_secondary_2"
          >
            {section.title}
          </h3>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginBottom: "10px",
            }}
          >
            {section.skills.map((skill) => (
              <img
                key={skill.name}
                src={skill.url}
                alt={skill.name}
                style={{ height: "30px" }}
              />
            ))}
          </div>
          <hr
            style={{ border: "none", height: "1px" }}
            className="bg_secondary_1 mt-3"
          />
        </div>
      ))}
    </div>
  );
};

export default SkillsOverviewSection;
