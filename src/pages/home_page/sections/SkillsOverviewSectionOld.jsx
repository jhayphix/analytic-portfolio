// ... React modules
import { useContext } from "react";

// ... Context
import { ProfileContext } from "@contexts/ProfileContextProvider.jsx";

// ... Components
import AnimatedProgressBar from "@components/cards/AnimatedProgressBar";

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/

const SkillsOverviewSectionOld = () => {
  const { skillsChunks } = useContext(ProfileContext);

  /*
    |----------------------------------------
    | Return
    |----------------------------------------
  */
  return (
    <div className="col-md-10 col-sm-9 col-11">
      <p className="h3 mb-4 mt-5">Skills</p>
      <div className="row skill-mf mb-5">
        {skillsChunks?.map((chunk, chunkIndex) => (
          <div key={chunkIndex} className="col-md-4 col-12 mb-5">
            {chunk.map(({ name, rate }, index) => (
              <div key={index}>
                <div className="text_muted_1 mt-4 mb-2">
                  {name.toUpperCase()} {rate}%
                </div>
                <AnimatedProgressBar
                  valueNow={rate}
                  valueMin="0"
                  valueMax="100"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsOverviewSectionOld;
